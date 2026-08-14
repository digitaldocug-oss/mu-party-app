"use client";

import { useState } from "react";
import DevFooter from "./DevFooter";
import type { Tab } from "@/lib/types";

const ratingWords = ["Tap to rate", "Poor", "Fair", "Good", "Very good", "Excellent"];

export default function FeedbackScreen({
  feedbackOpen,
  onNavigate,
}: {
  feedbackOpen: boolean;
  onNavigate: (t: Tab) => void;
}) {
  const [preview, setPreview] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [rating, setRating] = useState(0);
  const [enjoy, setEnjoy] = useState("");
  const [improve, setImprove] = useState("");
  const [next, setNext] = useState("");
  const [attend, setAttend] = useState<"" | "yes" | "maybe">("");

  const showForm = (feedbackOpen || preview) && !submitted;
  const showDone = (feedbackOpen || preview) && submitted;
  const showLocked = !feedbackOpen && !preview;

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
          Feedback
        </h2>
        <div style={{ marginTop: 4, fontSize: 13, color: "#6B7290" }}>
          {feedbackOpen ? "Open — tell us how the day went" : "Opens 11:00am, Sunday 22 November"}
        </div>
      </div>

      {showLocked && (
        <div style={{ padding: "50px 30px", textAlign: "center" }}>
          <div style={{ fontSize: 44 }}>🔒</div>
          <div style={{ marginTop: 14, fontSize: 19, fontWeight: 800, color: "#101736" }}>
            Opens at 11:00am on 22 November
          </div>
          <p style={{ margin: "8px 0 0", fontSize: 14, lineHeight: 1.6, color: "#6B7290" }}>
            From 11:00am on party day this screen opens so you can tell us how the day is going.
          </p>
          <button
            onClick={() => setPreview(true)}
            style={{ marginTop: 18, height: 50, padding: "0 20px", borderRadius: 14, border: "1px solid #DCE1F0", background: "#FFFFFF", color: "#0B4BC4", fontSize: 14, fontWeight: 800, cursor: "pointer" }}
          >
            Preview the form
          </button>
        </div>
      )}

      {showForm && (
        <div style={{ padding: 18 }}>
          {!feedbackOpen && preview && (
            <div style={{ background: "#FFF8EC", border: "1px solid #F3DCA9", borderRadius: 16, padding: "12px 14px", display: "flex", gap: 10, alignItems: "center" }}>
              <span style={{ fontSize: 15 }}>👀</span>
              <span style={{ fontSize: 12.5, fontWeight: 700, color: "#7A4E06", lineHeight: 1.4 }}>
                Preview only — members see this from 11:00am on 22 November.
              </span>
            </div>
          )}

          <div style={{ marginTop: 14, background: "#FFFFFF", border: "1px solid #E7E9F2", borderRadius: 20, padding: 18 }}>
            <div style={{ fontSize: 16, fontWeight: 700, color: "#101736" }}>How was your experience?</div>
            <div style={{ marginTop: 14, display: "flex", gap: 8, justifyContent: "center" }}>
              {[1, 2, 3, 4, 5].map((i) => (
                <button
                  key={i}
                  onClick={() => setRating(i)}
                  style={{ width: 54, height: 54, borderRadius: 16, border: "1px solid #E7E9F2", background: rating >= i ? "#FFF4D6" : "#FFFFFF", fontSize: 24, cursor: "pointer" }}
                >
                  ⭐
                </button>
              ))}
            </div>
            <div style={{ marginTop: 10, textAlign: "center", fontSize: 13, fontWeight: 700, color: "#6B7290" }}>
              {ratingWords[rating]}
            </div>
          </div>

          <div style={{ marginTop: 14, background: "#FFFFFF", border: "1px solid #E7E9F2", borderRadius: 20, padding: 18, display: "flex", flexDirection: "column", gap: 16 }}>
            <label style={{ display: "block" }}>
              <span style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#101736", marginBottom: 8 }}>
                What did you enjoy most?
              </span>
              <textarea
                value={enjoy}
                onChange={(e) => setEnjoy(e.target.value)}
                rows={3}
                style={{ width: "100%", border: "1px solid #DCE1F0", borderRadius: 14, padding: 12, fontSize: 15, background: "#FBFCFF", resize: "none" }}
              />
            </label>
            <label style={{ display: "block" }}>
              <span style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#101736", marginBottom: 8 }}>
                What could we improve?
              </span>
              <textarea
                value={improve}
                onChange={(e) => setImprove(e.target.value)}
                rows={3}
                style={{ width: "100%", border: "1px solid #DCE1F0", borderRadius: 14, padding: 12, fontSize: 15, background: "#FBFCFF", resize: "none" }}
              />
            </label>
            <label style={{ display: "block" }}>
              <span style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#101736", marginBottom: 8 }}>
                What would you like at the next Mother&apos;s Union event?
              </span>
              <textarea
                value={next}
                onChange={(e) => setNext(e.target.value)}
                rows={3}
                style={{ width: "100%", border: "1px solid #DCE1F0", borderRadius: 14, padding: 12, fontSize: 15, background: "#FBFCFF", resize: "none" }}
              />
            </label>
            <div>
              <span style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#101736", marginBottom: 8 }}>
                Would you attend another event?
              </span>
              <div style={{ display: "flex", gap: 8 }}>
                <button
                  onClick={() => setAttend("yes")}
                  style={{ flex: 1, height: 52, borderRadius: 14, border: "1px solid #DCE1F0", background: attend === "yes" ? "#E8F4EC" : "#FBFCFF", color: "#101736", fontSize: 15, fontWeight: 700, cursor: "pointer" }}
                >
                  Definitely 😄
                </button>
                <button
                  onClick={() => setAttend("maybe")}
                  style={{ flex: 1, height: 52, borderRadius: 14, border: "1px solid #DCE1F0", background: attend === "maybe" ? "#E8F4EC" : "#FBFCFF", color: "#101736", fontSize: 15, fontWeight: 700, cursor: "pointer" }}
                >
                  Maybe
                </button>
              </div>
            </div>
          </div>

          <button
            onClick={() => setSubmitted(true)}
            style={{ marginTop: 16, width: "100%", height: 58, borderRadius: 16, border: 0, background: "#0B4BC4", color: "#FFFFFF", fontSize: 17, fontWeight: 800, cursor: "pointer" }}
          >
            Submit feedback
          </button>
        </div>
      )}

      {showDone && (
        <div style={{ padding: "60px 30px", textAlign: "center" }}>
          <div style={{ fontSize: 44 }}>💙</div>
          <div className="font-serif-brand" style={{ marginTop: 14, fontSize: 26, fontWeight: 700, color: "#101736" }}>
            Thank you
          </div>
          <p style={{ margin: "8px 0 0", fontSize: 14, lineHeight: 1.6, color: "#6B7290" }}>
            Your feedback helps the Rebecca Cell Girls plan an even better gathering next year.
          </p>
        </div>
      )}

      <DevFooter />
      <div style={{ height: 100 }} />
    </div>
  );
}
