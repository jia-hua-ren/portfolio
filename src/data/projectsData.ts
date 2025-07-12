export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  url: string;
  githubUrl: string;
};

export const projects: Project[] = [
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
    title: "Chromatic Tunor",
    description:
      "An Embedded System project on a FPGA board in C that implements a chromatic tuner, which detects the frequency of the sound with FFT and displays the closest note.",
    image: "",
    tags: ["C", "Embedded Systems"],
    url: "#",
    githubUrl: "https://github.com/30912hyl/chromatic_tumor",
  },
  {
    id: 3,
    title: "Student Information System",
    description:
      "Designed and implemented relational database schemas with various integrity constraints for a fictional college's student and course information",
    image: "/portfolio/projects/studentInfoSystem.png",
    tags: ["SQL", "Java", "Oracle JDBC", "Database"],
    url: "#",
    githubUrl: "https://github.com/jia-hua-ren/dbproj174a",
  },
  {
    id: 3,
    title: "Code&Grow",
    description:
      "A website for helping users learn programming languages through online lessons, built-in code editor for practice, and AI feedback.",
    image: "/portfolio/projects/codegrow.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "React", "JavaScript"],
    url: "https://project-pj05-codegrow.vercel.app/",
    githubUrl: "#",
  },

  {
    id: 4,
    title: "MerkleDB optimized blockchain storage database",
    description:
      "Mentored by Aaron Buchwald from AvaLabs, a project that is built upon AvalanchGo's interface which utilizes the merkle tree's own structure to store on disk directly, bypassing the need for an often inefficient key-value store.",
    image: "/portfolio/projects/avalution.png",
    tags: ["Go", "Database"],
    url: "https://capstone.cs.ucsb.edu/teams.html#team10",
    githubUrl: "https://github.com/jlang61/avalution",
  },
];

export const featuredProjects: Project[] = projects.slice(2);
