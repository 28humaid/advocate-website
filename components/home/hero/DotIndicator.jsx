import React from 'react'

const DotIndicator = ({ CAROUSEL_IMAGES, currentIndex, setNextIndex, setTransitioning, setCurrentIndex }) => {
  return (
    <div className="flex gap-2 pt-4" role="tablist" aria-label="Carousel slide indicators">
        {CAROUSEL_IMAGES.map((_, i) => (
        <button
            key={i}
            role="tab"
            aria-selected={i === currentIndex}
            aria-label={`Slide ${i + 1}`}
            onClick={() => {
            if (i === currentIndex) return;
            setNextIndex(i);
            setTransitioning(true);
            setTimeout(() => {
                setCurrentIndex(i);
                setTransitioning(false);
            }, 1000);
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
            i === currentIndex
                ? "w-6 bg-white"
                : "w-2 bg-white/50 hover:bg-white/80"
            }`}
        />
        ))}
    </div>
  )
}

export default DotIndicator