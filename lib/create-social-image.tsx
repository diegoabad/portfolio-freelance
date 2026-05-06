import { ImageResponse } from "next/og";

const W = 1200;
const H = 630;

/** Vista previa al compartir en WhatsApp, LinkedIn, X, Slack, etc. */
export function createSocialImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "linear-gradient(145deg, #0d1528 0%, #070a12 55%, #0a1628 100%)",
          padding: 72,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -80,
            width: 420,
            height: 420,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(82,168,255,0.22) 0%, transparent 70%)",
            display: "flex",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 28, marginBottom: 36 }}>
          <div
            style={{
              width: 112,
              height: 112,
              borderRadius: 28,
              border: "4px solid #52a8ff",
              background: "#52a8ff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#0b1220",
              fontSize: 52,
              fontWeight: 700,
              letterSpacing: -2,
              fontFamily:
                "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif",
            }}
          >
            DA
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div
              style={{
                fontSize: 58,
                fontWeight: 700,
                color: "#eef2f7",
                letterSpacing: -1,
                lineHeight: 1.1,
                fontFamily:
                  "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif",
              }}
            >
              Diego Abad
            </div>
            <div
              style={{
                fontSize: 30,
                fontWeight: 600,
                color: "#52a8ff",
                fontFamily:
                  "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif",
              }}
            >
              Desarrollador de software
            </div>
          </div>
        </div>
        <div
          style={{
            fontSize: 26,
            color: "#9fb0c8",
            maxWidth: 920,
            lineHeight: 1.45,
            fontFamily:
              "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif",
          }}
        >
          Apps, automatizaciones y bots de WhatsApp · React, Next.js, Node.js, TypeScript y PostgreSQL
        </div>
      </div>
    ),
    {
      width: W,
      height: H,
    },
  );
}

export const socialImageSize = { width: W, height: H };
