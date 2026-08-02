import { Suspense } from "react";
import { cookies } from "next/headers";
import { Geist } from "next/font/google";
import "./globals.css";
import { businessDetails } from "@/config/business";
import { getSiteUrl, siteConfig } from "@/config/site";
import AnalyticsConsentSync from "@/components/AnalyticsConsentSync";
import AnalyticsPageView from "@/components/AnalyticsPageView";
import GoogleTags, {
  GoogleTagManagerNoscript,
} from "@/components/GoogleTags";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: `UK Accountants for Businesses & Individuals | Sterling Crest`,
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
    icon: [{ url: "/fav.ico", sizes: "any" }],
    apple: [
      {
        url: "/apple-touch-icon-iphone-retina-120x120.png",
        sizes: "120x120",
        type: "image/png",
      },
      {
        url: "/apple-touch-icon-ipad-retina-152x152.png",
        sizes: "152x152",
        type: "image/png",
      },
    ],
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
        alt: "Sterling Crest Accountants – accounting and tax services",
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
  other: {
    "llms-txt": `${getSiteUrl()}/llms.txt`,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0B1C2D" },
  ],
};

function resolveTheme(value) {
  return value === "light" || value === "dark" ? value : "dark";
}

export default async function RootLayout({ children }) {
  const cookieStore = await cookies();
  const theme = resolveTheme(cookieStore.get("sc-theme")?.value);

  return (
    <html lang="en-GB" data-theme={theme} suppressHydrationWarning>
      <head>
        <link
          rel="alternate"
          type="text/plain"
          href={`${getSiteUrl()}/llms.txt`}
          title="LLM website information"
        />
        <link
          rel="preload"
          as="image"
          href="/homepage/home-page-hero-mobile.webp"
          type="image/webp"
          media="(max-width: 1023px)"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          href="/homepage/home-page-hero.webp"
          type="image/webp"
          media="(min-width: 1024px)"
          fetchPriority="high"
        />
      </head>
      <body
        className={`${geistSans.variable} antialiased bg-surface text-ink`}
        style={{ colorScheme: theme }}
        suppressHydrationWarning
      >
        <GoogleTagManagerNoscript />
        <GoogleTags />
        <ThemeProvider defaultTheme={theme}>
          {children}
          <AnalyticsConsentSync />
          <Suspense fallback={null}>
            <AnalyticsPageView />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
