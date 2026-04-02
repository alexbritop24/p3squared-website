import SectionHeading from "./section-heading";
import SolutionCard from "./solution-card";
import { solutions } from "../data/site-content";

export default function Solutions() {
  return (
    <section id="solutions" className="section-shell">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Solutions"
          title="What P3Squared Can Do"
          description="P3Squared helps rural healthcare organizations move from manual, reactive processes to clearer, more modern operational systems supported by stronger visibility and forecasting."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((item, index) => (
            <SolutionCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}