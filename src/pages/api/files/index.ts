import type { APIRoute } from "astro";
import { authorized, json, safeFilename } from "../../../lib/server";

export const GET: APIRoute = async ({ request, locals }) => {
  const env = locals.runtime.env as Env;
  if (!authorized(request, env)) return json({ error: "Kode akses salah atau belum diisi." }, 401);

  const days = Math.max(1, Number(env.FILE_RETENTION_DAYS || 7));
  const cutoff = Date.now() - days * 24 * 60 * 60 * 1000;
  const listed = await env.FILES.list({ limit: 1000 });
  const files = listed.objects
    .filter((obj) => obj.uploaded.getTime() >= cutoff)
    .sort((a, b) => b.uploaded.getTime() - a.uploaded.getTime())
    .map((obj) => ({
      key: obj.key,
      name: obj.customMetadata?.originalName || obj.key,
      size: obj.size,
      uploaded: obj.uploaded.toISOString(),
      type: obj.customMetadata?.contentType || obj.httpMetadata?.contentType || "application/octet-stream"
    }));
  return json({ files, retentionDays: days });
};

export const POST: APIRoute = async ({ request, locals }) => {
  const env = locals.runtime.env as Env;
  if (!authorized(request, env)) return json({ error: "Kode akses salah atau belum diisi." }, 401);

  const originalName = safeFilename(decodeURIComponent(request.headers.get("x-file-name") || "file"));
  const contentType = request.headers.get("content-type") || "application/octet-stream";
  const declaredSize = Number(request.headers.get("content-length") || 0);
  if (declaredSize > 100 * 1024 * 1024) {
    return json({ error: "File lebih dari 100 MB. Gunakan file yang lebih kecil." }, 413);
  }

  const key = `${crypto.randomUUID()}`;
  const body = await request.arrayBuffer();

  await env.FILES.put(key, body, {
    httpMetadata: { contentType },
    customMetadata: { 
      originalName, 
      contentType, // Simpan juga di metadata sebagai cadangan
      uploadedAt: new Date().toISOString() 
    }
  });
  return json({ ok: true, key, name: originalName }, 201);
};
