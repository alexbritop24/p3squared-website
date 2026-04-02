import humanAI from "../assets/human-ai.jpg";
import { collaboration } from "../data/site-content";

export default function HumanAICollaboration() {
  return (
    <section className="section-shell">
      <div className="container-shell">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="accent-ring surface-card overflow-hidden rounded-3xl p-3">
            <div className="relative overflow-hidden rounded-2xl border border-[var(--line)]">
              <img
                src={humanAI}
                alt="Human and AI collaboration visualization"
                className="h-[320px] w-full object-cover transition duration-700 hover:scale-[1.03] sm:h-[420px]"
              />

              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,31,0.1),rgba(7,17,31,0.45))]" />
            </div>
          </div>

          <div className="max-w-xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent-strong)]">
              Responsible Intelligence
            </p>

            <h2 className="mb-5 text-3xl font-semibold leading-tight text-[var(--text)] sm:text-4xl">
              {collaboration.title}
            </h2>

            <p className="text-base leading-8 text-[var(--text-soft)] sm:text-lg">
              {collaboration.body}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}