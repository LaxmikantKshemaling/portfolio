import { Code2, Rocket, Users, Lightbulb } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing clear, structured, and maintainable code.",
  },
  {
    icon: Rocket,
    title: "Problem Solving",
    description:
      "Building practical solutions for real business needs.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Working effectively with teams and stakeholders.",
  },
  {
    icon: Lightbulb,
    title: "Growth Mindset",
    description:
      "Continuously learning and improving skills.",
  },
];

export const About = () => {
  return (
    <section
      id="about"
      className="py-32 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="mb-16">

          <span
            className="
            inline-flex
            items-center
            gap-2
            text-primary
            text-sm
            font-medium
            tracking-wider
            uppercase
            glass
            px-4
            py-2
            rounded-full
            "
          >
            About Me
          </span>

          <h2
            className="
            text-4xl
            md:text-5xl
            lg:text-6xl
            font-black
            mt-6
            leading-tight
            "
          >
            Building reliable software
            <span className="block text-primary">
              step by step.
            </span>
          </h2>

        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left Side */}
          <div
            className="
            glass
            rounded-3xl
            p-8
            border
            border-white/10
            glow-border
            "
          >
            <div className="space-y-6 text-muted-foreground">

              <p className="text-lg leading-relaxed">
                I’m <strong className="text-white">Laxmikant</strong>,
                a Software Engineer working as a Java  Developer.
              </p>

              <p className="leading-relaxed">
                I focus on building simple, functional,
                and user-friendly web applications by
                working on both backend and frontend.
              </p>

              <p className="leading-relaxed">
                I believe in writing clean code,
                learning continuously, and improving
                through real hands-on work.
              </p>

              <div
                className="
                mt-8
                p-6
                rounded-2xl
                bg-primary/5
                border
                border-primary/20
                "
              >
                <p
                  className="
                  text-lg
                  italic
                  text-white
                  "
                >
                  “I prefer simple solutions that work
                  well and grow with experience.”
                </p>
              </div>

            </div>
          </div>

          {/* Right Side Cards */}
          <div className="grid sm:grid-cols-2 gap-6">

            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="
                glass
                rounded-3xl
                p-8
                border
                border-white/10
                hover:border-primary/30
                hover:-translate-y-2
                transition-all
                duration-500
                "
              >
                <div
                  className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-primary/10
                  border
                  border-primary/20
                  flex
                  items-center
                  justify-center
                  mb-5
                  "
                >
                  <item.icon
                    className="
                    w-7
                    h-7
                    text-primary
                    "
                  />
                </div>

                <h3
                  className="
                  text-xl
                  font-bold
                  mb-3
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                  text-sm
                  leading-relaxed
                  text-muted-foreground
                  "
                >
                  {item.description}
                </p>
              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
};