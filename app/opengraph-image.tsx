import { ImageResponse } from "next/og";

import { siteConfig } from "@/config/site";

export const alt = siteConfig.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
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
          background: "linear-gradient(135deg, #020617 0%, #064e3b 100%)",
          color: "white",
        }}
      >
        <div style={{ fontSize: 28, color: "#6ee7b7", letterSpacing: 6 }}>
          HELLOUMER.COM
        </div>
        <div style={{ fontSize: 120, fontWeight: 700, marginTop: 24 }}>
          {siteConfig.shortName}
        </div>
        <div style={{ fontSize: 44, color: "#cbd5e1", marginTop: 16 }}>
          {siteConfig.jobTitle}
        </div>
      </div>
    ),
    size
  );
}
