import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: absoluteUrl("/"), lastModified, changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/precos"), lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl("/sobre"), lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: absoluteUrl("/contato"), lastModified, changeFrequency: "yearly", priority: 0.6 },
  ];
}
