import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://site-nathalia-oab.vercel.app";

  return [
    { url: `${baseUrl}/`, lastModified: new Date() },
    { url: `${baseUrl}/sobre`, lastModified: new Date() },
    { url: `${baseUrl}/atuacao/direito-civil`, lastModified: new Date() },
    { url: `${baseUrl}/blog`, lastModified: new Date() },
    { url: `${baseUrl}/contato`, lastModified: new Date() },
  ];
}
