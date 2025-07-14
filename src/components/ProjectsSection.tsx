import { ExternalLink, Github } from "lucide-react";
import { type Project } from "@/data/projectsData"; // Adjust the import path as necessary

type ProjectsSectionProps = {
  projects: Project[];
};

export const ProjectsSection = ({ projects }: ProjectsSectionProps) => {
  return (
    <div>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Here are some of my projects that showcase my skills and interests.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, key) => (
          <div
            key={key}
            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
          >
            {project.image === "" ? (
              <div className="h-24 overflow-hidden" />
            ) : (
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            )}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <div className="flex space-x-3">
                  {project.url === "#" ? (
                    <div />
                  ) : (
                    <a
                      href={project.url}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}

                  {project.githubUrl === "#" ? (
                    <div />
                  ) : (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
