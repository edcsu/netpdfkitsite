import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#0f0d17",
          color: "#f5f4f8",
          padding: 80,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 30 }}>
          <div style={{ width: 14, height: 14, borderRadius: 999, background: "#8b7cf6" }} />
          <span style={{ color: "#a9a5b8" }}>{siteConfig.package} · net8.0 · net9.0 · net10.0</span>
        </div>

        <div style={{ display: "flex", fontSize: 84, fontWeight: 700, marginTop: 32, letterSpacing: -2 }}>
          Net<span style={{ color: "#8b7cf6" }}>Pdf</span>
        </div>

        <div style={{ display: "flex", fontSize: 40, marginTop: 20, color: "#c9c5d6", maxWidth: 900 }}>
          {siteConfig.tagline}
        </div>

        <div style={{ display: "flex", fontSize: 26, marginTop: 48, color: "#a9a5b8" }}>
          PDFsharp · PdfPig · PDFtoImage · ZXing.Net · Svg.Skia
        </div>
      </div>
    ),
    size,
  );
}
