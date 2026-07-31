import { createPageMetadata } from "@/lib/seo";
import ContactPageClient from "./ContactPageClient";

export const metadata = createPageMetadata({
  title: "Contact Sterling Crest Accountants",
  description:
    "Contact Sterling Crest Accountants to discuss bookkeeping, tax returns, payroll or company accounts. We aim to respond within one working day.",
  path: "/contact",
});

export default function ContactPage() {
  return <ContactPageClient />;
}
