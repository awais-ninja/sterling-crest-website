import PageShell from "@/components/PageShell";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import ServicesSection from "@/components/ServicesSection";
import ClientsSection from "@/components/ClientsSection";
import WhySection from "@/components/WhySection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import { createPageMetadata } from "@/lib/seo";
import {
  getFaqSchema,
  getOrganizationSchema,
  getWebsiteSchema,
} from "@/lib/schema";
import { homepageFaqs } from "@/data/faqs";

export const metadata = createPageMetadata({
  title: "Accountants for Businesses and Individuals | Sterling Crest",
  description:
    "Practical accounting and tax support for individuals, landlords and growing businesses. Bookkeeping, tax returns, payroll and company accounts.",
  path: "/",
});

export default function Home() {
  return (
    <PageShell
      jsonLd={[
        getOrganizationSchema(),
        getWebsiteSchema(),
        getFaqSchema(homepageFaqs),
      ]}
    >
      <HeroSection />
      <TrustSection />
      <ServicesSection />
      <ClientsSection />
      <WhySection />
      <HowItWorksSection />
      <FAQSection />
      <CTASection />
    </PageShell>
  );
}
