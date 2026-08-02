import { getSiteUrl } from "@/config/site";

/**
 * Crawler rules for search engines and AI-enabled search bots.
 * OAI-SearchBot supports OpenAI search discovery.
 * GPTBot is a separate crawler from ChatGPT-User (user-triggered fetches).
 * llms.txt is an optional machine-readable summary — not a replacement for SEO.
 */
export default function robots() {
  const siteUrl = getSiteUrl();

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/thank-you"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
      },
      {
        userAgent: "Bingbot",
        allow: "/",
      },
      {
        // OpenAI search discovery
        userAgent: "OAI-SearchBot",
        allow: "/",
      },
      {
        // Separate training / crawl bot
        userAgent: "GPTBot",
        allow: "/",
      },
      {
        // May fetch pages after a user request in ChatGPT
        userAgent: "ChatGPT-User",
        allow: "/",
      },
      {
        userAgent: "ClaudeBot",
        allow: "/",
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
