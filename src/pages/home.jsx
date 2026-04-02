import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Capabilities from "../components/capabilities";
import HumanAICollaboration from "../components/human-ai-collaboration";
import Challenges from "../components/challenges";
import Insights from "../components/insights";
import Solutions from "../components/solutions";
import FeaturedAI from "../components/featured-ai";
import CTASection from "../components/cta-section";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Capabilities />
        <HumanAICollaboration />
        <Challenges />
        <Insights />
        <Solutions />
        <FeaturedAI />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}