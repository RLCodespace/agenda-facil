import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "agenda-fácil — assistente de I.A. no WhatsApp para agendamentos";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#fbf6ee",
          color: "#241c17",
        }}
      >
        <div style={{ fontSize: 40, color: "#b84a18" }}>agenda·fácil</div>
        <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.1, marginTop: 24 }}>
          Sua agenda cheia, mesmo quando você não pode responder.
        </div>
        <div style={{ fontSize: 34, marginTop: 32, opacity: 0.8 }}>
          Assistente de I.A. no WhatsApp para barbearias e salões
        </div>
      </div>
    ),
    size,
  );
}
