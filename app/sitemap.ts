import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://tenantbooking.example.com", priority: 1 },
    { url: "https://tenantbooking.example.com/properties", priority: 0.9 }
  ];
}
