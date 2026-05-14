import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQHero from "@/components/sections/FAQHero";
import FAQContent from "@/components/sections/FAQContent";

export const metadata = {
  title: "FAQ — PixelHive",
  description:
    "The questions teams ask before they move their workflow into the hive.",
};

export default function FAQPage() {
  return (
    <>
      <Header activeNav="FAQ" />
      <main>
        <FAQHero />
        <FAQContent />
      </main>
      <Footer />
    </>
  );
}
