import { ArrowUp, Github } from "lucide-react";

export const Footer = () => {
  const currentYear: number = new Date().getFullYear();
  return (
    <footer className="py-8 px-4 bg-card relative border-t border-border mt-12 pt-8 flex justify-between items-start">
      <div className="flex flex-col space-y-1">
        <p className="text-sm text-muted-foreground ">
          &copy; {currentYear} Jiahua Ren
        </p>
        <p className="text-sm text-muted-foreground flex items-center pl-12">
          Github repo of this site:{" "}
          <a
            href="https://github.com/jia-hua-ren/portfolio"
            target="_blank"
            className="ml-1 hover:text-primary transition-colors"
          >
            <Github size={16} />
          </a>
        </p>
      </div>

      <a
        href="#me"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
