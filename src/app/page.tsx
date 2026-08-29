import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/app/sections/HeroSection";
import { AboutSection } from "@/app/sections/AboutSection";
import { ParcoursSection } from "@/app/sections/ParcoursSection";
import { ProjetsSection } from "@/app/sections/ProjectsSection";
import { ContactSection } from "@/app/sections/ContactSection";
import { SplashScreen } from "@/components/ui/SplashScreen";
import { Spotlight } from "@/components/ui/Spotlight";

export default function Home() {
  return (
    <>
      <Spotlight />
      <SplashScreen>
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ParcoursSection />
          <ProjetsSection />
          <ContactSection />
        </main>
        <Footer />
      </SplashScreen>
    </>
  );
}