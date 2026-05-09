import { readFile } from "fs/promises";
import path from "path";
import { ImageResponse } from "next/og";
import { LOGO_DA_FILE_PATH } from "@/lib/brand-assets";

const W = 1200;
const H = 630;

/** Vista previa al compartir en WhatsApp, LinkedIn, X, Slack, etc. */
export async function createSocialImage() {
  const logoPath = path.join(process.cwd(), "public", LOGO_DA_FILE_PATH);
  const logoBuffer = await readFile(logoPath);
  const logoSrc = `data:image/png;base64,${logoBuffer.toString("base64")}`;

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
          {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse solo admite <img> */}
          <img
            src={logoSrc}
            width={112}
            height={112}
            alt=""
            style={{
              objectFit: "contain",
            }}
          />
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
                fontSize: 26,
                fontWeight: 600,
                color: "#52a8ff",
                lineHeight: 1.25,
                fontFamily:
                  "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif",
              }}
            >
              Desarrollador de software y automatizaciones
            </div>
          </div>
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#9fb0c8",
            maxWidth: 920,
            lineHeight: 1.45,
            fontFamily:
              "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif",
          }}
        >
          Apps a medida, integraciones, bots de WhatsApp e IA aplicada al negocio · React, Next.js, Node.js y TypeScript
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
