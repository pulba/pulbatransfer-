import type { APIRoute } from "astro";
import { authorized, json, safeFilename } from "../../../lib/server";

export const GET: APIRoute = async ({ params, request, locals }) => {
  const env = locals.runtime.env as Env;
  if (!authorized(request, env)) return json({ error: "Kode akses salah atau belum diisi." }, 401);
  const key = params.key;
  if (!key || !/^[a-f0-9-]{36}$/i.test(key)) return json({ error: "File tidak ditemukan." }, 404);

  const object = await env.FILES.get(key);
  if (!object) return json({ error: "File tidak ditemukan atau sudah dihapus." }, 404);

  const name = safeFilename(object.customMetadata?.originalName || key);
  const headers = new Headers();
  object.writeHttpMetadata(headers);
  headers.set("content-disposition", `attachment; filename="${name.replace(/"/g, "_")}"`);
  headers.set("cache-control", "private, no-store");
  headers.set("x-content-type-options", "nosniff");
  
  // Use arrayBuffer to avoid DataCloneError on some runtimes (especially Windows/Wrangler)
  const body = await object.arrayBuffer();
  return new Response(body, { headers });
};

export const DELETE: APIRoute = async ({ params, request, locals }) => {
  const env = locals.runtime.env as Env;
  if (!authorized(request, env)) return json({ error: "Kode akses salah atau belum diisi." }, 401);
  const key = params.key;
  if (!key || !/^[a-f0-9-]{36}$/i.test(key)) return json({ error: "File tidak ditemukan." }, 404);
  await env.FILES.delete(key);
  return json({ ok: true });
};
