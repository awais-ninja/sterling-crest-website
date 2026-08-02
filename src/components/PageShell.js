import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileContactBar from "@/components/MobileContactBar";
import CookieConsent from "@/components/CookieConsent";
import JsonLd from "@/components/JsonLd";

export default function PageShell({ children, jsonLd }) {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navbar />
      <main id="main-content" className="min-h-screen">
        {children}
      </main>
      <Footer />
      {/* Clears fixed mobile contact bar so footer/CTA content is not covered */}
      <div
        className="h-[calc(5.75rem+env(safe-area-inset-bottom))] md:hidden"
        aria-hidden="true"
      />
      <MobileContactBar />
      <CookieConsent />
    </>
  );
}
