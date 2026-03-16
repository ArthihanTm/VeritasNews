import { useState } from "react";

export function FactCheckPage() {
  const [query, setQuery] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      setHasSearched(true);
    }
  };

  return (
    <div className="flex flex-col gap-16 md:px-12 max-w-4xl mx-auto w-full pt-12">
      <header className="flex flex-col gap-6 text-center mb-8">
        <h2 className="font-serif text-6xl md:text-8xl font-semibold tracking-tight">
          Fact Check
        </h2>
        <p className="font-mono text-sm uppercase tracking-widest text-veritas-bg/60">
          Verify statements against curated journalistic sources
        </p>
      </header>

      <form onSubmit={handleSearch} className="flex flex-col gap-4 relative">
        <div className="relative w-full">
          <textarea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter a statement or headline to verify..."
            rows={4}
            className="w-full bg-transparent border border-veritas-bg p-6 font-mono text-base md:text-lg leading-relaxed text-veritas-bg placeholder:text-veritas-bg/30 resize-none focus:outline-none selection:bg-veritas-bg selection:text-veritas-dark-bg transition-colors"
            spellCheck={false}
          />
          {!query && (
            <span className="absolute left-6 top-6 pointer-events-none text-veritas-bg/40 font-mono text-base md:text-lg opacity-0 animate-[pulse_1.5s_ease-in-out_infinite] delay-1000">
              _
            </span>
          )}
        </div>
        <div className="flex justify-end mt-4">
          <button
            type="submit"
            disabled={!query.trim()}
            className="font-mono text-xs uppercase tracking-[0.2em] border border-veritas-bg/50 px-8 py-3 hover:bg-veritas-bg hover:text-veritas-dark-bg transition-colors disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-veritas-bg"
          >
            Analyze Statement
          </button>
        </div>
      </form>

      {hasSearched && (
        <div className="flex flex-col gap-16 mt-12 animate-fade-in border-t border-veritas-bg/20 pt-16">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            {/* Score */}
            <div className="flex flex-col gap-4 min-w-[200px]">
              <span className="font-mono text-xs uppercase tracking-widest text-veritas-bg/50">
                Credibility Score
              </span>
              <div className="font-serif text-8xl md:text-9xl leading-none">
                84<span className="text-4xl md:text-5xl">%</span>
              </div>
              <div className="h-[2px] w-full bg-veritas-bg/20 mt-2">
                <div className="h-full bg-veritas-bg w-[84%]"></div>
              </div>
            </div>

            {/* Analysis */}
            <div className="flex flex-col gap-8 flex-grow">
              <span className="font-mono text-xs uppercase tracking-widest text-veritas-bg/50">
                Analysis Report
              </span>
              <div className="flex flex-col gap-6 text-lg md:text-xl font-body leading-relaxed text-veritas-bg/90">
                <p>
                  The statement contains several verifiable claims supported by recent municipal records, but heavily contextualizes them to present a partisan narrative.
                </p>
                <p>
                  Specifically, the claim regarding the "historic budget deficit" is factually accurate based on the recent fiscal year audit. The deficit reached $4.2 billion, which is a modern record for the district.
                </p>
                <p>
                  However, attributing this shortfall entirely to the new transportation initiative is highly misleading. A review of the budget breakdown reveals that 65% of the deficit stems from long-standing pension obligations and reduced commercial tax revenue following remote work trends. The transportation bill accounts for approximately 12% of the variance.
                </p>
                <p>
                  <strong>Conclusion:</strong> Mostly True premise, but misleading causation.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
