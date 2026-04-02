import SectionHeading from "./section-heading";
import StatCard from "./stat-card";
import { stats } from "../data/site-content";

export default function Challenges() {
  return (
    <section id="challenges" className="section-shell">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Challenges"
          title="Challenges We Help Solve"
          description="Healthcare systems—especially rural facilities—face increasing pressure from supply chain inefficiencies, rising costs, and limited visibility."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <StatCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}