import type { MetadataRoute } from "next";
import { BASE_PATH, SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: `${BASE_PATH}/painel/` },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
