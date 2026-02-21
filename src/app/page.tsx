import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LegacyInit } from "@/components/legacy/LegacyInit";
import { Hero } from "@/components/sections/Hero";
import { Leistungen } from "@/components/sections/Leistungen";
import { Philosophie } from "@/components/sections/Philosophie";
import { Ueber } from "@/components/sections/Ueber";
import { PerspektivenSection } from "@/components/sections/PerspektivenSection";
import { Austausch } from "@/components/sections/Austausch";

export default function Page() {
  return (
    <>
      <LegacyInit />
      <Header />
      <main>
        <Hero />
        <Leistungen />
        <Philosophie />
        <Ueber />
        <PerspektivenSection />
        <Austausch />
      </main>
      <Footer />
    </>
  );
}
