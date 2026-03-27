"use client";

export default function ServiceCard({ service, onOpen }) {
  return (
    <div
      onClick={() => onOpen(service)}
      className="group relative border border-[#EAE4D5] hover:border-[#C9A84C] cursor-pointer overflow-hidden transition-all duration-300 rounded-xl hover:shadow-lg"
    >
      {/* Gold accent top bar */}
      <div className="absolute top-0 left-0 h-[3px] bg-[#C9A84C] w-0 group-hover:w-full transition-all duration-500 z-10" />

      {/* Image */}
      <div className="relative w-full h-52 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
        />
        <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
      </div>

      {/* Card Body */}
      <div className="p-6">
        <h3
          className="font-heading text-[var(--color-light3)] text-xl font-semibold mb-2 leading-snug group-hover:text-[#C9A84C] transition-colors duration-300"
          style={{ fontFamily: "var(--font-heading, 'Playfair Display', serif)" }}
        >
          {service.title}
        </h3>
        <p
          className="text-[var(--color-light3)] text-sm leading-relaxed mb-4"
          style={{ fontFamily: "var(--font-body, 'Poppins', sans-serif)" }}
        >
          {service.shortDescription}
        </p>

        {/* CTA */}
        <div className="flex items-center gap-2">
          <span
            className="text-xs font-medium tracking-widest uppercase text-[#C9A84C]/50 group-hover:text-[#C9A84C] transition-colors duration-300"
            style={{ fontFamily: "var(--font-body, 'Poppins', sans-serif)" }}
          >
            Click to know more
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            className="text-[#C9A84C]/40 group-hover:text-[#C9A84C] group-hover:translate-x-1 transition-all duration-300"
          >
            <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
          </svg>
        </div>
      </div>
    </div>
  );
}