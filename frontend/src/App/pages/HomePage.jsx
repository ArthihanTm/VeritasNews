import { useEffect, useState } from "react";
import { Link } from "react-router";

const MOCK_STORIES = [
  {
    id: 1,
    category: "Politics",
    headline: "Senate Reaches Unlikely Compromise on Infrastructure Bill",
    desc: "After weeks of gridlock, bipartisan leaders announced a framework that promises significant investment while appeasing fiscal conservatives.",
    img: "https://images.unsplash.com/photo-1768353083126-be88cda590ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2xpdGljYWwlMjBhc3NlbWJseXxlbnwxfHx8fDE3NzM2ODE1NDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 2,
    category: "Architecture",
    headline: "The Silent Transformation of Modern City Skylines",
    desc: "Urban planners are reconsidering the necessity of glass towers in favor of sustainable, community-focused structural paradigms.",
    img: "https://images.unsplash.com/photo-1645803764353-3edc5284a5c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjaXR5JTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3MzY0NTcyMXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 3,
    category: "Environment",
    headline: "New Global Pact Aims to Protect Ancient Forests",
    desc: "Over fifty nations have signed an agreement to eliminate deforestation in protected zones by the end of the decade, a move lauded by climate scientists.",
    img: "https://images.unsplash.com/photo-1614628086548-5e9ef25b3018?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBjbGltYXRlJTIwZm9yZXN0fGVufDF8fHx8MTc3MzY4MTU0OXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

const SECONDARY_WORLD = [
  {
    id: 4,
    category: "Europe",
    headline: "Historic Treaty Signed in Geneva",
    desc: "Delegates finalize the long-awaited agreement on regional trade protocols, marking a new era of economic cooperation.",
  },
  {
    id: 5,
    category: "Asia",
    headline: "Tech Innovations Drive Markets in Tokyo",
    desc: "A surge in semiconductor manufacturing leads to unprecedented growth across major Asian financial centers.",
  },
];

const SECONDARY_REGIONAL = [
  {
    id: 6,
    category: "Local",
    headline: "City Council Approves New Transit Budget",
    desc: "The expanded budget will fund three new light rail lines and significant upgrades to existing bus routes over the next five years.",
  },
  {
    id: 7,
    category: "State",
    headline: "Governor Vetoes Controversial Education Bill",
    desc: "Citing concerns over funding mechanisms, the governor sent the bill back to the legislature for revision.",
  },
];

export function HomePage() {
  const [apiMessage, setApiMessage] = useState("loading...");

  useEffect(() => {
    const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

    fetch(`${apiBaseUrl}/`)
      .then((response) => response.text())
      .then((text) => setApiMessage(text))
      .catch(() => setApiMessage("backend not reachable"));
  }, []);

  return (
    <div className="flex flex-col gap-24">
      {/* Hero Section */}
      <section className="flex flex-col gap-8 md:px-12">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-8 font-semibold text-veritas-text">
            Global Markets Rally as Tech Sector Surges
          </h2>
          <p className="text-xl md:text-2xl text-veritas-text-secondary max-w-3xl leading-relaxed">
            Major indices hit record highs following a string of better-than-expected earnings reports from leading technology firms, signaling renewed investor confidence despite lingering inflation concerns.
          </p>
          <p className="mt-6 font-mono text-xs uppercase tracking-widest text-veritas-text-secondary">
            API test: {apiMessage}
          </p>
        </div>
      </section>

      {/* Primary Stories Grid */}
      <section className="border-t border-veritas-border pt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 lg:gap-20">
          {MOCK_STORIES.map((story) => (
            <article key={story.id} className="flex flex-col group">
              <div className="aspect-[4/3] w-full mb-6 overflow-hidden">
                <img
                  src={story.img}
                  alt={story.headline}
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.02]"
                />
              </div>
              <span className="font-mono text-xs uppercase tracking-widest text-veritas-text-secondary mb-3">
                {story.category}
              </span>
              <h3 className="font-serif text-2xl lg:text-3xl font-semibold mb-4 leading-snug group-hover:text-veritas-accent transition-colors">
                {story.headline}
              </h3>
              <p className="text-veritas-text-secondary text-base lg:text-lg">
                {story.desc}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* World & Regional Previews */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-24">
        {/* World */}
        <div className="flex flex-col">
          <div className="flex items-center justify-between border-b border-veritas-text pb-4 mb-8">
            <h4 className="font-serif text-2xl font-semibold">World</h4>
            <Link to="/world" className="font-mono text-xs uppercase tracking-widest text-veritas-text-secondary hover:text-veritas-text">
              View All
            </Link>
          </div>
          <div className="flex flex-col gap-12">
            {SECONDARY_WORLD.map((story) => (
              <article key={story.id} className="flex flex-col">
                <span className="font-mono text-[10px] uppercase tracking-widest text-veritas-accent mb-2">
                  {story.category}
                </span>
                <h5 className="font-serif text-xl font-semibold mb-3 leading-snug hover:text-veritas-accent cursor-pointer transition-colors">
                  {story.headline}
                </h5>
                <p className="text-veritas-text-secondary text-sm">
                  {story.desc}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Regional */}
        <div className="flex flex-col">
          <div className="flex items-center justify-between border-b border-veritas-text pb-4 mb-8">
            <h4 className="font-serif text-2xl font-semibold">Regional</h4>
            <Link to="/regional" className="font-mono text-xs uppercase tracking-widest text-veritas-text-secondary hover:text-veritas-text">
              View All
            </Link>
          </div>
          <div className="flex flex-col gap-12">
            {SECONDARY_REGIONAL.map((story) => (
              <article key={story.id} className="flex flex-col">
                <span className="font-mono text-[10px] uppercase tracking-widest text-veritas-text-secondary mb-2">
                  {story.category}
                </span>
                <h5 className="font-serif text-xl font-semibold mb-3 leading-snug hover:text-veritas-accent cursor-pointer transition-colors">
                  {story.headline}
                </h5>
                <p className="text-veritas-text-secondary text-sm">
                  {story.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
