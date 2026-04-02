export default function InsightBlock({ title, body }) {
  return (
    <div className="surface-card rounded-2xl p-6 transition hover:-translate-y-1 hover:accent-ring">
      <div className="mb-4 h-px w-16 bg-[var(--accent)] opacity-80" />
      <h3 className="tech-card-title">{title}</h3>
      <p className="tech-card-body">{body}</p>
    </div>
  );
}