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
        }}
      >
        <div style={{ fontSize: 10.5, fontWeight: 800, letterSpacing: 1.8, color: "#8A90A6" }}>
          DEVELOPED BY
        </div>
        <a
          href="https://digitaldoc.online"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            marginTop: 5,
            fontSize: 20,
            fontWeight: 800,
            color: "#0B4BC4",
            letterSpacing: -0.2,
          }}
        >
          digitaldoc.online
        </a>
        <p style={{ margin: "6px 0 0", fontSize: 12.5, lineHeight: 1.5, color: "#6B7290" }}>
          Systems, websites, digital tools — built for everyone across Uganda.
        </p>
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
              color: "#101736",
              fontSize: 14,
              fontWeight: 800,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
            }}
          >
            <span style={{ color: "#C9962B" }}>📞</span>
            <span>Call</span>
          </a>
        </div>
        <div style={{ marginTop: 12, textAlign: "center", fontSize: 12.5, fontWeight: 700, color: "#6B7290" }}>
          {CONTACT.phoneLabel}
        </div>
      </div>
    </div>
  );
}
