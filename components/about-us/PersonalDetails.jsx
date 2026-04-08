"use client";

import { useState, useEffect } from "react";
import { slideshowImages, qualificationCards } from "@/data/PersonalDetailsData";

export default function PersonalDetails() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
        setIsTransitioning(false);
      }, 600);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-dark1 py-16">
      {/* Main Flex Container */}
      <div className="flex flex-col md:flex-row gap-10 max-w-6xl mx-auto">
        {/* ── LEFT: Slideshow ── */}
        <div className="flex-1 min-h-[420px] md:min-h-[560px] relative rounded-2xl overflow-hidden shadow-2xl">
          {/* Slides */}
          {slideshowImages.map((img, index) => (
            <div
              key={img.url}
              className="absolute inset-0 transition-all duration-700 ease-in-out"
              style={{
                opacity: index === currentSlide ? (isTransitioning ? 0 : 1) : 0,
                transform:
                  index === currentSlide
                    ? isTransitioning
                      ? "scale(1.04)"
                      : "scale(1)"
                    : "scale(1.04)",
              }}
            >
              <img
                src={img.url}
                alt={img.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}

          {/* Gold overlay gradient */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%)",
            }}
          />

          {/* Slide Dots */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {slideshowImages.map((_, i) => (
              <span
                key={i}
                className="block rounded-full transition-all duration-500"
                style={{
                  width: i === currentSlide ? "24px" : "8px",
                  height: "8px",
                  backgroundColor:
                    i === currentSlide ? "#C9A84C" : "rgba(255,255,255,0.5)",
                }}
              />
            ))}
          </div>
        </div>

        {/* ── RIGHT: Qualification Cards ── */}
        <div className="flex-1 flex flex-row flex-wrap gap-4 justify-center content-center">
          {qualificationCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="group relative flex flex-col p-5 rounded-2xl border overflow-hidden cursor-default transition-all duration-300"
                style={{
                    backgroundColor: "#fff",
                    borderColor: "rgba(201,168,76,0.18)",
                    flex: "1 1 220px",
                    minWidth: "220px",
                }}
                onMouseEnter={e => {
                    e.currentTarget.style.transform = "translateY(-5px) scale(1.018)";
                    e.currentTarget.style.boxShadow = "0 18px 40px -8px rgba(0,0,0,0.13)";
                }}
                onMouseLeave={e => {
                    e.currentTarget.style.transform = "";
                    e.currentTarget.style.boxShadow = "";
                }}
                >
                {/* Gold top bar */}
                <div className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "linear-gradient(90deg, #C9A84C, #F0D690, #C9A84C)" }} />
                {/* Icon */}
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-3 transition-all duration-300"
                    style={{ backgroundColor: "#F8F6F1", border: "1px solid rgba(201,168,76,0.28)" }}>
                    <Icon size={18} color="#C9A84C" strokeWidth={1.75} />
                </div>

                {/* Label */}
                <p className="text-[10px] font-bold tracking-widest uppercase mb-1"
                    style={{ fontFamily: "var(--font-heading)", color: "#C9A84C" }}>
                    {card.title}
                </p>

                {/* Main text */}
                <p className="text-sm font-bold leading-snug mb-2" style={{ color: "#1a1a1a" }}>
                    {card.description}
                </p>

                {/* Animated divider */}
                <div className="h-[2px] rounded-full transition-all duration-300 group-hover:w-[52px]"
                    style={{ width: "28px", background: "linear-gradient(90deg, #C9A84C, transparent)" }} />
                </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}