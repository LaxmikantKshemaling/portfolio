import { Button } from "@/components/Button";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Instagram,
  ChevronDown,
} from "lucide-react";
import { useEffect, useState } from "react";
import profilePhoto from "@/assets/Laxmikant.png";

const AnimatedBorderButton = () => {
  return (
    <a href="/Laxmikant_K.pdf" download>
      <button
        className="
        relative
        px-8 py-4
        rounded-full
        border
        border-primary/40
        text-white
        hover:bg-primary/10
        transition-all
        duration-500
        overflow-hidden
        "
      >
        <span className="flex items-center gap-2 relative z-10">
          <Download size={20} />
          Download CV
        </span>
      </button>
    </a>
  );
};

export const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  const roles = [
"Java Full Stack Developer",
"Spring Boot Developer",
"Frontend Developer",
];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center">

      {/* Background Glow */}
      <div className="absolute top-20 right-20 w-[450px] h-[450px] bg-purple-500/20 rounded-full blur-[140px]" />

      <div className="absolute bottom-20 left-10 w-[350px] h-[350px] bg-blue-500/20 rounded-full blur-[140px]" />

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SECTION */}
          <div>

            <div
              className="
              inline-flex
              items-center
              gap-2
              glass
              px-5
              py-3
              rounded-full
              text-primary
              mb-8
              "
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />

              {roles[roleIndex]}
            </div>

            <h1
              className="
              text-6xl
              md:text-7xl
              lg:text-8xl
              font-black
              leading-none
              "
            >
              Laxmikant
              
            </h1>

            <h2
              className="
              mt-6
              text-xl
              md:text-2xl
              text-gray-400
              "
            >
              Building modern web applications with
              Spring Boot, React JS and MySQL.
            </h2>

            <p
              className="
              mt-6
              text-muted-foreground
              max-w-xl
              leading-relaxed
              "
            >
              Passionate Java  Developer focused on
              creating scalable backend systems, responsive
              frontend applications and enterprise-grade
              solutions using modern technologies.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 mt-10">

              <a href="#projects">
                <Button size="lg">
                  View Projects
                  <ArrowRight size={20} />
                </Button>
              </a>

              <AnimatedBorderButton />

            </div>

            {/* SOCIAL LINKS */}
            <div className="flex items-center gap-6 mt-10">

              <a
                href="https://github.com/LaxmikantKshemaling"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary hover:scale-110 transition-all"
              >
                <Github size={24} />
              </a>

              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary hover:scale-110 transition-all"
              >
                <Linkedin size={24} />
              </a>

              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary hover:scale-110 transition-all"
              >
                <Instagram size={24} />
              </a>

            </div>

          </div>

          {/* RIGHT SECTION */}
          <div className="relative flex justify-center">

            <div
              className="
              absolute
              inset-0
              bg-primary/20
              blur-[120px]
              rounded-full
              "
            />

            <div
              className="
              relative
              glass
              rounded-full
              p-3
              glow-border
              "
            >
              <img
                src={profilePhoto}
                alt="Laxmikant Aloji"
                className="
                w-[350px]
                md:w-[450px]
                aspect-square
                object-cover
                rounded-full
                "
              />
            </div>

          </div>

        </div>

      </div>

      {/* SCROLL ICON */}
      <div
        className="
        absolute
        bottom-8
        left-1/2
        -translate-x-1/2
        "
      >
        <ChevronDown
          className="
          w-8
          h-8
          animate-bounce
          text-primary
          "
        />
      </div>

    </section>
  );
};

export default Hero;