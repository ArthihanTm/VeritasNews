import { Outlet, NavLink, useLocation } from "react-router";
import { useEffect } from "react";

export function Layout() {
  const location = useLocation();
  const isFactCheck = location.pathname === "/fact-check";

  useEffect(() => {
    document.body.style.backgroundColor = isFactCheck ? "#1A1A1A" : "#F7F4EF";
  }, [isFactCheck]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "World", path: "/world" },
    { name: "Regional", path: "/regional" },
    { name: "Fact Check", path: "/fact-check" },
  ];

  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-300 ${
        isFactCheck ? "bg-veritas-dark-bg text-veritas-bg" : "bg-veritas-bg text-veritas-text"
      }`}
    >
      <header className="w-full max-w-[1280px] mx-auto px-6 pt-12">
        <h1 className="font-serif text-5xl md:text-7xl text-center pb-8 font-semibold tracking-tight">
          VeritasNews
        </h1>
        <div
          className={`border-t flex justify-center py-5 ${
            isFactCheck ? "border-veritas-bg/20" : "border-veritas-border"
          }`}
        >
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `font-mono text-sm uppercase tracking-[0.15em] transition-colors ${
                    isActive
                      ? "underline underline-offset-8 decoration-[1px]"
                      : isFactCheck
                      ? "hover:text-veritas-bg/70"
                      : "text-veritas-text-secondary hover:text-veritas-text"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      {!isFactCheck && (
        <div className="w-full bg-veritas-accent py-2.5 px-6 text-center text-white">
          <p className="font-mono text-xs uppercase tracking-widest max-w-[1280px] mx-auto">
            Breaking: Global Markets Rally as Tech Sector Surges in Morning Trading
          </p>
        </div>
      )}

      <main className="flex-grow w-full max-w-[1280px] mx-auto px-6 pt-12 pb-24">
        <Outlet />
      </main>

      <footer
        className={`w-full max-w-[1280px] mx-auto px-6 py-12 border-t flex flex-col items-center gap-6 ${
          isFactCheck ? "border-veritas-bg/20" : "border-veritas-border"
        }`}
      >
        <div className="font-serif text-2xl font-semibold">VeritasNews</div>
        <nav className="flex gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={`font-mono text-xs uppercase tracking-widest ${
                isFactCheck ? "text-veritas-bg/60" : "text-veritas-text-secondary"
              }`}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
        <p className={`font-mono text-[10px] mt-4 ${isFactCheck ? "text-veritas-bg/40" : "text-veritas-text-secondary/50"}`}>
          © 2026 VeritasNews. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
