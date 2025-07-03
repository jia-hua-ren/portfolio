import { AboutSection } from "@/components/AboutSection";
import { MeSection } from "@/components/MeSection";
import { Navbar } from "@/components/Navbar";
import { StarBackground } from "@components/StarBackground";
import { ThemeToggle } from "@components/ThemeToggle";

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
      </main>
      {/* Footer */}
    </div>
  );
};

export default Home;
