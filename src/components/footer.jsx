import logo from "../assets/logop3.jpg";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--line)] py-10">
      <div className="container-shell">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-md">
            <img
              src={logo}
              alt="P3Squared Software Engineering logo"
              className="h-14 w-auto object-contain"
            />
            <p className="mt-4 text-sm leading-7 text-[var(--text-soft)]">
              P3Squared is focused on improving healthcare supply chain
              visibility, reducing waste, and supporting stronger operational
              decisions through software and AI-enabled forecasting.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <h3 className="mb-3 text-sm font-semibold text-[var(--text)]">
                Navigation
              </h3>
              <div className="space-y-2 text-sm text-[var(--text-soft)]">
                <a href="#home" className="block transition hover:text-[var(--text)]">
                  Home
                </a>
                <a href="#capabilities" className="block transition hover:text-[var(--text)]">
                  Capabilities
                </a>
                <a href="#challenges" className="block transition hover:text-[var(--text)]">
                  Challenges
                </a>
                <a href="#solutions" className="block transition hover:text-[var(--text)]">
                  Solutions
                </a>
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-semibold text-[var(--text)]">
                Focus Areas
              </h3>
              <div className="space-y-2 text-sm text-[var(--text-soft)]">
                <p>Predictive Analytics</p>
                <p>Supply Chain Optimization</p>
                <p>Remote Monitoring</p>
                <p>Human-AI Collaboration</p>
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-semibold text-[var(--text)]">
                Contact
              </h3>
              <div className="space-y-2 text-sm text-[var(--text-soft)]">
                <a
                  href="mailto:contact@p3squared.com"
                  className="block transition hover:text-[var(--text)]"
                >
                  contact@p3squared.com
                </a>
                <a
                  href="#contact"
                  className="block transition hover:text-[var(--text)]"
                >
                  Schedule a Consultation
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-[var(--line)] pt-6 text-sm text-[var(--text-soft)]">
          © 2026 P3Squared Software Engineering. All rights reserved.
        </div>
      </div>
    </footer>
  );
}