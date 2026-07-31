import { getSiteUrl, siteConfig } from "@/config/site";

/**
 * Build unique Next.js metadata for a page.
 * @param {object} options
 */
export function createPageMetadata({
  title,
  description,
  path = "/",
  ogImage,
  noIndex = false,
}) {
  const siteUrl = getSiteUrl();
  const url = `${siteUrl}${path === "/" ? "" : path}`;
  const image = ogImage || siteConfig.defaultOgImage;
  const absoluteImage = image.startsWith("http") ? image : `${siteUrl}${image}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [
        {
          url: absoluteImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteImage],
    },
  };
}
