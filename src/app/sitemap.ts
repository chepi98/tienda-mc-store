import type { MetadataRoute } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://macashopper.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, lastModified: new Date() },
    { url: `${siteUrl}/vitaminas`, lastModified: new Date() },
    { url: `${siteUrl}/skincare`, lastModified: new Date() },
    { url: `${siteUrl}/ropa`, lastModified: new Date() },
    { url: `${siteUrl}/pedidos-especiales`, lastModified: new Date() },
    { url: `${siteUrl}/contacto`, lastModified: new Date() },
  ];
}
