import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import CertificationsSection from "@/components/CertificationsSection";
import {
  AboutSection,
  ContactSection,
  WorksSection,
} from "@/components/Sections";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <TechMarquee />
        <AboutSection />
        <WorksSection />
        <CertificationsSection />
        <ContactSection />
      </main>
    </div>
  );
}
