import { useState } from "react";

const REGIONS = [
  "Northeast",
  "Midwest",
  "South",
  "West",
  "Pacific",
];

const REGIONAL_STORIES = [
  {
    id: 1,
    category: "Infrastructure",
    headline: "City council debates massive highway overhaul project",
    desc: "The proposed multibillion-dollar plan aims to alleviate chronic congestion but faces stiff opposition from environmental groups.",
  },
  {
    id: 2,
    category: "Education",
    headline: "New curriculum standards ignite fierce debate among parents",
    desc: "School boards across the state are grappling with implementing the revised guidelines, which emphasize diverse historical perspectives.",
  },
  {
    id: 3,
    category: "Business",
    headline: "Local tech hub sees record venture capital investment",
    desc: "Startups in the region attracted unprecedented funding this quarter, signaling a potential shift away from traditional coastal centers.",
  },
  {
    id: 4,
    category: "Environment",
    headline: "Efforts to restore wetlands show promising early results",
    desc: "A collaborative project between the state and local conservationists has significantly increased biodiversity in previously degraded areas.",
  },
];

export function RegionalPage() {
  const [region, setRegion] = useState("Northeast");

  return (
    <div className="flex flex-col gap-16 md:px-12">
      <header className="border-b-2 border-veritas-text pb-6 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <h2 className="font-serif text-5xl font-semibold">Regional News</h2>
        
        <div className="relative w-full md:w-auto">
          <select
            className="w-full md:w-64 font-mono text-sm uppercase tracking-widest border border-veritas-text bg-transparent px-4 py-3 appearance-none cursor-pointer focus:outline-none hover:bg-veritas-text hover:text-veritas-bg transition-colors"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
          >
            {REGIONS.map((r) => (
              <option key={r} value={r} className="bg-veritas-bg text-veritas-text">
                {r} Region
              </option>
            ))}
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-16 mt-8">
        {REGIONAL_STORIES.map((story, index) => (
          <article key={story.id} className="flex flex-col">
            <span className="font-mono text-xs uppercase tracking-widest text-veritas-text-secondary mb-4">
              {region} • {story.category}
            </span>
            <h3 className="font-serif text-3xl font-semibold mb-6 leading-snug hover:text-veritas-accent cursor-pointer transition-colors">
              {story.headline}
            </h3>
            <p className="text-veritas-text-secondary text-lg leading-relaxed mb-8">
              {story.desc}
            </p>
            {index < REGIONAL_STORIES.length - 2 && (
              <div className="w-full h-[1px] bg-veritas-border mt-auto"></div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
