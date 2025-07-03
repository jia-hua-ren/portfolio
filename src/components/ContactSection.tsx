import { Linkedin, Mail, MapPin } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Let's talk!
        </p>

        <div className="space-y-6 flex flex-col items-center">
          <div className="flex items-center space-x-4 w-80 justify-start">
            <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <div className="text-left">
              <h4 className="font-medium"> Email </h4>
              <a
                href="mailto:jiahuaren135@gmail.com"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                jiahuaren135@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4 w-80 justify-start">
            <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <div className="text-left">
              <h4 className="font-medium"> Location </h4>
              <a className="text-muted-foreground hover:text-primary transition-colors">
                Alhambra, CA
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4 w-80 justify-start">
            <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
              <Linkedin className="h-6 w-6 text-primary" />
            </div>
            <div className="text-left">
              <h4 className="font-medium"> LinkedIn </h4>
              <a
                href="https://www.linkedin.com/in/jiahua-ren"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                jiahua-ren
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
