import SectionHeading from "./section-heading";
import InsightBlock from "./insight-block";
import { insights } from "../data/site-content";

export default function Insights() {
  return (
    <section id="insights" className="section-shell">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Operational Pressure"
          title="What’s Driving the Pressure on Rural Healthcare?"
          description="Rural healthcare facilities face a combination of purchasing disadvantages, logistics strain, and limited real-time visibility. These issues create waste, lock up capital, and make critical supply operations harder to manage."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {insights.map((item, index) => (
            <InsightBlock key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}