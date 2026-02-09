"use client";

import { Reveal, TiltFeatureCard } from "@/components/ui";
import { CIVIC_TOOLS } from "@/lib/news";

export default function CitizenToolkit() {
  return (
    <section id="civic" className="mt-32 mb-20">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-4xl font-serif font-black text-slate-900 dark:text-white mb-4">
          Citizen Toolkit
        </h2>
        <p className="text-slate-500 text-lg">
          Powerful digital tools designed to bridge the gap between governance
          and the governed.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {CIVIC_TOOLS.map((tool, i) => (
          <Reveal key={tool.title} delay={i * 100}>
            <TiltFeatureCard
              icon={tool.icon}
              title={tool.title}
              desc={tool.desc}
              color={tool.color}
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
