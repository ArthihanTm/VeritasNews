function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center px-6">
      <section className="w-full max-w-2xl rounded-2xl border border-slate-800 bg-slate-900/60 p-8 shadow-2xl">
        <p className="text-sm text-cyan-300 font-medium">VeritasNews</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight">
          React + Vite + Tailwind is ready
        </h1>
        <p className="mt-4 text-slate-300">
          Start building your frontend in <code>src/app.jsx/index.jsx</code>.
        </p>
        <div className="mt-6 flex gap-3">
          <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs text-cyan-300 border border-cyan-400/30">
            React
          </span>
          <span className="rounded-full bg-violet-500/20 px-3 py-1 text-xs text-violet-300 border border-violet-400/30">
            Vite
          </span>
          <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs text-emerald-300 border border-emerald-400/30">
            Tailwind
          </span>
        </div>
      </section>
    </main>
  )
}

export default App
