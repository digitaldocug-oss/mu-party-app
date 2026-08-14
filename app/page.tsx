"use client";

import { useEffect, useState } from "react";
import { EVENT } from "@/lib/config";
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

  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 30000);
    return () => clearInterval(t);
  }, []);

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
    <div style={{ minHeight: "100vh", background: "#F5F6FA" }}>
      <div
        style={{
          maxWidth: 480,
          margin: "0 auto",
          minHeight: "100vh",
          background: "#F5F6FA",
          position: "relative",
          paddingBottom: 90,
        }}
      >
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

      <div style={{ position: "fixed", left: 0, right: 0, bottom: 0, zIndex: 30 }}>
        <div style={{ maxWidth: 480, margin: "0 auto", position: "relative" }}>
          <BottomNav tab={tab} feedbackOpen={feedbackOpen} onNavigate={setTab} />
        </div>
      </div>
    </div>
  );
}
