import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { businessDetails } from "@/config/business";
import { getSiteUrl, siteConfig } from "@/config/site";
import AnalyticsLoader from "@/components/AnalyticsLoader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: `${businessDetails.tradingName} | UK Accountants`,
    template: `%s`,
  },
  description: siteConfig.description,
  applicationName: businessDetails.tradingName,
  authors: [{ name: businessDetails.legalName }],
  creator: businessDetails.legalName,
  publisher: businessDetails.legalName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-touch-icon.svg" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: getSiteUrl(),
    siteName: businessDetails.tradingName,
    title: businessDetails.tradingName,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.defaultOgImage,
        width: 1200,
        height: 630,
        alt: businessDetails.tradingName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: businessDetails.tradingName,
    description: siteConfig.description,
    images: [siteConfig.defaultOgImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <AnalyticsLoader />
      </body>
    </html>
  );
}
