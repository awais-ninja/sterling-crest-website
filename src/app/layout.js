import { cookies } from "next/headers";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { businessDetails } from "@/config/business";
import { getSiteUrl, siteConfig } from "@/config/site";
import AnalyticsLoader from "@/components/AnalyticsLoader";
import { ThemeProvider } from "@/components/ThemeProvider";

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

function resolveTheme(value) {
  return value === "light" || value === "dark" ? value : "dark";
}

export default async function RootLayout({ children }) {
  const cookieStore = await cookies();
  const theme = resolveTheme(cookieStore.get("sc-theme")?.value);

  return (
    <html lang="en-GB" data-theme={theme} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-surface text-ink`}
        style={{ colorScheme: theme }}
        suppressHydrationWarning
      >
        <ThemeProvider defaultTheme={theme}>
          {children}
          <AnalyticsLoader />
        </ThemeProvider>
      </body>
    </html>
  );
}
