import type { MetadataRoute } from "next";
import { BASE_PATH, SITE_DESCRIPTION, SITE_NAME } from "@/lib/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME} — atendimento com I.A. para o seu negócio`,
    short_name: SITE_NAME,
    description: SITE_DESCRIPTION,
    lang: "pt-BR",
    start_url: `${BASE_PATH}/`,
    display: "standalone",
    background_color: "#fbf6ee",
    theme_color: "#fbf6ee",
  };
}
