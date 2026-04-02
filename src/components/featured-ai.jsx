import aiDashboard from "../assets/ai-dashboard.jpg";

export default function FeaturedAI() {
  return (
    <section className="section-shell">
      <div className="container-shell">
        <div className="accent-ring surface-card overflow-hidden rounded-3xl p-8 sm:p-10 lg:p-14">
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent-strong)]">
                AI Forecasting Layer
              </p>

              <h2 className="max-w-3xl text-3xl font-semibold leading-tight text-[var(--text)] sm:text-4xl lg:text-5xl">
                Data-driven forecasting for stronger supply chain decisions.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--text-soft)] sm:text-lg">
                We leverage advanced demand forecasting to help consolidate
                orders, reduce expensive expedited shipping, and provide
                data-driven insights that help facilities negotiate better terms
                and reduce waste.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-[var(--line)] bg-[rgba(255,255,255,0.03)] p-5">
                  <h3 className="mb-2 text-sm font-semibold text-[var(--text)]">
                    Better Order Timing
                  </h3>
                  <p className="text-sm leading-7 text-[var(--text-soft)]">
                    Improve planning with stronger visibility into usage,
                    replenishment, and future demand signals.
                  </p>
                </div>

                <div className="rounded-2xl border border-[var(--line)] bg-[rgba(255,255,255,0.03)] p-5">
                  <h3 className="mb-2 text-sm font-semibold text-[var(--text)]">
                    Lower Emergency Shipping
                  </h3>
                  <p className="text-sm leading-7 text-[var(--text-soft)]">
                    Reduce dependency on expensive rush logistics through better
                    forecasting and coordinated purchasing.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="accent-ring surface-card overflow-hidden rounded-3xl p-3">
                <div className="relative overflow-hidden rounded-2xl border border-[var(--line)]">
                  <img
                    src={aiDashboard}
                    alt="AI-powered healthcare supply chain dashboard"
                    className="h-[420px] w-full object-cover transition duration-700 hover:scale-[1.03] sm:h-[520px]"
                  />

                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,31,0.1),rgba(7,17,31,0.5))]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}