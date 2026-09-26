export const SITE_NAME = "agenda-fácil";

export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

// Origem pública do site. Ao migrar para domínio próprio, defina NEXT_PUBLIC_SITE_URL.
export const SITE_ORIGIN = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://rlcodespace.github.io"
).replace(/\/$/, "");

export const SITE_URL = `${SITE_ORIGIN}${BASE_PATH}`;

export const SITE_DESCRIPTION =
  "Assistente de I.A. no WhatsApp para barbearias, salões e pequenos negócios: agenda, remarca e cancela horários por você, 24 horas por dia.";

export const CONTACT_EMAIL = "contato@agendafacil.com.br";

/** URL absoluta de uma rota do site, sempre com barra final (trailingSlash). */
export function absoluteUrl(path: string): string {
  const clean = path === "/" ? "/" : `/${path.replace(/^\/|\/$/g, "")}/`;
  return `${SITE_URL}${clean}`;
}
