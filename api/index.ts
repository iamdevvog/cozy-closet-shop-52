export const config = {
  runtime: "edge",
};

export default async function handler(request: Request): Promise<Response> {
  try {
    const { default: server } = await import("../dist/server/server.js");
    return server.fetch(request, {}, {});
  } catch (error) {
    console.error("Server entry error:", error);
    return new Response(
      `<!doctype html><html><body><h1>Server Error</h1><p>The application failed to start. Check the build output.</p></body></html>`,
      { status: 500, headers: { "content-type": "text/html; charset=utf-8" } }
    );
  }
}
