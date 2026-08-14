"use client";

import type { Tab } from "@/lib/types";

export default function BottomNav({
  tab,
  feedbackOpen,
  onNavigate,
}: {
  tab: Tab;
  feedbackOpen: boolean;
  onNavigate: (t: Tab) => void;
}) {
  const swapTab: Tab = feedbackOpen ? "feedback" : "pay";
  const color = (t: Tab) => (tab === t ? "#0B4BC4" : "#9BA1B6");

  return (
    <div
      style={{
        background: "rgba(255,255,255,.96)",
        borderTop: "1px solid #E7E9F2",
        padding: "8px 8px 22px",
        display: "grid",
        gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
        gap: 2,
        backdropFilter: "blur(12px)",
      }}
    >
      <NavButton icon="🏠" label="Home" color={color("home")} onClick={() => onNavigate("home")} />
      <NavButton icon="📅" label="Agenda" color={color("agenda")} onClick={() => onNavigate("agenda")} />
      <NavButton
        icon={feedbackOpen ? "⭐" : "💳"}
        label={feedbackOpen ? "Feedback" : "Register"}
        color={color(swapTab)}
        onClick={() => onNavigate(swapTab)}
      />
      <NavButton icon="📷" label="Pictures" color={color("pics")} onClick={() => onNavigate("pics")} />
      <NavButton icon="👭" label="Team" color={color("team")} onClick={() => onNavigate("team")} />
    </div>
  );
}

function NavButton({
  icon,
  label,
  color,
  onClick,
}: {
  icon: string;
  label: string;
  color: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        background: "transparent",
        border: 0,
        padding: "8px 0 4px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
        cursor: "pointer",
        color,
      }}
    >
      <span style={{ fontSize: 20 }}>{icon}</span>
      <span style={{ fontSize: 10.5, fontWeight: 800, letterSpacing: 0.3 }}>{label}</span>
    </button>
  );
}
