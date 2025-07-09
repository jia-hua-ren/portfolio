

export const projects: {
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
    image: "/portfolio/projects/codegrow.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "React", "JavaScript"],
    url: "https://project-pj05-codegrow.vercel.app/",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Chromatic Tunor",
    description:
      "An Embedded System project on a FPGA board in C that implements a chromatic tuner, which detects the frequency of the sound with FFT and displays the closest note.",
    image: "",
    tags: ["C", "Embedded Systems"],
    url: "#",
    githubUrl: "https://github.com/30912hyl/chromatic_tumor",
  },
  {
    id: 4,
    title: "MerkleDB optimized blockchain storage database",
    description:
      "A project that is built upon AvalanchGo's interface which utilizes the merkle tree's own structure to store on disk directly, bypassing the need for an often inefficient key-value store.",
    image: "",
    tags: ["Go", "Database"],
    url: "#",
    githubUrl: "https://github.com/jlang61/avalution",
  },
];
