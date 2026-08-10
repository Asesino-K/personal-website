import type { MetadataRoute } from "next";

const baseUrl = "https://lumenchen.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: baseUrl },
    { url: `${baseUrl}/research` },
    { url: `${baseUrl}/projects` },
    { url: `${baseUrl}/writing` },
    { url: `${baseUrl}/cv` },
  ];
}
