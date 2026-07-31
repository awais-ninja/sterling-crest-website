import { getSiteUrl } from "@/config/site";
import { services } from "@/data/services";
import { audiences } from "@/data/audiences";

export default function sitemap() {
  const siteUrl = getSiteUrl();
  const lastModified = new Date();

  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/who-we-serve",
    "/contact",
    "/faqs",
    "/site-map",
    "/privacy",
    "/terms",
    "/cookies",
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority:
      path === ""
        ? 1
        : path === "/contact" || path === "/services" || path === "/who-we-serve"
          ? 0.9
          : 0.7,
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${siteUrl}/services/${service.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const audienceRoutes = audiences.map((audience) => ({
    url: `${siteUrl}/who-we-serve/${audience.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes, ...audienceRoutes];
}
