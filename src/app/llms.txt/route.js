import { buildLlmsTxt } from "@/lib/llms";

/**
 * Optional LLM / AI discovery document.
 * Not a universal web standard and not a replacement for sitemap or JSON-LD.
 */
export function GET() {
  const body = buildLlmsTxt();

  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
