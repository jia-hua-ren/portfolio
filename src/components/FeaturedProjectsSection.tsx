import { ProjectsSection } from "@/components/ProjectsSection";
import { featuredProjects } from "@/data/projectsData";
import { ArrowRight } from "lucide-react";

export const FeaturedProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <ProjectsSection projects={featuredProjects} />

        <div className="text-center mt-12 space-y-4">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            href="/portfolio/#/projects"
          >
            Check My Other Projects <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
