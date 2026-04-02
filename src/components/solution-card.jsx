export default function SolutionCard({ title, body }) {
  return (
    <div className="surface-card rounded-2xl p-6 transition hover:-translate-y-1 hover:accent-ring">
      <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-[rgba(255,255,255,0.03)] text-sm font-semibold text-[var(--accent)]">
        +
      </div>

      <h3 className="tech-card-title">{title}</h3>
      <p className="tech-card-body">{body}</p>
    </div>
  );
}