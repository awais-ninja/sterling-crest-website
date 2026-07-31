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
      <main id="main-content" className="min-h-screen pb-24 md:pb-0">
        {children}
      </main>
      <Footer />
      <MobileContactBar />
      <CookieConsent />
    </>
  );
}
