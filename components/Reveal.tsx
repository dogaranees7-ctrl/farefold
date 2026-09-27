"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

// ---------------------------------------------------------------------------
// Reveal scheduler.
//
// IntersectionObserver looks like the right primitive here, and it is not:
// it only reports when the intersection state *changes* at an observation
// opportunity. An element that travels from below the fold to above it
// between two deliveries — an anchor jump, a flung scroll, a restored scroll
// position — never crosses a threshold, so no callback fires and the content
// stays invisible permanently. Content that can silently fail to appear is
// not an acceptable trade for a fade.
//
// So: one rAF-throttled scroll listener for the whole page, shared by every
// Reveal on it. Each element asks a question with one answer — has this
// reached the fold yet — which is true for everything above it too. Elements
// unsubscribe as they reveal, and the listener detaches when the last one
// does, so a fully-read page costs nothing.
// ---------------------------------------------------------------------------

type Check = () => void;

const pending = new Set<Check>();
let frame = 0;
let listening = false;

function flush() {
  frame = 0;
  // Copy first: checks unsubscribe themselves as they fire.
  [...pending].forEach((check) => check());
  if (!pending.size && listening) {
    listening = false;
    window.removeEventListener("scroll", schedule);
    window.removeEventListener("resize", schedule);
  }
}

function schedule() {
  if (!frame) frame = requestAnimationFrame(flush);
}

function subscribe(check: Check) {
  pending.add(check);
  if (!listening) {
    listening = true;
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
  }
  schedule();
  return () => {
    pending.delete(check);
  };
}

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /**
   * "rise"  — content settles up into place.
   * "plot"  — adds `plot-run`, which lets the drawing inside plot its cut and
   *           crease lines the way a plotter would. No transform, because a
   *           technical drawing should not slide around.
   */
  mode?: "rise" | "plot";
};

export function Reveal({
  children,
  className = "",
  delay = 0,
  mode = "rise",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  // False on the server and on the client's first render alike, so hydration
  // is deterministic.
  const [visible, setVisible] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const check = () => {
      if (el.getBoundingClientRect().top < window.innerHeight * 0.92) {
        unsubscribe();
        setVisible(true);
      }
    };
    const unsubscribe = subscribe(check);
    return unsubscribe;
  }, []);

  if (mode === "plot") {
    return (
      <div ref={ref} className={`${ready ? "reveal-ready" : ""} ${visible ? "plot-run" : ""} ${className}`}>
        {children}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={`transition-[opacity,transform] duration-[900ms] ${
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      } ${className}`}
      style={{
        transitionTimingFunction: "var(--ease-spec)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
