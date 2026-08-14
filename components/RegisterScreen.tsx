"use client";

import { useState } from "react";
import { EVENT, ugx, prettyDate, CELL_OPTIONS } from "@/lib/config";
import DevFooter from "./DevFooter";
import type { PayStage, RegistrationForm, Cell } from "@/lib/types";

const inputStyle: React.CSSProperties = {
  width: "100%",
  height: 52,
  border: "1px solid #DCE1F0",
  borderRadius: 14,
  padding: "0 14px",
  fontSize: 16,
  color: "#101736",
  background: "#FBFCFF",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: 12,
  fontWeight: 700,
  color: "#6B7290",
  marginBottom: 6,
};

export default function RegisterScreen({
  registrationOpen,
  stage,
  setStage,
  form,
  setForm,
}: {
  registrationOpen: boolean;
  stage: PayStage;
  setStage: (s: PayStage) => void;
  form: RegistrationForm;
  setForm: (f: RegistrationForm) => void;
}) {
  const [copied, setCopied] = useState(false);
  const amount = EVENT.contributionUgx;
  const total = amount * form.people;

  const todayISO = new Date().toISOString().slice(0, 10);
  const quickDates = [
    { label: "End of September", date: "2026-09-30" },
    { label: "End of October", date: "2026-10-31" },
    { label: "By 20 November", date: "2026-11-20" },
  ];

  function copyNumber() {
    const num = EVENT.momoNumber.replace(/\s/g, "");
    if (navigator.clipboard) navigator.clipboard.writeText(num).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  function startOver() {
    setForm({ name: "", phone: "", cell: "Rebecca Cell", people: 1, ref: "", payPhone: "", paid: "", paidDate: "", pledgeDate: "" });
    setStage("idle");
  }

  return (
    <div>
      <div style={{ background: "#FFFFFF", padding: "14px 20px 18px", borderBottom: "1px solid #E7E9F2" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
          <div style={{ minWidth: 0 }}>
            <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: 1.8, color: "#B5169E" }}>REGISTRATION</div>
            <h2 className="font-serif-brand" style={{ margin: "6px 0 0", fontSize: 30, fontWeight: 700, color: "#101736" }}>
              Register
            </h2>
          </div>
          <div style={{ flex: "none", display: "inline-flex", alignItems: "center", gap: 7, background: "#E8F4EC", color: "#1E7A4B", padding: "8px 12px", borderRadius: 999, fontSize: 12, fontWeight: 800 }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#2E9E62" }} />
            {registrationOpen ? "Registration open" : "Closed"}
          </div>
        </div>
      </div>

      <div style={{ padding: 18 }}>
        <div style={{ background: "linear-gradient(150deg, #0B4BC4, #4A1A82)", borderRadius: 20, padding: 18, color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
          <div style={{ minWidth: 0 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1.2, color: "rgba(255,255,255,.72)" }}>CONTRIBUTION</div>
            <div style={{ marginTop: 4, fontSize: 22, fontWeight: 800, whiteSpace: "nowrap" }}>{ugx(amount)}</div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,.72)" }}>per person</div>
          </div>
          <div style={{ textAlign: "right", minWidth: 0 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1.2, color: "rgba(255,255,255,.72)" }}>YOUR TOTAL</div>
            <div style={{ marginTop: 4, fontSize: 22, fontWeight: 800, color: "#F0C868", whiteSpace: "nowrap" }}>{ugx(total)}</div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,.72)" }}>{form.people === 1 ? "1 person" : `${form.people} people`}</div>
          </div>
        </div>

        {stage === "idle" && (
          <div>
            <div style={{ marginTop: 18, background: "#FFFFFF", border: "1px solid #E7E9F2", borderRadius: 20, padding: 18 }}>
              <div style={{ fontSize: 16, fontWeight: 700, color: "#101736" }}>1. Your details</div>
              <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 13 }}>
                <label style={{ display: "block" }}>
                  <span style={labelStyle}>FULL NAME</span>
                  <input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g. Gladys Rukundo"
                    style={inputStyle}
                  />
                </label>
                <label style={{ display: "block" }}>
                  <span style={labelStyle}>PHONE NUMBER</span>
                  <input
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="07XX XXX XXX"
                    style={inputStyle}
                  />
                </label>
                <label style={{ display: "block" }}>
                  <span style={labelStyle}>MOTHER&apos;S UNION CELL</span>
                  <select
                    value={form.cell}
                    onChange={(e) => setForm({ ...form, cell: e.target.value as Cell })}
                    style={{ ...inputStyle, padding: "0 12px" }}
                  >
                    {CELL_OPTIONS.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </label>
                <div>
                  <span style={labelStyle}>NUMBER OF PEOPLE</span>
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <button
                      onClick={() => setForm({ ...form, people: Math.max(1, form.people - 1) })}
                      style={{ width: 52, height: 52, borderRadius: 14, border: "1px solid #DCE1F0", background: "#FFFFFF", fontSize: 22, fontWeight: 700, color: "#0B4BC4", cursor: "pointer" }}
                    >
                      –
                    </button>
                    <div style={{ flex: 1, textAlign: "center", fontSize: 22, fontWeight: 800, color: "#101736" }}>{form.people}</div>
                    <button
                      onClick={() => setForm({ ...form, people: Math.min(10, form.people + 1) })}
                      style={{ width: 52, height: 52, borderRadius: 14, border: "1px solid #DCE1F0", background: "#FFFFFF", fontSize: 22, fontWeight: 700, color: "#0B4BC4", cursor: "pointer" }}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ marginTop: 14, background: "#FFFFFF", border: "1px solid #E7E9F2", borderRadius: 20, padding: 18 }}>
              <div style={{ fontSize: 16, fontWeight: 700, color: "#101736" }}>2. Pay by Mobile Money</div>
              <div style={{ marginTop: 14, background: "#F5F6FA", borderRadius: 16, padding: 14, display: "flex", flexDirection: "column", gap: 10 }}>
                <Row label="Number" value={EVENT.momoNumber} />
                <Row label="Account name" value={EVENT.momoName} />
                <Row label="Amount" value={ugx(total)} />
              </div>
              <button
                onClick={copyNumber}
                style={{ marginTop: 14, width: "100%", height: 54, borderRadius: 16, border: "1.5px solid #0B4BC4", background: "#FFFFFF", color: "#0B4BC4", fontSize: 16, fontWeight: 800, cursor: "pointer" }}
              >
                {copied ? "Number copied ✓" : "Copy number"}
              </button>
            </div>

            <div style={{ marginTop: 14, background: "#FFFFFF", border: "1px solid #E7E9F2", borderRadius: 20, padding: 18 }}>
              <div style={{ fontSize: 16, fontWeight: 700, color: "#101736" }}>3. Tell us where you are</div>
              <div style={{ marginTop: 4, fontSize: 13, color: "#6B7290", lineHeight: 1.5 }}>
                Have you already sent the money, or would you like to pay on a later date?
              </div>
              <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 10 }}>
                <button
                  onClick={() => setStage("proof")}
                  style={{ width: "100%", height: 58, borderRadius: 16, border: 0, background: "#0B4BC4", color: "#FFFFFF", fontSize: 17, fontWeight: 800, cursor: "pointer", boxShadow: "0 10px 22px rgba(11,75,196,.28)" }}
                >
                  ✅ I have paid
                </button>
                <button
                  onClick={() => setStage("pledgeForm")}
                  style={{ width: "100%", height: 58, borderRadius: 16, border: "1.5px solid #C9962B", background: "#FFF8EC", color: "#7A4E06", fontSize: 17, fontWeight: 800, cursor: "pointer" }}
                >
                  🗓️ I will pay on a date
                </button>
              </div>
            </div>
          </div>
        )}

        {stage === "proof" && (
          <div className="animate-slide-up" style={{ marginTop: 18, background: "#FFFFFF", border: "1px solid #E7E9F2", borderRadius: 20, padding: 18 }}>
            <div style={{ fontSize: 16, fontWeight: 700, color: "#101736" }}>Record your payment</div>
            <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 13 }}>
              <label style={{ display: "block" }}>
                <span style={labelStyle}>TRANSACTION ID / REFERENCE</span>
                <input value={form.ref} onChange={(e) => setForm({ ...form, ref: e.target.value })} placeholder="e.g. 1234567890" style={inputStyle} />
              </label>
              <label style={{ display: "block" }}>
                <span style={labelStyle}>PHONE NUMBER USED</span>
                <input value={form.payPhone} onChange={(e) => setForm({ ...form, payPhone: e.target.value })} placeholder="07XX XXX XXX" style={inputStyle} />
              </label>
              <label style={{ display: "block" }}>
                <span style={labelStyle}>DATE PAID</span>
                <input type="date" value={form.paidDate} onChange={(e) => setForm({ ...form, paidDate: e.target.value })} style={inputStyle} />
              </label>
              <label style={{ display: "block" }}>
                <span style={labelStyle}>AMOUNT PAID</span>
                <input value={form.paid} onChange={(e) => setForm({ ...form, paid: e.target.value })} placeholder="UGX" style={inputStyle} />
              </label>
            </div>
            <button
              onClick={() => setStage("donePaid")}
              style={{ marginTop: 16, width: "100%", height: 58, borderRadius: 16, border: 0, background: "#0B4BC4", color: "#FFFFFF", fontSize: 17, fontWeight: 800, cursor: "pointer" }}
            >
              Submit registration
            </button>
            <button
              onClick={() => setStage("idle")}
              style={{ marginTop: 8, width: "100%", height: 46, borderRadius: 14, border: 0, background: "transparent", color: "#6B7290", fontSize: 14, fontWeight: 700, cursor: "pointer" }}
            >
              Back
            </button>
          </div>
        )}

        {stage === "pledgeForm" && (
          <div className="animate-slide-up" style={{ marginTop: 18, background: "#FFFFFF", border: "1px solid #E7E9F2", borderRadius: 20, padding: 18 }}>
            <div style={{ fontSize: 16, fontWeight: 700, color: "#101736" }}>When will you pay?</div>
            <div style={{ marginTop: 4, fontSize: 13, color: "#6B7290", lineHeight: 1.5 }}>
              Pick a date and we will send you a gentle reminder.
            </div>
            <label style={{ display: "block", marginTop: 14 }}>
              <span style={labelStyle}>INTENDED PAYMENT DATE</span>
              <input
                type="date"
                value={form.pledgeDate}
                onChange={(e) => setForm({ ...form, pledgeDate: e.target.value })}
                min={todayISO}
                max="2026-11-22"
                style={{ ...inputStyle, height: 56, fontSize: 17 }}
              />
            </label>
            <div style={{ marginTop: 12, display: "flex", gap: 8, flexWrap: "wrap" }}>
              {quickDates.map((q) => (
                <button
                  key={q.date}
                  onClick={() => setForm({ ...form, pledgeDate: q.date })}
                  style={{ height: 42, padding: "0 14px", borderRadius: 999, border: "1px solid #DCE1F0", background: "#FFFFFF", fontSize: 13, fontWeight: 700, color: "#0B4BC4", cursor: "pointer" }}
                >
                  {q.label}
                </button>
              ))}
            </div>
            <button
              onClick={() => setStage("donePledge")}
              style={{ marginTop: 16, width: "100%", height: 58, borderRadius: 16, border: 0, background: "#C9962B", color: "#FFFFFF", fontSize: 17, fontWeight: 800, cursor: "pointer" }}
            >
              Submit registration
            </button>
            <button
              onClick={() => setStage("idle")}
              style={{ marginTop: 8, width: "100%", height: 46, borderRadius: 14, border: 0, background: "transparent", color: "#6B7290", fontSize: 14, fontWeight: 700, cursor: "pointer" }}
            >
              Back
            </button>
          </div>
        )}

        {stage === "donePaid" && (
          <div className="animate-slide-up" style={{ marginTop: 18, background: "#E8F4EC", border: "1px solid #A9D9BF", borderRadius: 20, padding: 24, textAlign: "center" }}>
            <div style={{ fontSize: 36 }}>💚</div>
            <div style={{ marginTop: 8, fontSize: 22, fontWeight: 800, color: "#145E39" }}>You are registered</div>
            <p style={{ margin: "8px 0 0", fontSize: 14, lineHeight: 1.6, color: "#1E6B44" }}>
              Thank you, {form.name || "friend"}. Your payment details have been shared with the treasurer. See you
              on 22 November at Lake Victoria Beach Cottages — in shades of green.
            </p>
            <div style={{ marginTop: 16, background: "#FFFFFF", borderRadius: 14, padding: 16, textAlign: "left", display: "flex", flexDirection: "column", gap: 8, fontSize: 13 }}>
              <Row label="Reference" value={form.ref || "—"} dark />
              <Row label="Amount" value={form.paid || ugx(total)} dark />
              <Row label="People" value={String(form.people)} dark />
              <Row label="Cell" value={form.cell} dark />
            </div>
            <button
              onClick={startOver}
              style={{ marginTop: 14, height: 46, padding: "0 18px", borderRadius: 14, border: 0, background: "transparent", color: "#1E6B44", fontSize: 13, fontWeight: 800, cursor: "pointer" }}
            >
              Register someone else
            </button>
          </div>
        )}

        {stage === "donePledge" && (
          <div className="animate-slide-up" style={{ marginTop: 18, background: "#FFF8EC", border: "1px solid #F3DCA9", borderRadius: 20, padding: 24, textAlign: "center" }}>
            <div style={{ fontSize: 36 }}>🗓️</div>
            <div style={{ marginTop: 8, fontSize: 22, fontWeight: 800, color: "#7A4E06" }}>Seat reserved</div>
            <p style={{ margin: "8px 0 0", fontSize: 14, lineHeight: 1.6, color: "#7A5A22" }}>
              Thank you, {form.name || "friend"}. We have noted that you will pay {ugx(total)} on{" "}
              {prettyDate(form.pledgeDate)}. Send it to {EVENT.momoName} on {EVENT.momoNumber} any time before then.
            </p>
            <button
              onClick={() => setStage("proof")}
              style={{ marginTop: 16, width: "100%", height: 54, borderRadius: 16, border: 0, background: "#0B4BC4", color: "#FFFFFF", fontSize: 16, fontWeight: 800, cursor: "pointer" }}
            >
              I have paid now
            </button>
            <button
              onClick={startOver}
              style={{ marginTop: 8, height: 46, padding: "0 18px", borderRadius: 14, border: 0, background: "transparent", color: "#7A5A22", fontSize: 13, fontWeight: 800, cursor: "pointer" }}
            >
              Register someone else
            </button>
          </div>
        )}
      </div>

      <DevFooter />
      <div style={{ height: 100 }} />
    </div>
  );
}

function Row({ label, value, dark }: { label: string; value: string; dark?: boolean }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", gap: 8, fontSize: dark ? 13 : 14 }}>
      <span style={{ color: "#6B7290", fontWeight: 600 }}>{label}</span>
      <span style={{ fontWeight: 800, color: "#101736" }}>{value}</span>
    </div>
  );
}
