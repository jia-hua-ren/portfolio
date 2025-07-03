import { Code, User, Briefcase } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Passionate CS student</h3>

            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              facilisis quam vitae placerat tempus. Vestibulum in ligula
              suscipit, facilisis urna nec, viverra nulla. Donec consequat, nisl
              non semper suscipit, sapien nunc fermentum nisl, at placerat ante
              purus ut orci. Sed eu mauris laoreet
            </p>

            <p className="text-muted-foreground">
              maximus justo id, tincidunt elit. Vestibulum efficitur est sed mi
              venenatis, vel viverra ex venenatis. Maecenas facilisis massa ut
              nisl condimentum blandit. Pellentesque at erat velit. Donec sed
              lorem rutrum, tempus libero id, dapibus mi. Duis porttitor turpis
              sed feugiat consectetur. Maecenas volutpat ligula vitae egestas
              tempus. Sed interdum et lectus ut convallis.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="#cv"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors durantion-300"
              >
                {" "}
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary-10">
                  <Code className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="text-lg font-semibold">Web Development</h4>
                  <p className="text-muted-foreground">
                    alsjdalsdna saljdsa asd nasld as as nksa lkasd
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary-10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">Web Development</h4>
                  <p className="text-muted-foreground">
                    alsjdalsdna saljdsa asd nasld as as nksa lkasd
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary-10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">Web Development</h4>
                  <p className="text-muted-foreground">
                    alsjdalsdna saljdsa asd nasld as as nksa lkasd
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
