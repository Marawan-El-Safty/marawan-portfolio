import { ImageResponse } from "next/og";
import { PROFILE } from "@/lib/data";

export const runtime = "edge";
export const alt = `${PROFILE.name} — ${PROFILE.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
          background: "#0a0a0b",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        {/* ambient glows */}
        <div
          style={{
            position: "absolute",
            top: -120,
            left: -120,
            width: 460,
            height: 460,
            borderRadius: 9999,
            background: "rgba(124,92,255,0.35)",
            filter: "blur(120px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -160,
            right: -120,
            width: 460,
            height: 460,
            borderRadius: 9999,
            background: "rgba(199,242,77,0.25)",
            filter: "blur(120px)",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 9999,
              background: "#c7f24d",
              color: "#0a0a0b",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 32,
              fontWeight: 700,
            }}
          >
            M
          </div>
          <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 28 }}>
            {PROFILE.name}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 96,
              fontWeight: 600,
              color: "white",
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            Full-Stack Developer
          </div>
          <div
            style={{
              fontSize: 34,
              color: "rgba(255,255,255,0.65)",
              maxWidth: 900,
            }}
          >
            {PROFILE.tagline}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 16,
            color: "rgba(255,255,255,0.5)",
            fontSize: 24,
          }}
        >
          <span>Next.js</span>
          <span>·</span>
          <span>TypeScript</span>
          <span>·</span>
          <span>React</span>
          <span>·</span>
          <span>Available for freelance work</span>
        </div>
      </div>
    ),
    size,
  );
}
