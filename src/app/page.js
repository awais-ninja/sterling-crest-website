import PageShell from "@/components/PageShell";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import ServicesSection from "@/components/ServicesSection";
import ClientsSection from "@/components/ClientsSection";
import LocalRelevance from "@/components/LocalRelevance";
import WhySection from "@/components/WhySection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ReviewsSection from "@/components/ReviewsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import { createPageMetadata } from "@/lib/seo";
import {
  getFaqSchema,
  getOrganizationSchema,
  getReviewsSchema,
  getWebsiteSchema,
} from "@/lib/schema";
import { homepageFaqs } from "@/data/faqs";

export const metadata = createPageMetadata({
  title: "UK Accountants for Limited Companies and Self Assessment",
  description:
    "UK accountants for limited companies, self assessment, company accounts, corporation tax, bookkeeping, payroll, VAT and landlord accounting.",
  path: "/",
});

export default function Home() {
  const reviewSchema = getReviewsSchema();

  return (
    <PageShell
      jsonLd={[
        getOrganizationSchema(),
        getWebsiteSchema(),
        getFaqSchema(homepageFaqs),
        ...(reviewSchema || []),
      ]}
    >
      <HeroSection />
      <TrustSection />
      <ServicesSection />
      <ClientsSection />
      <LocalRelevance />
      <WhySection />
      <HowItWorksSection />
      <ReviewsSection />
      <FAQSection />
      <CTASection />
    </PageShell>
  );
}
