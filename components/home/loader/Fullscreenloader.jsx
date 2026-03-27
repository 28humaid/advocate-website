"use client";

import { useEffect, useState } from "react";

export default function FullScreenLoader({
  duration = 10000,
  firmName = "Alamgir & Associates",
  tagline = "Defending Rights Since 1994",
}) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const interval = 30;
    const steps = duration / interval;
    let current = 0;

    const timer = setInterval(() => {
      current += 1;
      const ease = Math.min(100, Math.round((1 - Math.pow(1 - current / steps, 3)) * 100));
      setProgress(ease);

      if (current >= steps) {
        clearInterval(timer);
        setTimeout(() => setFadeOut(true), 300);
        setTimeout(() => setHidden(true), 1000);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [duration]);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-dark1 transition-opacity duration-700 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Decorative corner brackets */}
      <span className="absolute top-8 left-8 w-12 h-12 border-t border-l border-light1 opacity-30" />
      <span className="absolute top-8 right-8 w-12 h-12 border-t border-r border-light1 opacity-30" />
      <span className="absolute bottom-8 left-8 w-12 h-12 border-b border-l border-light1 opacity-30" />
      <span className="absolute bottom-8 right-8 w-12 h-12 border-b border-r border-light1 opacity-30" />

      {/* Scale of Justice SVG */}
      <div className="mb-8 animate-pulse">
        <svg
          width="72"
          height="72"
          viewBox="0 0 72 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-light1"
        >
          <rect x="34.5" y="12" width="3" height="48" fill="currentColor" opacity="0.9" />
          <rect x="20" y="58" width="32" height="3" rx="1.5" fill="currentColor" opacity="0.9" />
          <circle cx="36" cy="10" r="4" fill="currentColor" opacity="0.9" />
          <rect x="12" y="22" width="48" height="2.5" rx="1.25" fill="currentColor" opacity="0.9" />
          <line x1="18" y1="24.5" x2="14" y2="38" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />
          <line x1="54" y1="24.5" x2="58" y2="38" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />
          <path d="M8 38 Q14 44 20 38" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.9" />
          <path d="M52 38 Q58 44 64 38" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.9" />
        </svg>
      </div>

      {/* Title */}
      <h1 className="font-heading text-xl md:text-4xl tracking-[0.2em] uppercase text-light1 mb-1 text-center">
        {firmName}
      </h1>

      {/* Subtitle */}
      <p className="font-body text-xs md:text-sm tracking-[0.35em] uppercase text-light2 opacity-50 mb-12 text-center">
        {tagline}
      </p>

      {/* Progress bar */}
      <div className="w-48 flex flex-col items-center gap-3">
        <div className="w-full h-px bg-light1/15 relative overflow-hidden">
          <div
            className="absolute left-0 top-0 h-full bg-light1 transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="font-body text-xs tabular-nums tracking-widest text-light1/45">
          {progress}%
        </span>
      </div>
    </div>
  );
}