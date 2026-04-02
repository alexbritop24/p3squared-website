export default function CapabilityCard({ title, body }) {
  return (
    <div className="surface-card rounded-2xl p-6 transition hover:-translate-y-1 hover:accent-ring">
      <div className="mb-4 h-11 w-11 rounded-xl border border-[var(--line)] bg-[rgba(255,255,255,0.03)]" />
      <h3 className="tech-card-title">{title}</h3>
      <p className="tech-card-body">{body}</p>
    </div>
  );
}