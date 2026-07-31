import ServicePageContent from "@/components/ServicePageContent";
import { getServiceBySlug } from "@/data/services";
import { createPageMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";

const SLUG = "self-assessment";

export function generateMetadata() {
  const service = getServiceBySlug(SLUG);
  if (!service) return {};
  return createPageMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
  });
}

export default function Page() {
  const service = getServiceBySlug(SLUG);
  if (!service) notFound();
  return <ServicePageContent service={service} />;
}
