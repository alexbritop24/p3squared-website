export default function StatCard({ title, stat, body }) {
  return (
    <div className="surface-card rounded-2xl p-6 transition hover:-translate-y-1 hover:accent-ring">
      <div className="tech-stat mb-4">{stat}</div>
      <h3 className="tech-card-title">{title}</h3>
      <p className="tech-card-body">{body}</p>
    </div>
  );
}