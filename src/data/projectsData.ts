export type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  url: string;
  githubUrl: string;
};

export const projects: Project[] = [
  {
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
    title: "MerkleDB optimized blockchain storage database",
    description:
      "A capstone project with 5 people, mentored by Aaron Buchwald from AvaLabs. A database system that is built upon AvalanchGo's interface, which utilizes the merkle tree's own structure to store on disk directly, bypassing the need for an often inefficient key-value store.",
    image: "/portfolio/projects/avalution.png",
    tags: ["Go", "File Systems", "Database", "Blockchain"],
    url: "https://capstone.cs.ucsb.edu/teams.html#team10",
    githubUrl: "https://github.com/jlang61/avalution",
  },
  {
    title: "Gamefied To-Do List",
    description:
      "Built with a Next.js frontend and a Spring Boot backend, deployed on Render.com with a Docker container. Utilizes a Postgres SQL database to store user data. This webapp aims to make finishing tasks fun by awarding exp points to users.",
    image: "/portfolio/projects/todo.png",
    tags: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Next.js",
      "Spring Boot",
      "Java",
      "PostgreSQL",
      "Docker",
    ],
    url: "https://todoleveling.onrender.com/",
    githubUrl: "https://github.com/jia-hua-ren/todoleveling",
  },
  {
    title: "Student Information System",
    description:
      "Designed and implemented relational database schemas with various integrity constraints for a fictional college's student and course information, which can be accessed through a Java CLI",
    image: "/portfolio/projects/studentInfoSystem.png",
    tags: ["SQL", "Java", "Oracle JDBC", "Database"],
    url: "#",
    githubUrl: "https://github.com/jia-hua-ren/dbproj174a",
  },
  {
    title: "Portfolio (this website!)",
    description:
      "This portfolio website, built with React, TypeScript, and Tailwind CSS, showcases my projects and skills. Followed a tutorial by PedroTech, and adapted it to my own style and content.",
    image: "/portfolio/projects/portfolio.png",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    url: "#",
    githubUrl: "https://github.com/jia-hua-ren/portfolio",
  },
  {
    title: "Research on a database of Functionally Equivalent C code pairs",
    description:
      "Research project for my studying aborad period at Osaka University, I worked under Prof. Yoshiki Higo to research on a databse of functionally equivalent C code pairs, which can be used to train code clone detection models. Utilized Python, bash, Docker, and various tools and libraries to process C and C++ code and test pairs for functional equivalence. More details in the repo.",
    image: "/portfolio/projects/research.png",
    tags: ["C", "C++", "Python", "Docker", "bash"],
    url: "#",
    githubUrl: "https://github.com/jia-hua-ren/2024SpringSummerResearch",
  },
  {
    title: "Chinkara goat paradise (PyWeek 35 Game Jam)",
    description:
      "A game made with a team of 3 for PyWeek 35 Game Jam. We utilized the pygames library and created the game in seven days. I worked on the game mechanics, player and enemy logic.",
    image: "/portfolio/projects/chinkara.png",
    tags: ["Python", "Game Development"],
    url: "https://pyweek.org/e/chinkaraoshiman/",
    githubUrl: "https://github.com/jia-hua-ren/pyweek-35-chinkaraoshiman",
  },
  {
    title: "Chromatic Tuner",
    description:
      "An Embedded System project on a FPGA board in C that implements a chromatic tuner, which detects the frequency of the sound with FFT and displays the closest note.",
    image: "",
    tags: ["C", "Embedded Systems"],
    url: "#",
    githubUrl: "https://github.com/30912hyl/chromatic_tumor",
  },
];

export const featuredProjects: Project[] = projects.slice(0, 3);
