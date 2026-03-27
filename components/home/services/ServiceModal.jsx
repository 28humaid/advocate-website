"use client";

import { useEffect } from "react";

export default function ServiceModal({ service, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="relative bg-[var(--color-dark2)] border border-[#C9A84C]/30 rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl animate-modal">
        {/* Gold top bar */}
        <div className="h-[3px] bg-gradient-to-r from-[#C9A84C] to-[#C9A84C]/30" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/5 border border-white/10 text-[var(--color-light3)] hover:bg-[#C9A84C]/15 hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all duration-200 flex items-center justify-center text-sm"
        >
          ✕
        </button>

        {/* Image */}
        <div className="relative w-full h-52 overflow-hidden">
          <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Body */}
        <div className="px-8 py-7">
          <p
            className="text-[#C9A84C] text-[0.65rem] tracking-[0.25em] uppercase font-medium mb-2"
            style={{ fontFamily: "var(--font-body, 'Poppins', sans-serif)" }}
          >
            Legal Service
          </p>
          <h3
            className="text-[var(--color-light3)] text-2xl font-semibold mb-4 leading-snug"
            style={{ fontFamily: "var(--font-heading, 'Playfair Display', serif)" }}
          >
            {service.title}
          </h3>
          <div className="h-px bg-white/10 mb-4" />
          <p
            className="text-[var(--color-light3)]/70 text-sm leading-relaxed mb-3"
            style={{ fontFamily: "var(--font-body, 'Poppins', sans-serif)" }}
          >
            {service.shortDescription}
          </p>
          <p
            className="text-[var(--color-light3)]/50 text-xs leading-loose"
            style={{ fontFamily: "var(--font-body, 'Poppins', sans-serif)" }}
          >
            {service.expandedDetail}
          </p>
        </div>
      </div>
    </div>
  );
}