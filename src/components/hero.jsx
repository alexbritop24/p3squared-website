import heroImage from "../assets/hero-road.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-120px] top-20 h-72 w-72 rounded-full bg-[var(--accent)] opacity-10 blur-3xl" />
        <div className="absolute right-[-80px] top-1/4 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl" />
      </div>

      <div className="container-shell">
        <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
          <div className="max-w-3xl">
            <p className="tech-eyebrow">A Digital Eve AI Collaboration</p>

            <h1 className="mt-5 font-['Space_Grotesk'] text-[clamp(2.6rem,8.5vw,5.35rem)] font-bold leading-[0.96] tracking-[-0.055em] text-[var(--text)]">
              Transforming rural healthcare with AI and human oversight.
            </h1>

            <p className="hero-body">
              P3Squared helps healthcare organizations improve supply chain
              visibility, reduce waste, strengthen oversight, and make better
              operational decisions through modern software and AI-supported
              forecasting.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
              <a href="#contact" className="tech-button-primary w-full sm:w-auto">
                Contact Us
              </a>

              <a href="#solutions" className="tech-button-secondary w-full sm:w-auto">
                Explore Solutions
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="surface-card rounded-2xl p-5">
                <p className="tech-stat">30%</p>
                <p className="tech-card-body">
                  Supply chain costs can account for roughly 30% of hospital
                  operating expenses.
                </p>
              </div>

              <div className="surface-card rounded-2xl p-5">
                <p className="tech-stat">$2.7M</p>
                <p className="tech-card-body">
                  Average medical and surgical supply costs for critical access
                  hospitals.
                </p>
              </div>

              <div className="surface-card rounded-2xl p-5">
                <p className="tech-stat">AI + Human</p>
                <p className="tech-card-body">
                  Technology-supported forecasting combined with responsible
                  human oversight.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="accent-ring surface-card relative overflow-hidden rounded-[24px] p-3 sm:rounded-[28px]">
              <div className="relative overflow-hidden rounded-[18px] border border-[var(--line)] sm:rounded-[22px]">
                <img
                  src={heroImage}
                  alt="Rural road logistics visual representing healthcare supply chain delivery"
                  className="h-[320px] w-full object-cover transition duration-700 hover:scale-[1.03] sm:h-[420px] lg:h-[620px]"
                />

                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,31,0.05),rgba(7,17,31,0.38))]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(7,17,31,0.55))]" />

                <div className="absolute bottom-4 right-4 rounded-2xl border border-white/20 bg-white/10 px-3 py-2 backdrop-blur-md sm:bottom-5 sm:right-5 sm:px-4 sm:py-3">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--accent-strong)]">
                    Directional Insight
                  </p>
                  <p className="mt-1 text-sm font-medium text-white">
                    Hospital this way →
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}