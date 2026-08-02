import PageShell from "@/components/PageShell";
import HeroSection from "@/components/HeroSection";
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
  getSiteNavigationSchema,
  getWebsiteSchema,
} from "@/lib/schema";
import { homepageFaqs } from "@/data/faqs";

export const metadata = createPageMetadata({
  title: "UK Accountants for Businesses & Individuals | Sterling Crest",
  description:
    "Practical UK accountants for businesses and individuals. Support with company accounts, tax returns, bookkeeping, payroll, VAT and landlord accounting.",
  path: "/",
});

export default function Home() {
  const reviewSchema = getReviewsSchema();

  return (
    <PageShell
      jsonLd={[
        getOrganizationSchema(),
        getWebsiteSchema(),
        getSiteNavigationSchema(),
        getFaqSchema(homepageFaqs),
        ...(reviewSchema || []),
      ]}
    >
      <HeroSection />
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
