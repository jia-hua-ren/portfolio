import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects: {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  url: string;
  githubUrl: string;
}[] = [
  {
    id: 1,
    title: "KOS",
    description:
      "Lab Project for CS170 at UCSB, implementing the kernle for an operating system for a simulated MIPS machine, which includes process management, memory management, pipes, basic system calls, etc.",
    image: "",
    tags: ["C"],
    url: "https://sites.cs.ucsb.edu/~rich/class/cs170/labs.html",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Code&Grow",
    description:
      "A website for helping users learn programming languages through online lessons, built-in code editor for practice, and AI feedback.",
    image: "/projects/codegrow.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "React", "JavaScript"],
    url: "https://project-pj05-codegrow.vercel.app/",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Chromatic Tunor",
    description:
      "An Embedded System project on a FPGA board in C that implements a chromatic tuner, which detects the frequency of the sound with FFT and displays the closest note.",
    image: "/projects/chromatic-tuner.png",
    tags: ["C", "Embedded Systems"],
    url: "#",
    githubUrl: "https://github.com/30912hyl/chromatic_tumor",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Features <span className="text-primary">Projects</span>
        </h2>

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
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
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

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/jia-hua-ren"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
