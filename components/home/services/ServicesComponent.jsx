"use client";

import { useState } from "react";
import { servicesData } from "@/data/Servicesdata";
import ServiceCard from "./ServiceCard";
import ServiceModal from "./ServiceModal";

export default function ServicesComponent() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="bg-[var(--color-dark1)] py-20 px-6 md:px-16">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-14">
        <p
          className="text-[var(--color-light3)] text-xs tracking-[0.3em] uppercase font-medium mb-3"
          style={{ fontFamily: "var(--font-body, 'Poppins', sans-serif)" }}
        >
          What We Handle
        </p>
        <div className="flex items-end gap-6">
          <h2
            className="text-[var(--color-light1)] text-3xl md:text-5xl font-semibold leading-tight max-w-lg"
            style={{ fontFamily: "var(--font-heading, 'Playfair Display', serif)" }}
          >
            Our Civil Legal Services
          </h2>
          <div className="hidden md:block flex-1 h-px bg-[#EAE4D5] mb-3" />
        </div>
        <p
          className="text-[var(--color-light3)]/60 text-sm mt-4 max-w-xl leading-relaxed"
          style={{ fontFamily: "var(--font-body, 'Poppins', sans-serif)" }}
        >
          Expert legal counsel across all domains of civil law. Click any card to learn more about how we can help
          you.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {servicesData.map((service) => (
          <ServiceCard key={service.id} service={service} onOpen={setSelected} />
        ))}
      </div>

      {/* Modal */}
      {selected && <ServiceModal service={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}