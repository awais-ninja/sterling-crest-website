import AudiencePageContent from "@/components/AudiencePageContent";
import { getAudienceBySlug } from "@/data/audiences";
import { createPageMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";

const SLUG = "high-net-worth-individuals";

export function generateMetadata() {
  const audience = getAudienceBySlug(SLUG);
  if (!audience) return {};
  return createPageMetadata({
    title: audience.metaTitle,
    description: audience.metaDescription,
    path: `/who-we-serve/${audience.slug}`,
  });
}

export default function Page() {
  const audience = getAudienceBySlug(SLUG);
  if (!audience) notFound();
  return <AudiencePageContent audience={audience} />;
}