import SectionHeading from "./section-heading";
import CapabilityCard from "./capability-card";
import { capabilities } from "../data/site-content";

export default function Capabilities() {
  return (
    <section id="capabilities" className="section-shell">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Capabilities"
          title="Our Capabilities"
          description="P3Squared delivers practical software and intelligence systems designed to improve visibility, planning, and supply chain performance in healthcare environments."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item, index) => (
            <CapabilityCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}