import { AGENDA } from "@/lib/config";
import DevFooter from "./DevFooter";

export default function AgendaScreen() {
  return (
    <div>
      <div style={{ background: "#FFFFFF", padding: "14px 20px 18px", borderBottom: "1px solid #E7E9F2" }}>
        <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: 1.8, color: "#B5169E" }}>
          SUNDAY, 22 NOVEMBER
        </div>
        <h2 className="font-serif-brand" style={{ margin: "6px 0 0", fontSize: 30, fontWeight: 700, color: "#101736" }}>
          Programme
        </h2>
        <div style={{ marginTop: 4, fontSize: 14, color: "#6B7290" }}>Arrival 8:00am · Wrap-up 5:30pm</div>
      </div>

      <div style={{ padding: "18px 18px 0" }}>
        {AGENDA.map((item, i) => (
          <div key={i} style={{ display: "flex", gap: 14 }}>
            <div style={{ flex: "none", width: 30, display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 22 }}>
              <div style={{ width: 13, height: 13, borderRadius: "50%", background: "#FFFFFF", border: "3px solid #0B4BC4" }} />
              <div style={{ flex: 1, width: 2, background: "#DCE1F0", margin: "4px 0" }} />
            </div>
            <div style={{ flex: 1, paddingBottom: 14, minWidth: 0 }}>
              <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: 0.6, color: "#0B4BC4", paddingTop: 18 }}>
                {item.time}
              </div>
              <div style={{ marginTop: 8, background: "#FFFFFF", border: "1px solid #E7E9F2", borderRadius: 18, padding: 16 }}>
                <div style={{ fontSize: 17, fontWeight: 700, color: "#101736", lineHeight: 1.25, textWrap: "pretty" }}>
                  {item.title}
                </div>
                {item.bullets.length > 0 && (
                  <div style={{ marginTop: 10, display: "flex", flexDirection: "column", gap: 7 }}>
                    {item.bullets.map((b, bi) => (
                      <div key={bi} style={{ display: "flex", gap: 9, alignItems: "baseline", fontSize: 14, color: "#4C536E" }}>
                        <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#B5169E", flex: "none", transform: "translateY(-3px)" }} />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                )}
                {item.host && (
                  <div
                    style={{
                      marginTop: 12,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 7,
                      background: "#F5F6FA",
                      borderRadius: 999,
                      padding: "6px 12px",
                      fontSize: 12,
                      fontWeight: 700,
                      color: "#4C536E",
                    }}
                  >
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#C9962B" }} />
                    {item.host}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
        <div style={{ textAlign: "center", padding: "6px 0 0", fontSize: 13, fontWeight: 700, color: "#8A90A6" }}>
          💚 Come dressed in shades of green
        </div>
      </div>

      <DevFooter />
      <div style={{ height: 100 }} />
    </div>
  );
}
