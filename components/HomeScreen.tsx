"use client";

import Image from "next/image";
import { EVENT } from "@/lib/config";
import DevFooter from "./DevFooter";
import type { Tab } from "@/lib/types";

export default function HomeScreen({
  countdown,
  feedbackHomeHint,
  onNavigate,
}: {
  countdown: { days: string; hours: string; mins: string };
  feedbackHomeHint: string;
  onNavigate: (t: Tab) => void;
}) {
  return (
    <div>
      <div
        style={{
          position: "relative",
          background:
            "linear-gradient(180deg, #FFFFFF 0px, #FFFFFF 116px, #DCE8FA 150px, #1A5AC0 216px, #0B4BC4 300px, #2A2380 560px, #6B1580 100%)",
          padding: "0 22px 26px",
          color: "#FFFFFF",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            backgroundImage: "url(/images/hex.svg)",
            backgroundSize: "111px 96px",
            opacity: 0.14,
            WebkitMaskImage:
              "linear-gradient(180deg, transparent 130px, #000 260px, #000 100%)",
            maskImage:
              "linear-gradient(180deg, transparent 130px, #000 260px, #000 100%)",
          }}
        />

        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 22,
            height: 116,
          }}
        >
          <Image src="/images/mu-logo-t.png" alt="Mother's Union" width={92} height={92} style={{ height: 92, width: "auto", display: "block", flex: "none" }} unoptimized />
          <div style={{ width: 1, height: 66, background: "#D8E1F2", flex: "none" }} />
          <Image src="/images/sfc-logo-t.png" alt="St Francis Chapel Makerere University" width={62} height={62} style={{ height: 62, width: "auto", display: "block", minWidth: 0 }} unoptimized />
        </div>

        <div style={{ position: "relative", paddingTop: 112 }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2.4, color: "#F0C868", textTransform: "uppercase" }}>
            Mother&apos;s Union
          </div>
          <h1 className="font-serif-brand" style={{ margin: "6px 0 0", fontSize: 40, lineHeight: 1.03, fontWeight: 700, letterSpacing: -0.5, textWrap: "pretty" }}>
            End of Year<br />Party 2026
          </h1>

          <div style={{ marginTop: 16, paddingLeft: 12, borderLeft: "3px solid #F0C868" }}>
            <div className="font-serif-brand" style={{ fontSize: 19, fontStyle: "italic", lineHeight: 1.3 }}>
              {EVENT.theme}
            </div>
            <div style={{ marginTop: 3, fontSize: 12, fontWeight: 600, letterSpacing: 1, color: "rgba(255,255,255,.7)" }}>
              {EVENT.themeRef}
            </div>
          </div>

          <div
            style={{
              marginTop: 18,
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              background: "rgba(255,255,255,.14)",
              border: "1px solid rgba(255,255,255,.28)",
              padding: "9px 14px",
              borderRadius: 999,
              whiteSpace: "nowrap",
            }}
          >
            <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: 1.4, color: "rgba(255,255,255,.72)" }}>
              ORGANISED BY
            </span>
            <span style={{ fontSize: 14, fontWeight: 800, color: "#F0C868" }}>{EVENT.organizer}</span>
          </div>

          <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 10 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 15, fontWeight: 600 }}>
              <span style={{ width: 26, height: 26, borderRadius: 9, background: "rgba(255,255,255,.16)", display: "grid", placeItems: "center", fontSize: 13 }}>
                📅
              </span>
              <span>{EVENT.dateLabel}</span>
            </div>
            <a
              href={EVENT.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 15, fontWeight: 600, color: "#FFFFFF" }}
            >
              <span style={{ width: 26, height: 26, borderRadius: 9, background: "rgba(255,255,255,.16)", display: "grid", placeItems: "center", fontSize: 13 }}>
                📍
              </span>
              <span style={{ textDecoration: "underline", textDecorationColor: "rgba(240,200,104,.7)", textUnderlineOffset: 3 }}>
                {EVENT.location}
              </span>
            </a>
            <div
              style={{
                display: "inline-flex",
                alignSelf: "flex-start",
                alignItems: "center",
                gap: 8,
                background: "rgba(46,158,98,.22)",
                border: "1px solid rgba(120,214,163,.55)",
                color: "#C8F2D9",
                padding: "8px 13px",
                borderRadius: 999,
                fontSize: 13,
                fontWeight: 700,
                whiteSpace: "nowrap",
              }}
            >
              <span>💚</span>
              <span>{EVENT.dressCode}</span>
            </div>
          </div>

          <button
            onClick={() => onNavigate("pay")}
            style={{
              marginTop: 24,
              width: "100%",
              height: 60,
              border: 0,
              borderRadius: 18,
              background: "#F0C868",
              color: "#17204A",
              fontSize: 17,
              fontWeight: 800,
              letterSpacing: 0.3,
              boxShadow: "0 12px 26px rgba(0,0,0,.28)",
              cursor: "pointer",
            }}
          >
            Register →
          </button>

          <div style={{ marginTop: 18, display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 8 }}>
            <CountdownCard value={countdown.days} label="DAYS" />
            <CountdownCard value={countdown.hours} label="HOURS" />
            <CountdownCard value={countdown.mins} label="MINUTES" />
          </div>
        </div>
      </div>

      <div style={{ padding: "22px 18px 12px" }}>
        <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: 1.8, color: "#6B7290" }}>
          EVERYTHING IN ONE PLACE
        </div>
        <div style={{ marginTop: 12, display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 10 }}>
          <QuickLinkButton icon="💳" title="Register" sub="Confirm your seat" onClick={() => onNavigate("pay")} />
          <QuickLinkButton icon="📅" title="Agenda" sub="8:00am – 5:30pm" onClick={() => onNavigate("agenda")} />
          <QuickLinkButton icon="📷" title="Pictures" sub="Photo drive" onClick={() => onNavigate("pics")} />
          <a
            href={EVENT.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "block", textAlign: "left", background: "#FFFFFF", border: "1px solid #E7E9F2", borderRadius: 18, padding: 16 }}
          >
            <div style={{ fontSize: 22 }}>🧭</div>
            <div style={{ marginTop: 8, fontSize: 15, fontWeight: 700, color: "#101736" }}>Directions</div>
            <div style={{ fontSize: 12, color: "#6B7290" }}>Open in Maps</div>
          </a>
        </div>
      </div>

      <div style={{ padding: "8px 18px 0" }}>
        <button
          onClick={() => onNavigate("feedback")}
          style={{
            width: "100%",
            textAlign: "left",
            background: "#FFFFFF",
            border: "1px solid #E7E9F2",
            borderRadius: 20,
            padding: 18,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 14,
          }}
        >
          <span style={{ flex: "none", width: 46, height: 46, borderRadius: 14, background: "#EEF2FE", display: "grid", placeItems: "center", fontSize: 20 }}>
            ⭐
          </span>
          <span style={{ flex: 1, minWidth: 0 }}>
            <span style={{ display: "block", fontSize: 15, fontWeight: 700, color: "#101736" }}>Feedback</span>
            <span style={{ display: "block", marginTop: 2, fontSize: 12.5, color: "#6B7290", lineHeight: 1.4 }}>
              {feedbackHomeHint}
            </span>
          </span>
          <span style={{ flex: "none", fontSize: 12, fontWeight: 800, color: "#0B4BC4" }}>→</span>
        </button>
      </div>

      <div style={{ padding: "12px 18px 0" }}>
        <div style={{ background: "#FFFFFF", border: "1px solid #E7E9F2", borderRadius: 20, padding: 18 }}>
          <div className="font-serif-brand" style={{ fontSize: 17, fontWeight: 700, color: "#101736" }}>
            A day of faith, fellowship and fun
          </div>
          <p style={{ margin: "8px 0 0", fontSize: 14, lineHeight: 1.6, color: "#4C536E", textWrap: "pretty" }}>
            The Rebecca Cell Girls bring together the Mother&apos;s Union family for our 2026 End of Year
            Party — worship, teaching, team building, lunch and celebration by the lake.
          </p>
          <button
            onClick={() => onNavigate("team")}
            style={{
              marginTop: 14,
              background: "#EEF2FE",
              border: 0,
              color: "#0B4BC4",
              fontSize: 14,
              fontWeight: 700,
              padding: "12px 16px",
              borderRadius: 12,
              cursor: "pointer",
            }}
          >
            Meet the team →
          </button>
        </div>
      </div>

      <div style={{ padding: 18, display: "flex", alignItems: "center", gap: 10, color: "#8A90A6", fontSize: 12, fontWeight: 600 }}>
        <span style={{ height: 1, flex: 1, background: "#E2E5F0" }} />
        <span>St Francis Chapel, Makerere</span>
        <span style={{ height: 1, flex: 1, background: "#E2E5F0" }} />
      </div>

      <DevFooter />
      <div style={{ height: 100 }} />
    </div>
  );
}

function CountdownCard({ value, label }: { value: string; label: string }) {
  return (
    <div style={{ background: "rgba(255,255,255,.12)", borderRadius: 14, padding: "12px 6px", textAlign: "center" }}>
      <div style={{ fontSize: 26, fontWeight: 800, fontVariantNumeric: "tabular-nums" }}>{value}</div>
      <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 1.4, color: "rgba(255,255,255,.7)" }}>{label}</div>
    </div>
  );
}

function QuickLinkButton({
  icon,
  title,
  sub,
  onClick,
}: {
  icon: string;
  title: string;
  sub: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      style={{ textAlign: "left", background: "#FFFFFF", border: "1px solid #E7E9F2", borderRadius: 18, padding: 16, cursor: "pointer" }}
    >
      <div style={{ fontSize: 22 }}>{icon}</div>
      <div style={{ marginTop: 8, fontSize: 15, fontWeight: 700, color: "#101736" }}>{title}</div>
      <div style={{ fontSize: 12, color: "#6B7290" }}>{sub}</div>
    </button>
  );
}
