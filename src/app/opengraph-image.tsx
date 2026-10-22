import { ImageResponse } from "next/og";
import { profile } from "@/data/portfolio";

export const alt = `${profile.shortName} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Social preview card shown when the portfolio link is shared on LinkedIn, WhatsApp, etc.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#08090c",
          color: "#f2f4f7",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 18,
              background: "#7aa2ff",
              color: "#08090c",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 32,
              fontWeight: 700,
            }}
          >
            HA
          </div>
          <div style={{ fontSize: 28, color: "#9aa1ad" }}>Portfolio</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: -2 }}>{profile.name}</div>
          <div style={{ fontSize: 36, color: "#7aa2ff" }}>{profile.role}</div>
          <div style={{ fontSize: 28, color: "#9aa1ad", maxWidth: 900 }}>{profile.headline}</div>
        </div>
      </div>
    ),
    size,
  );
}
