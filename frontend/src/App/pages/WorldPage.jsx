const WORLD_STORIES = [
  {
    id: 1,
    category: "Diplomacy",
    headline: "The shifting alliances in the modern Middle East",
    desc: "A series of diplomatic meetings in the region highlights a new reality for traditional alliances, emphasizing economic ties over historical allegiances.",
  },
  {
    id: 2,
    category: "Economy",
    headline: "Central banks grapple with persistent inflation signals",
    desc: "Despite recent interest rate hikes, inflation continues to hover above target levels in several major economies, prompting debates on further tightening.",
  },
  {
    id: 3,
    category: "Climate",
    headline: "Unprecedented drought threatens global supply chains",
    desc: "Low water levels in crucial shipping canals are causing significant delays, forcing logistics companies to reconsider their long-term strategies.",
  },
  {
    id: 4,
    category: "Technology",
    headline: "European Union finalizes sweeping AI regulations",
    desc: "The landmark legislation aims to balance innovation with consumer protection, setting a precedent that could influence global standards.",
  },
  {
    id: 5,
    category: "Culture",
    headline: "The resurgence of independent cinema in South America",
    desc: "A new wave of filmmakers is capturing international attention, exploring complex social themes with minimal budgets and maximum impact.",
  },
  {
    id: 6,
    category: "Health",
    headline: "Breakthrough in vaccine research offers new hope",
    desc: "Scientists announce a novel delivery mechanism that could significantly improve the efficacy of existing treatments for seasonal viruses.",
  },
];

export function WorldPage() {
  return (
    <div className="flex flex-col gap-16 md:px-12">
      <header className="border-b-2 border-veritas-text pb-6 flex items-end justify-between">
        <h2 className="font-serif text-5xl font-semibold">World News</h2>
        <span className="font-mono text-sm text-veritas-text-secondary uppercase tracking-widest hidden md:inline-block">
          Global Reporting
        </span>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-16">
        {WORLD_STORIES.map((story, index) => (
          <article key={story.id} className="flex flex-col">
            <span className="font-mono text-xs uppercase tracking-widest text-veritas-accent mb-4">
              {story.category}
            </span>
            <h3 className="font-serif text-3xl font-semibold mb-6 leading-snug hover:text-veritas-accent cursor-pointer transition-colors">
              {story.headline}
            </h3>
            <p className="text-veritas-text-secondary text-lg leading-relaxed mb-8">
              {story.desc}
            </p>
            {index < WORLD_STORIES.length - 2 && (
              <div className="w-full h-[1px] bg-veritas-border mt-auto"></div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
