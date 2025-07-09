import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ProjectsSection } from "@/components/ProjectsSection";
import { StarBackground } from "@/components/StarBackground";
import { ThemeToggle } from "@/components/ThemeToggle";

const ProjectsPage = () => {
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
        <ProjectsSection />
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProjectsPage;
