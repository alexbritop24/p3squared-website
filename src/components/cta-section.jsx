export default function CTASection() {
  return (
    <section id="contact" className="section-shell">
      <div className="container-shell">
        <div className="surface-card rounded-3xl p-8 text-center sm:p-12">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent-strong)]">
            Start the Conversation
          </p>

          <h2 className="mx-auto max-w-3xl text-3xl font-semibold leading-tight text-[var(--text)] sm:text-4xl lg:text-5xl">
            Let’s modernize rural healthcare together.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[var(--text-soft)] sm:text-lg">
            P3Squared helps healthcare organizations improve visibility, reduce
            operational waste, and build stronger systems through modern
            software and AI-supported forecasting.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:contact@p3squared.com"
              className="tech-button-primary"
            >
              Schedule a Consultation
            </a>

            <a href="#home" className="tech-button-secondary">
              Back to Top
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}