export function authorized(request: Request, env: Env) {
  const expected = env.ACCESS_CODE;
  const supplied = request.headers.get("x-access-code") ?? "";
  return Boolean(expected && supplied && supplied === expected);
}

export function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" }
  });
}

export function safeFilename(name: string) {
  return name.replace(/[\\r\\n"]/g, "_").replace(/[\\/\\\\]/g, "_").slice(0, 240) || "file";
}
