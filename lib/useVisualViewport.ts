"use client";

import { useEffect, useState } from "react";

export type VisualViewportState = {
  height: number;
  offsetTop: number;
};

/**
 * Tracks window.visualViewport's height AND offsetTop. Height alone isn't
 * enough on iOS Safari: focusing an input near the bottom of the screen
 * makes iOS pan the visual viewport downward (offsetTop > 0) to keep the
 * input above the keyboard, independent of any height change. A shell
 * sized only by height but positioned at the layout-viewport's top will
 * then leave empty space below it once that pan happens. Returns null on
 * the server and on first client render so SSR markup matches hydration;
 * callers should fall back to a CSS height/top (100dvh / 0) until this
 * resolves.
 */
export function useVisualViewport(): VisualViewportState | null {
  const [state, setState] = useState<VisualViewportState | null>(null);

  useEffect(() => {
    const vv = window.visualViewport;

    function update() {
      setState(
        vv
          ? { height: vv.height, offsetTop: vv.offsetTop }
          : { height: window.innerHeight, offsetTop: 0 }
      );
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

  return state;
}
