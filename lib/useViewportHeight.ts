"use client";

import { useEffect, useState } from "react";

/**
 * Tracks the real visible height (window.visualViewport when available),
 * which shrinks when the on-screen keyboard opens — unlike 100vh/100dvh,
 * which iOS Safari does not reliably shrink for the keyboard. Returns null
 * on the server and on first client render so SSR markup matches hydration;
 * callers should fall back to a CSS height (100dvh) until this resolves.
 */
export function useViewportHeight(): number | null {
  const [height, setHeight] = useState<number | null>(null);

  useEffect(() => {
    const vv = window.visualViewport;

    function update() {
      setHeight(vv ? vv.height : window.innerHeight);
    }

    update();
    vv?.addEventListener("resize", update);
    vv?.addEventListener("scroll", update);
    window.addEventListener("resize", update);
    return () => {
      vv?.removeEventListener("resize", update);
      vv?.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return height;
}
