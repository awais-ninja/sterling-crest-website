import { getSiteUrl } from "@/config/site";
import { services } from "@/data/services";

export default function sitemap() {
  const siteUrl = getSiteUrl();
  const lastModified = new Date();

  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/contact",
    "/faqs",
    "/privacy",
    "/terms",
    "/cookies",
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/contact" || path === "/services" ? 0.9 : 0.7,
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${siteUrl}/services/${service.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
