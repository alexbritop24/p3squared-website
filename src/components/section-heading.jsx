export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading-wrap">
      {eyebrow && <p className="tech-eyebrow">{eyebrow}</p>}

      <h2 className="section-title">{title}</h2>

      {description && <p className="section-description">{description}</p>}
    </div>
  );
}