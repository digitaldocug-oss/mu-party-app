"use client";

import { useEffect, useRef, useState } from "react";

const FIELD_TAGS = new Set(["INPUT", "TEXTAREA", "SELECT"]);

/**
 * True when an on-screen keyboard is very likely visible: the visual
 * viewport has shrunk well below its initial (keyboard-closed) height AND
 * the currently focused element is a real form field. The field check
 * guards against false positives from things unrelated to a keyboard
 * (e.g. Safari's address-bar collapse on scroll).
 */
export function useKeyboardOpen(): boolean {
  const [open, setOpen] = useState(false);
  const baseline = useRef<number | null>(null);

  useEffect(() => {
    const vv = window.visualViewport;

    function fieldFocused() {
      const el = document.activeElement;
      return !!el && FIELD_TAGS.has(el.tagName);
    }

    function evaluate() {
      const height = vv ? vv.height : window.innerHeight;
      if (baseline.current === null) baseline.current = height;
      const shrunk = height < baseline.current * 0.75;
      setOpen(shrunk && fieldFocused());
    }

    function onFocusOut() {
      setTimeout(evaluate, 50);
    }

    evaluate();
    vv?.addEventListener("resize", evaluate);
    document.addEventListener("focusin", evaluate);
    document.addEventListener("focusout", onFocusOut);
    return () => {
      vv?.removeEventListener("resize", evaluate);
      document.removeEventListener("focusin", evaluate);
      document.removeEventListener("focusout", onFocusOut);
    };
  }, []);

  return open;
}
