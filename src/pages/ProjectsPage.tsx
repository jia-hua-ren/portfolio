import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ProjectsSection } from "@/components/ProjectsSection";
import { StarBackground } from "@/components/StarBackground";
import { ThemeToggle } from "@/components/ThemeToggle";
import { projects } from "@/data/projectsData"; // Import all projects
import { cn } from "@/lib/utils";
import { useState } from "react";

const categories: string[] = ["Card View", "MY JOURNEY"];
const ProjectsPage = () => {
  const [category, setCategory] = useState<string>("Card View");
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle Button */}
      <ThemeToggle />

      {/* Background Effects */}
      <StarBackground />
      {/* Navbar */}

      <Navbar />
      {/* Main Content */}

      {/* Back Button top left */}

      <main>
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-wrap justify-center gap-4 pt-24 py-8">
            {categories.map((cat, key) => (
              <button
                key={key}
                onClick={() => setCategory(cat)}
                className={cn(
                  "px-5 py-2 rounded-full transition-colors duration-300 capitalize cursor-pointer",
                  category === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary/70 text-foreground hover:bg-secondary"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            All <span className="text-primary">Projects</span>
          </h2>
          <ProjectsSection projects={projects} />
        </div>
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProjectsPage;
