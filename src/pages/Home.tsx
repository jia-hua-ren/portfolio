import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { MeSection } from "@/components/MeSection";
import { Navbar } from "@/components/Navbar";
import { SkillsSection } from "@/components/SkillsSection";
import { StarBackground } from "@components/StarBackground";
import { ThemeToggle } from "@components/ThemeToggle";
import { Footer } from "@/components/Footer";
import { FeaturedProjectsSection } from "@/components/FeaturedProjectsSection";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle Button */}
      <ThemeToggle />

      {/* Background Effects */}
      <StarBackground />
      {/* Navbar */}

      <Navbar />
      {/* Main Content */}

      <main>
        <MeSection />
        <AboutSection />
        <FeaturedProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
