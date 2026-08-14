"use client";

import Image from "next/image";
import { GUEST_CELLS, getTeam } from "@/lib/config";
import DevFooter from "./DevFooter";
import type { TeamView, Tab } from "@/lib/types";

export default function TeamScreen({
  view,
  setView,
  onNavigate,
}: {
  view: TeamView;
  setView: (v: TeamView) => void;
  onNavigate: (t: Tab) => void;
}) {
  const team = getTeam();
  const guestCells = GUEST_CELLS.map((n) => ({ name: n, initial: n[0] }));
  const isHosts = view === "hosts";

  return (
    <div>
      <div style={{ background: "#FFFFFF", padding: "14px 20px 18px", borderBottom: "1px solid #E7E9F2" }}>
        <button
          onClick={() => onNavigate("home")}
          style={{ background: "transparent", border: 0, padding: 0, fontSize: 13, fontWeight: 700, color: "#6B7290", cursor: "pointer" }}
        >
          ← Home
        </button>
        <h2 className="font-serif-brand" style={{ margin: "8px 0 0", fontSize: 30, fontWeight: 700, color: "#101736" }}>
          {isHosts ? "Rebecca Cell Girls" : "Guest Cells"}
        </h2>
        <div style={{ marginTop: 4, fontSize: 14, color: "#6B7290" }}>
          {isHosts ? `${team.length} hosts · Rebecca Cell, St Francis Chapel` : `${guestCells.length} guest cells joining us`}
        </div>
        <div style={{ marginTop: 14, display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 8, background: "#F1F3F9", borderRadius: 14, padding: 4 }}>
          <button
            onClick={() => setView("hosts")}
            style={{
              height: 44,
              border: 0,
              borderRadius: 11,
              background: isHosts ? "#FFFFFF" : "transparent",
              color: isHosts ? "#0B4BC4" : "#6B7290",
              fontSize: 14,
              fontWeight: 800,
              cursor: "pointer",
              boxShadow: isHosts ? "0 2px 6px rgba(16,23,54,.10)" : "none",
            }}
          >
            Hosts
          </button>
          <button
            onClick={() => setView("guests")}
            style={{
              height: 44,
              border: 0,
              borderRadius: 11,
              background: !isHosts ? "#FFFFFF" : "transparent",
              color: !isHosts ? "#0B4BC4" : "#6B7290",
              fontSize: 14,
              fontWeight: 800,
              cursor: "pointer",
              boxShadow: !isHosts ? "0 2px 6px rgba(16,23,54,.10)" : "none",
            }}
          >
            Guest Cells
          </button>
        </div>
      </div>

      {isHosts ? (
        <div style={{ padding: 18 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 10 }}>
            {team.map((p, i) => (
              <div key={i} style={{ background: "#FFFFFF", border: "1px solid #E7E9F2", borderRadius: 18, padding: "12px 8px 14px", textAlign: "center", minWidth: 0 }}>
                <div style={{ width: 74, height: 74, margin: "0 auto", borderRadius: "50%", overflow: "hidden", background: "#EEF2FE", border: "2px solid #DCE4FA", position: "relative" }}>
                  {p.photo ? (
                    <Image src={p.photo} alt={p.name} fill sizes="74px" style={{ objectFit: "cover" }} unoptimized />
                  ) : (
                    <div style={{ width: "100%", height: "100%", display: "grid", placeItems: "center", color: "#0B4BC4", fontSize: 16, fontWeight: 700 }}>
                      {p.initials}
                    </div>
                  )}
                </div>
                <div style={{ marginTop: 10, fontSize: 12.5, fontWeight: 700, color: "#101736", lineHeight: 1.25, minHeight: 32 }}>
                  {p.name}
                </div>
                <div style={{ marginTop: 4, fontSize: 10, fontWeight: 800, letterSpacing: 0.5, color: p.roleColor, lineHeight: 1.3, minHeight: 26 }}>
                  {p.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div style={{ padding: 18 }}>
          <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: 1.8, color: "#B5169E" }}>INVITED CELLS</div>
          <p style={{ margin: "8px 0 0", fontSize: 14, lineHeight: 1.55, color: "#4C536E" }}>
            Mother&apos;s Union cells joining us at the End of Year Party.
          </p>
          <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 8 }}>
            {guestCells.map((g, i) => (
              <div key={i} style={{ background: "#FFFFFF", border: "1px solid #E7E9F2", borderRadius: 16, padding: "14px 16px", display: "flex", alignItems: "center", gap: 14 }}>
                <span style={{ flex: "none", width: 38, height: 38, borderRadius: 12, background: "#EEF2FE", color: "#0B4BC4", display: "grid", placeItems: "center", fontSize: 14, fontWeight: 800 }}>
                  {g.initial}
                </span>
                <span style={{ flex: 1, minWidth: 0, fontSize: 16, fontWeight: 700, color: "#101736" }}>{g.name}</span>
                <span style={{ flex: "none", fontSize: 11, fontWeight: 800, letterSpacing: 0.6, color: "#8A90A6" }}>CELL</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <DevFooter />
    </div>
  );
}
