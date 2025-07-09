import { Github, ExternalLink, Calendar } from "lucide-react";

type Project = {
  id: number;
  title: string;
  level: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  year: string;
  category: "OS" | "Database" | "Games" | "Full Stack";
};

const projects: Project[] = [
  {
    id: 1,
    title: "KOS - Kernel Operating System",
    level: "Low Level - Operating Systems",
    description:
      "Implemented a complete kernel for a simulated MIPS machine including process management, memory management, pipes, system calls, and interrupt handling. Built from scratch in C with focus on performance and reliability.",
    technologies: ["C", "Assembly", "MIPS", "Operating Systems"],
    githubUrl: "#",
    year: "2024",
    category: "OS",
  },
  {
    id: 2,
    title: "Custom Database Engine",
    level: "System Level - Database Implementation",
    description:
      "Built a relational database engine from the ground up with B+ tree indexing, transaction management, and query optimization. Implemented ACID properties and concurrent access control.",
    technologies: ["C++", "B+ Trees", "SQL Parser", "Transaction Management"],
    githubUrl: "#",
    year: "2024",
    category: "Database",
  },
  {
    id: 3,
    title: "Analytics Dashboard with SQL",
    level: "Application Level - Data Analysis",
    description:
      "Designed and implemented a comprehensive analytics platform with complex SQL queries, data visualization, and real-time reporting. Optimized query performance for large datasets.",
    technologies: ["SQL", "PostgreSQL", "Python", "Data Visualization"],
    githubUrl: "#",
    year: "2023",
    category: "Database",
  },
  {
    id: 4,
    title: "Python Game Collection",
    level: "Application Level - Game Development",
    description:
      "Developed multiple interactive games including Tetris, Snake, and a 2D platformer. Implemented game physics, collision detection, and AI opponents with clean object-oriented design.",
    technologies: [
      "Python",
      "Pygame",
      "Object-Oriented Design",
      "Game Physics",
    ],
    githubUrl: "#",
    year: "2023",
    category: "Games",
  },
  {
    id: 5,
    title: "Code&Grow Learning Platform",
    level: "High Level - Full Stack Development",
    description:
      "Built a comprehensive programming education platform with interactive code editor, AI-powered feedback, user authentication, and progress tracking. Deployed to production with thousands of users.",
    technologies: ["Next.js", "TypeScript", "React", "Node.js", "PostgreSQL"],
    githubUrl: "#",
    liveUrl: "https://project-pj05-codegrow.vercel.app/",
    year: "2024",
    category: "Full Stack",
  },
];

export const Projects = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            My <span className="text-primary">Journey</span>
          </h1>
          <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
            From low-level systems programming to full-stack development -
            explore my progression through different layers of computer science
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary/30 h-full"></div>

            {projects.map((project, index) => (
              <div key={project.id} className="relative mb-16">
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>

                {/* Project card - alternating sides */}
                <div
                  className={`flex items-center ${
                    index % 2 === 0 ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`w-5/12 ${
                      index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                    }`}
                  >
                    <div className="bg-card rounded-lg p-6 shadow-lg border border-border hover:shadow-xl transition-shadow duration-300">
                      {/* Year badge */}
                      <div
                        className={`flex items-center gap-2 text-sm text-primary mb-2 ${
                          index % 2 === 0 ? "justify-end" : "justify-start"
                        }`}
                      >
                        <Calendar size={16} />
                        <span>{project.year}</span>
                      </div>

                      {/* Project title */}
                      <h3 className="text-xl font-bold mb-2">
                        {project.title}
                      </h3>

                      {/* Level indicator */}
                      <p className="text-primary font-medium text-sm mb-3">
                        {project.level}
                      </p>

                      {/* Description */}
                      <p className="text-foreground/80 mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div
                        className={`flex flex-wrap gap-2 mb-4 ${
                          index % 2 === 0 ? "justify-end" : "justify-start"
                        }`}
                      >
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div
                        className={`flex gap-3 ${
                          index % 2 === 0 ? "justify-end" : "justify-start"
                        }`}
                      >
                        {project.githubUrl && project.githubUrl !== "#" && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors"
                          >
                            <Github size={16} />
                            <span className="text-sm">Code</span>
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors"
                          >
                            <ExternalLink size={16} />
                            <span className="text-sm">Live Demo</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back to home */}
      <section className="py-12 px-4 text-center">
        <a href="/" className="cosmic-button inline-flex items-center gap-2">
          ← Back to Home
        </a>
      </section>
    </div>
  );
};
