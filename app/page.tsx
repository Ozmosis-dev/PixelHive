import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import WorkflowSteps from "@/components/sections/WorkflowSteps";
import AIEditingSection from "@/components/sections/AIEditingSection";
import AutomationSection from "@/components/sections/AutomationSection";
import CTABridge from "@/components/sections/CTABridge";

export default function HomePage() {
  return (
    <>
      <Header activeNav="Home" />
      <main>
        <Hero />
        <WorkflowSteps />
        <AIEditingSection />
        <AutomationSection />
        <CTABridge />
      </main>
      <Footer />
    </>
  );
}
