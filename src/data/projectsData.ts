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
    id: 0,
    title: "Student Information System",
    description:
      "Designed and implemented relational database schemas with various integrity constraints for a fictional college's student and course information, which can be accessed through a Java CLI",
    image: "/portfolio/projects/studentInfoSystem.png",
    tags: ["SQL", "Java", "Oracle JDBC", "Database"],
    url: "#",
    githubUrl: "https://github.com/jia-hua-ren/dbproj174a",
  },
  {
    id: 1,
    title: "Code&Grow",
    description:
      "A website for helping users learn programming languages through online lessons, built-in code editor for practice, and AI feedback. Created with a team of 6 practicing Agile development.",
    image: "/portfolio/projects/codegrow.png",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "React",
      "JavaScript",
      "Agile",
    ],
    url: "https://project-pj05-codegrow.vercel.app/",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "MerkleDB optimized blockchain storage database",
    description:
      "A capstone project with 5 people, mentored by Aaron Buchwald from AvaLabs. A database system that is built upon AvalanchGo's interface, which utilizes the merkle tree's own structure to store on disk directly, bypassing the need for an often inefficient key-value store.",
    image: "/portfolio/projects/avalution.png",
    tags: ["Go", "Database"],
    url: "https://capstone.cs.ucsb.edu/teams.html#team10",
    githubUrl: "https://github.com/jlang61/avalution",
  },
  {
    id: 3,
    title: "Portfolio (this website!)",
    description:
      "This portfolio website, built with React, TypeScript, and Tailwind CSS, showcases my projects and skills. Followed a tutorial by PedroTech, and adapted it to my own style and content.",
    image: "/portfolio/projects/portfolio.png",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    url: "#",
    githubUrl: "https://github.com/jia-hua-ren/portfolio",
  },
  {
    id: 4,
    title: "UCSB CS156 Legacy Code Project",
    description:
      "A project for CS156 at UCSB, where I worked with a team in an Agile environment to improve and add new features to a legacy codebase. Practiced creating useful PR descriptions and code reviews for other PRs. I focused on mutation testing and improving the test coverage of code.",
    image: "",
    tags: ["Java", "JUnit", "Spring Boot", "Mutation Testing", "Agile"],
    url: "https://courses.dokku-02.cs.ucsb.edu/",
    githubUrl: "https://github.com/ucsb-cs156-s25/proj-courses-s25-02/pull/27",
  },
  {
    id: 5,
    title: "Chinkara goat paradise (PyWeek 35 Game Jam)",
    description:
      "A game made with a team of 3 for PyWeek 35 Game Jam. We utilized the pygames library and created the game in seven days. I worked on the game mechanics, player and enemy logic.",
    image: "/portfolio/projects/chinkara.png",
    tags: ["Python", "Pygame", "Game Development"],
    url: "https://pyweek.org/e/chinkaraoshiman/",
    githubUrl: "https://github.com/jia-hua-ren/pyweek-35-chinkaraoshiman",
  },
  {
    id: 5,
    title: "KOS",
    description:
      "Lab Project for CS170 at UCSB, implementing the kernle for an operating system for a simulated MIPS machine, which includes process management, memory management, pipes, basic system calls, etc.",
    image: "",
    tags: ["C"],
    url: "https://sites.cs.ucsb.edu/~rich/class/cs170/labs.html",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Chromatic Tunor",
    description:
      "An Embedded System project on a FPGA board in C that implements a chromatic tuner, which detects the frequency of the sound with FFT and displays the closest note.",
    image: "",
    tags: ["C", "Embedded Systems"],
    url: "#",
    githubUrl: "https://github.com/30912hyl/chromatic_tumor",
  },
];

export const featuredProjects: Project[] = projects.slice(0, 3);
