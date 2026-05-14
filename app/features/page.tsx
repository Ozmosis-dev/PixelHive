import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeaturesHero from "@/components/sections/FeaturesHero";
import IngestFeature from "@/components/sections/IngestFeature";
import AIEditingFeature from "@/components/sections/AIEditingFeature";
import SequencingFeature from "@/components/sections/SequencingFeature";
import ReviewFeature from "@/components/sections/ReviewFeature";
import AutomationFeature from "@/components/sections/AutomationFeature";
import DeliveryFeature from "@/components/sections/DeliveryFeature";

export const metadata = {
  title: "Features — PixelHive",
  description:
    "Every stage of the listing-photo workflow, designed as one product.",
};

export default function FeaturesPage() {
  return (
    <>
      <Header activeNav="Features" />
      <main>
        <FeaturesHero />
        <IngestFeature />
        <AIEditingFeature />
        <SequencingFeature />
        <ReviewFeature />
        <AutomationFeature />
        <DeliveryFeature />
      </main>
      <Footer />
    </>
  );
}
