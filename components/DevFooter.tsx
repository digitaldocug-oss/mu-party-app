import { CONTACT } from "@/lib/config";

export default function DevFooter() {
  return (
    <div style={{ padding: "22px 18px 0" }}>
      <div
        style={{
          background: "#FFFFFF",
          border: "1px solid #E7E9F2",
          borderRadius: 20,
          padding: 18,
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: 13, color: "#8A90A6" }}>
          Site developed by{" "}
          <a
            href="https://digitaldoc.online"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontWeight: 800, color: "#0B4BC4" }}
          >
            digitaldoc.online ↗
          </a>
        </div>

        <div style={{ height: 1, background: "#E7E9F2", margin: "14px 0" }} />

        <div style={{ fontSize: 12.5, fontWeight: 700, color: "#8A90A6" }}>
          Need a website, app or system? ↓
        </div>

        <div style={{ marginTop: 14, display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 10 }}>
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              height: 48,
              borderRadius: 999,
              background: "#E8F4EC",
              border: "1px solid #A9D9BF",
              color: "#145E39",
              fontSize: 14,
              fontWeight: 800,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
            }}
          >
            <span>💬</span>
            <span>WhatsApp</span>
          </a>
          <a
            href={CONTACT.tel}
            style={{
              height: 48,
              borderRadius: 999,
              border: "1px solid #DCE1F0",
              background: "#FBFCFF",
              color: "#0B4BC4",
              fontSize: 14,
              fontWeight: 800,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
            }}
          >
            <span style={{ color: "#B5169E" }}>📞</span>
            <span>Call {CONTACT.phoneLabel.replace("+256 ", "0")}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
