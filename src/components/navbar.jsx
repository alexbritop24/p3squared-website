import { useEffect, useState } from "react";
import logo from "../assets/logop3.jpg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };

    const closeOnEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("resize", closeOnResize);
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      window.removeEventListener("resize", closeOnResize);
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { href: "#capabilities", label: "Capabilities" },
    { href: "#challenges", label: "Challenges" },
    { href: "#insights", label: "Insights" },
    { href: "#solutions", label: "Solutions" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--line)] bg-[rgba(7,17,31,0.78)] backdrop-blur-xl">
      <div className="container-shell">
        <div className="flex items-center justify-between py-4 md:py-5">
          <a href="#home" className="flex items-center gap-3" onClick={closeMenu}>
            <img
              src={logo}
              alt="P3Squared Software Engineering logo"
              className="h-12 w-auto object-contain sm:h-12"
            />
          </a>

          <nav className="hidden items-center gap-2 md:flex">
            {navLinks.slice(0, 4).map((link) => (
              <a key={link.href} href={link.href} className="tech-nav-link">
                {link.label}
              </a>
            ))}

            <a href="#contact" className="tech-button-primary ml-2">
              Schedule a Consultation
            </a>
          </nav>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--line)] bg-[rgba(255,255,255,0.03)] text-[var(--text)] transition hover:bg-[rgba(255,255,255,0.06)] md:hidden"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-[2px] w-5 rounded-full bg-current transition ${
                  menuOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-[2px] w-5 rounded-full bg-current transition ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] h-[2px] w-5 rounded-full bg-current transition ${
                  menuOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        className={`md:hidden ${menuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        <div
          onClick={closeMenu}
          className={`fixed inset-0 top-[73px] bg-[rgba(3,8,16,0.68)] transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        <div
          className={`absolute inset-x-0 top-full border-b border-[var(--line)] bg-[rgba(7,17,31,0.96)] backdrop-blur-2xl transition-all duration-300 ${
            menuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-3 opacity-0"
          }`}
        >
          <div className="container-shell py-4">
            <div className="surface-card rounded-3xl p-4">
              <div className="mb-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--accent-strong)]">
                  Navigation
                </p>
              </div>

              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="rounded-2xl border border-transparent px-4 py-3 text-base font-semibold text-[var(--text-soft)] transition hover:border-[var(--line)] hover:bg-[rgba(255,255,255,0.03)] hover:text-[var(--text)]"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="mt-4 border-t border-[var(--line)] pt-4">
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="tech-button-primary w-full"
                >
                  Schedule a Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}