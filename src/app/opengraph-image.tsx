import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "GrowMyClub — Analytics & Marketing Automation for Pickleball Clubs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0A0E1A 0%, #0F1629 50%, #0A0E1A 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Inter, system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Gradient orbs */}
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "20%",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "rgba(16, 185, 129, 0.15)",
            filter: "blur(80px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            right: "20%",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "rgba(34, 197, 94, 0.1)",
            filter: "blur(80px)",
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #4ade80, #16a34a)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ color: "white", fontSize: "24px", fontWeight: 700 }}>G</span>
          </div>
          <span style={{ color: "white", fontSize: "32px", fontWeight: 700 }}>
            GrowMyClub
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: "56px",
            fontWeight: 800,
            color: "white",
            textAlign: "center",
            lineHeight: 1.1,
            maxWidth: "900px",
            marginBottom: "16px",
          }}
        >
          Analytics & Marketing Automation for{" "}
          <span style={{ color: "#4ade80" }}>Pickleball Clubs</span>
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "22px",
            color: "#94A3B8",
            textAlign: "center",
            maxWidth: "700px",
          }}
        >
          Real-time analytics, player segmentation, automated SMS marketing, and
          retention tools.
        </div>
      </div>
    ),
    { ...size }
  );
}
