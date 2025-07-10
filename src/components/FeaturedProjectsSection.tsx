import { ProjectsSection } from "@/components/ProjectsSection";
import { featuredProjects } from "@/data/projectsData";

export const FeaturedProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Features <span className="text-primary">Projects</span>
        </h2>
        <ProjectsSection projects={featuredProjects} />
      </div>
    </section>
  );
};
