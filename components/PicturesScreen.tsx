import { EVENT } from "@/lib/config";
import DevFooter from "./DevFooter";

export default function PicturesScreen() {
  return (
    <div>
      <div style={{ background: "#FFFFFF", padding: "14px 20px 18px", borderBottom: "1px solid #E7E9F2" }}>
        <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: 1.8, color: "#B5169E" }}>
          REBECCA CELL · MOTHER&apos;S UNION
        </div>
        <h2 className="font-serif-brand" style={{ margin: "6px 0 0", fontSize: 30, fontWeight: 700, color: "#101736" }}>
          Pictures
        </h2>
      </div>
      <div style={{ padding: 18 }}>
        <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: 1.6, color: "#6B7290" }}>EVENT PHOTOS</div>
        <p style={{ margin: "8px 0 0", fontSize: 14, lineHeight: 1.6, color: "#4C536E" }}>
          Access the full End of Year Party photo collection on Google Drive.
        </p>

        <div style={{ marginTop: 14, background: "linear-gradient(150deg, #0B4BC4, #4A1A82)", borderRadius: 22, padding: 20, color: "#FFFFFF" }}>
          <div style={{ width: 58, height: 58, borderRadius: "50%", background: "rgba(255,255,255,.18)", display: "grid", placeItems: "center", fontSize: 24 }}>
            📷
          </div>
          <div style={{ marginTop: 16, fontSize: 11, fontWeight: 800, letterSpacing: 1.6, color: "rgba(255,255,255,.72)" }}>
            MOTHER&apos;S UNION END OF YEAR PARTY 2026
          </div>
          <div style={{ marginTop: 6, fontSize: 22, fontWeight: 800, lineHeight: 1.2 }}>Open the Photo Drive</div>
          <p style={{ margin: "8px 0 0", fontSize: 14, lineHeight: 1.55, color: "rgba(255,255,255,.82)" }}>
            Tap to view and download all party photos on Google Drive.
          </p>
          <a
            href={EVENT.driveUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginTop: 16,
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              height: 52,
              padding: "0 22px",
              borderRadius: 14,
              background: "#FFFFFF",
              color: "#0B4BC4",
              fontSize: 16,
              fontWeight: 800,
            }}
          >
            View Photos ↗
          </a>
        </div>

        <div style={{ marginTop: 12, background: "#FFFFFF", border: "1px solid #E7E9F2", borderRadius: 18, padding: 16, display: "flex", gap: 12 }}>
          <span style={{ flex: "none", fontSize: 16 }}>ℹ️</span>
          <p style={{ margin: 0, fontSize: 13, lineHeight: 1.55, color: "#4C536E" }}>
            The link opens a shared Google Drive folder. If you would like to contribute photos, share them with
            the organising team and they will be added.
          </p>
        </div>
      </div>

      <DevFooter />
      <div style={{ height: 100 }} />
    </div>
  );
}
