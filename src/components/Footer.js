import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#0B1C2D] border-t border-[#C9A14A]">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
          {/* Column 1: Brand & Positioning */}
          <div className="text-center md:text-left">
            <div className="mb-6 flex justify-center md:justify-start">
              <Image
                src="/logo.svg"
                alt="Sterling Crest Accountants LTD"
                width={180}
                height={60}
                className="h-12 w-auto mb-4"
              />
            </div>
            <p className="text-[#AAB2BD] leading-relaxed">
              Professional accountancy and tax services delivered with clarity,
              structure, and integrity across the UK.
            </p>
          </div>

          {/* Column 2: Services */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-[#F5F7FA] mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-[#AAB2BD] hover:text-[#C9A14A] transition-colors"
                >
                  Accounting & Bookkeeping
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-[#AAB2BD] hover:text-[#C9A14A] transition-colors"
                >
                  Tax Planning & Compliance
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-[#AAB2BD] hover:text-[#C9A14A] transition-colors"
                >
                  Self-Assessment
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-[#AAB2BD] hover:text-[#C9A14A] transition-colors"
                >
                  Payroll Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-[#AAB2BD] hover:text-[#C9A14A] transition-colors"
                >
                  Business Advisory
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-[#F5F7FA] mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-[#AAB2BD] hover:text-[#C9A14A] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/faqs"
                  className="text-[#AAB2BD] hover:text-[#C9A14A] transition-colors"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[#AAB2BD] hover:text-[#C9A14A] transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-[#AAB2BD] hover:text-[#C9A14A] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-[#AAB2BD] hover:text-[#C9A14A] transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Legal */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-[#F5F7FA] mb-4">
              Contact
            </h3>
            <div className="text-[#AAB2BD] space-y-3 mb-6">
              <p>
                Email:{" "}
                <a
                  href="mailto:info@sterlingcrestaccountants.co.uk"
                  className="hover:text-[#C9A14A] transition-colors"
                >
                  info@sterlingcrestaccountants.co.uk
                </a>
              </p>
              <p>
                Phone:{" "}
                <a
                  href="tel:"
                  className="hover:text-[#C9A14A] transition-colors"
                >
                  [UK number]
                </a>
              </p>
            </div>

            <div className="border-t border-[#C9A14A]/30 pt-6 mt-6">
              <div className="text-[#AAB2BD] space-y-2 text-sm">
                <p>Sterling Crest Accountants LTD</p>
                <p>Registered in England & Wales</p>
                <p>Company Number: [To be inserted]</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="bg-[#081524] border-t border-[#C9A14A] border-opacity-20">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#AAB2BD] text-center text-sm">
              © {new Date().getFullYear()} Sterling Crest Accountants LTD. All
              rights reserved.
            </p>
            <p className="text-[#AAB2BD] text-center text-sm">
              Made with <span className="text-[#C9A14A]">❤️</span> by{" "}
              <a
                href="https://www.awaisdigitalservices.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C9A14A] hover:underline transition-colors"
              >
                ADS
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
