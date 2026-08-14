"use client";

import { useEffect, useRef, useState } from "react";
import { EVENT } from "@/lib/config";
import { useViewportHeight } from "@/lib/useViewportHeight";
import type { Tab, PayStage, RegistrationForm, TeamView } from "@/lib/types";
import BottomNav from "@/components/BottomNav";
import HomeScreen from "@/components/HomeScreen";
import AgendaScreen from "@/components/AgendaScreen";
import RegisterScreen from "@/components/RegisterScreen";
import PicturesScreen from "@/components/PicturesScreen";
import TeamScreen from "@/components/TeamScreen";
import FeedbackScreen from "@/components/FeedbackScreen";

const EMPTY_FORM: RegistrationForm = {
  name: "",
  phone: "",
  cell: "Rebecca Cell",
  people: 1,
  ref: "",
  payPhone: "",
  paid: "",
  paidDate: "",
  pledgeDate: "",
};

export default function Home() {
  const [tab, setTab] = useState<Tab>("home");
  const [now, setNow] = useState(() => Date.now());
  const [teamView, setTeamView] = useState<TeamView>("hosts");
  const [payStage, setPayStage] = useState<PayStage>("idle");
  const [form, setForm] = useState<RegistrationForm>(EMPTY_FORM);
  const viewportHeight = useViewportHeight();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 30000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0 });
  }, [tab]);

  const feedbackLive = now >= new Date(EVENT.feedbackOpensAtISO).getTime();
  const feedbackOpen = EVENT.feedbackOpenOverride || feedbackLive;

  const target = new Date(EVENT.dateISO).getTime();
  const diff = Math.max(0, target - now);
  const countdown = {
    days: String(Math.floor(diff / 86400000)),
    hours: String(Math.floor((diff % 86400000) / 3600000)).padStart(2, "0"),
    mins: String(Math.floor((diff % 3600000) / 60000)).padStart(2, "0"),
  };

  const feedbackHomeHint = feedbackOpen
    ? "Open now — tell us how the day is going"
    : "Opens 11:00am on Sunday 22 November";

  return (
    <div className="app-shell" style={viewportHeight ? { height: viewportHeight } : undefined}>
      <div className="app-scroll" ref={scrollRef}>
        {tab === "home" && (
          <HomeScreen countdown={countdown} feedbackHomeHint={feedbackHomeHint} onNavigate={setTab} />
        )}
        {tab === "agenda" && <AgendaScreen />}
        {tab === "pay" && (
          <RegisterScreen
            registrationOpen={EVENT.registrationOpen}
            stage={payStage}
            setStage={setPayStage}
            form={form}
            setForm={setForm}
          />
        )}
        {tab === "pics" && <PicturesScreen />}
        {tab === "team" && <TeamScreen view={teamView} setView={setTeamView} onNavigate={setTab} />}
        {tab === "feedback" && <FeedbackScreen feedbackOpen={feedbackOpen} onNavigate={setTab} />}
      </div>

      <BottomNav tab={tab} feedbackOpen={feedbackOpen} onNavigate={setTab} />
    </div>
  );
}
