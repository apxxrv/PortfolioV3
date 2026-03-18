import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Apoorv Singh | Software Engineer"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#050505",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          fontFamily: "serif",
        }}
      >
        {/* Top label */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#2563eb" }} />
          <span style={{ color: "#555", fontSize: "14px", letterSpacing: "0.3em", fontFamily: "monospace" }}>
            APOORV.DEV
          </span>
        </div>

        {/* Main content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <span style={{ color: "#333", fontSize: "14px", letterSpacing: "0.3em", fontFamily: "monospace" }}>
              01 — ROLE
            </span>
            <span style={{ color: "#fafafa", fontSize: "80px", fontWeight: 300, lineHeight: 1, letterSpacing: "-2px" }}>
              APOORV{" "}
              <span style={{ fontStyle: "italic" }}>SINGH</span>
            </span>
          </div>

          <div style={{ display: "flex", gap: "16px" }}>
            {["FOUNDING ENGINEER", "AI PRODUCT BUILDER", "ASU CS · GPA 3.8"].map((tag) => (
              <div
                key={tag}
                style={{
                  border: "1px solid #222",
                  borderRadius: "100px",
                  padding: "8px 20px",
                  color: "#555",
                  fontSize: "12px",
                  letterSpacing: "0.2em",
                  fontFamily: "monospace",
                  display: "flex",
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <span style={{ color: "#333", fontSize: "13px", letterSpacing: "0.2em", fontFamily: "monospace" }}>
            PYTHON · TYPESCRIPT · AWS · REACT
          </span>
          <div
            style={{
              background: "#2563eb",
              borderRadius: "100px",
              padding: "10px 24px",
              color: "#fff",
              fontSize: "12px",
              letterSpacing: "0.2em",
              fontFamily: "monospace",
              display: "flex",
            }}
          >
            AVAILABLE FOR WORK ●
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
