"use client";

import { CAROUSEL_IMAGES } from "@/utils/Carousel-images";
import React, { useState, useEffect, useCallback } from "react";
import DotIndicator from "./DotIndicator";
import styles from "@/styles/HeroComponent.module.css";

const INTERVAL_MS = 3000; // 3 seconds per image

const HeroComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [transitioning, setTransitioning] = useState(false);

  const advance = useCallback(() => {
    const next = (currentIndex + 1) % CAROUSEL_IMAGES.length;
    setNextIndex(next);
    setTransitioning(true);

    // After crossfade completes, snap the current to next
    setTimeout(() => {
      setCurrentIndex(next);
      setTransitioning(false);
    }, 1000); // must match CSS transition duration below
  }, [currentIndex]);

  useEffect(() => {
    const timer = setInterval(advance, INTERVAL_MS);
    return () => clearInterval(timer);
  }, [advance]);

  return (
    <div className="relative min-h-[80vh] overflow-hidden">

      {/* ── Layer 1: Current image (always visible beneath) ── */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${CAROUSEL_IMAGES[currentIndex]})` }}
        aria-hidden="true"
      />

      {/* ── Layer 2: Next image fades in on top, then snaps ── */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out"
        style={{
          backgroundImage: `url(${CAROUSEL_IMAGES[nextIndex]})`,
          opacity: transitioning ? 1 : 0,
        }}
        aria-hidden="true"
      />

      {/* ── Layer 3: Dark gradient overlay for text legibility ── */}
      <div
        className="absolute inset-0 bg-dark1/90"
        aria-hidden="true"
      />

      {/* ── Layer 4: Content ── */}
      <div className="relative z-10 flex flex-col items-center text-center pt-24 px-6 md:px-14 space-y-4 pb-16">
        <p className={`${styles.animTitle} text-light1 font-heading text-4xl md:text-6xl font-bold drop-shadow-xl`}>
          Alamgir & Associates
        </p>

        <p className={`${styles.animTagline} text-light1 font-heading text-2xl font-medium max-w-2xl drop-shadow`}>
          Providing Principled Legal Counsel Across Civil Matters for Over Three Decades
        </p>

        <p className={`${styles.animBody} text-light1 text-sm font-body font-medium max-w-3xl leading-relaxed opacity-90`}>
          Advocate Alamgir has been a trusted name in civil law, representing clients before the Supreme Court of India, Delhi High Court and District Courts with diligence and integrity. <br/> With over 32 years of practice, he brings deep expertise across property disputes, family matters, cheque bounce cases, motor accident claims, and all civil litigation. <br/>His approach is rooted in thorough preparation, clear communication, and an unwavering commitment to his clients&apos; rights. Whether you are facing a complex legal dispute or need sound legal advice, He offers the experience and dedication your case deserves.
        </p>

        {/* ── Dot indicators ── */}
        <div className={styles.animDots}>
          <DotIndicator
            CAROUSEL_IMAGES={CAROUSEL_IMAGES}
            currentIndex={currentIndex}
            setNextIndex={setNextIndex}
            setTransitioning={setTransitioning}
            setCurrentIndex={setCurrentIndex}
          />
        </div>

      </div>
    </div>
  );
};

export default HeroComponent;