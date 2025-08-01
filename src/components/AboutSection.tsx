import { GraduationCap, User, Train } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {/* <h3 className="text-2xl font-semibold">Passionate CS student</h3> */}

            <p className="text-muted-foreground">
              I'm a passionate Computer Science student with a curiosity that
              has led me to explore a wide spectrum of the field -- from the
              intricacies of low-level operating systems, the creativity of game
              development, and the practicality of full-stack web applications.
              During my time in college, I've dabbled in building a custom
              database system in Go, designed responsive web apps, and worked on
              system-level projects that deepened my understanding of how
              computers really work, and at the same time showed me just how
              broad the field of computer science truly is.
            </p>

            <p className="text-muted-foreground">
              I'm always eager to learn and grow, and I'm excited to see where
              my journey in computer science will take me next. Whether it's
              diving deeper into a specific area or exploring new technologies,
              I'm ready for the challenge.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <button
                className="cosmic-button"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                {" "}
                Get In Touch
              </button>

              {/* <a
                href="#cv"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors durantion-300"
              >
                {" "}
                Download CV
              </a> */}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary-10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="text-lg font-semibold">Education</h4>
                  <p className="text-muted-foreground">
                    University of California, Santa Barbara
                  </p>
                  <p className="text-muted-foreground">Graduated June 2025</p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary-10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">Adaptability</h4>
                  <p className="text-muted-foreground">
                    I thrive in dynamic environments and pick up new tools or
                    concepts quickly.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary-10">
                  <Train className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">Hobbies</h4>
                  <p className="text-muted-foreground">
                    I love to travel and explore new places, especially on
                    trains.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
