import { ImageResponse } from "next/og";

export const runtime = "edge";
export const contentType = "image/png";
export const size = { width: 1200, height: 630 };

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0f",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* Radial glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(201,168,76,0.14) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Diagonal grid lines */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            display: "flex",
          }}
        />

        {/* Center content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 12,
            position: "relative",
          }}
        >
          {/* Compass mark */}
          <div
            style={{
              display: "flex",
              width: 64,
              height: 64,
              borderRadius: "50%",
              border: "1.5px solid rgba(201,168,76,0.4)",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 8,
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#c9a84c",
                display: "flex",
              }}
            />
          </div>

          {/* Brand name */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 4,
            }}
          >
            <span
              style={{
                color: "#c9a84c",
                fontSize: 72,
                fontWeight: 700,
                letterSpacing: "-0.02em",
                lineHeight: 1,
              }}
            >
              CAIS
            </span>
            <span
              style={{
                color: "rgba(255,255,255,0.45)",
                fontSize: 22,
                fontWeight: 300,
                letterSpacing: "0.35em",
                textTransform: "uppercase",
              }}
            >
              INVESTIMENTOS
            </span>
          </div>

          {/* Tagline */}
          <div
            style={{
              marginTop: 20,
              color: "rgba(255,255,255,0.35)",
              fontSize: 22,
              letterSpacing: "0.04em",
              textAlign: "center",
            }}
          >
            Sua casa de investimentos
          </div>
        </div>

        {/* Bottom pill */}
        <div
          style={{
            position: "absolute",
            bottom: 44,
            display: "flex",
            alignItems: "center",
            gap: 14,
            padding: "10px 28px",
            border: "1px solid rgba(201,168,76,0.3)",
            borderRadius: 100,
            background: "rgba(201,168,76,0.07)",
          }}
        >
          <span
            style={{ color: "#c9a84c", fontSize: 15, fontWeight: 700 }}
          >
            BTG
          </span>
          <div
            style={{
              width: 1,
              height: 18,
              background: "rgba(255,255,255,0.1)",
              display: "flex",
            }}
          />
          <span
            style={{ color: "rgba(255,255,255,0.4)", fontSize: 14 }}
          >
            Parceiro Credenciado · Top 10 Necton 2024
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
