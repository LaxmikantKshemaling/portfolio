import React from "react";

const experiences = [
  {
    period: "2025 - Present (1 Year)",
    role: "Java Full Stack Developer",
    company: "Pravarthana Technologies Pvt. Ltd.",
    description:
      "Working as a Java Full Stack Developer. Worked on Banking Application UI enhancement projects where existing screens were redesigned, updated, and improved using Bootstrap, HTML, CSS, and JavaScript to provide a better user experience and responsive design. Also developed and maintained the HR & Employee Management Portal using Java, Spring Boot, REST APIs, JPA, React.js, HTML, CSS, and MySQL.",
    technologies: [
      "Java",
      "Spring Boot",
      "REST API",
      "JPA",
      "React.js",
      "Bootstrap",
      "HTML",
      "CSS",
      "JavaScript",
      "MySQL",
    ],
    current: true,
  },
  {
    period: "Oct 2023 - May 2024",
    role: "Java Full Stack Developer Trainee",
    company: "Tap Academy",
    description:
      "Successfully completed Java Full Stack Development Training and Certification. Learned Java, JDBC, Servlet, JSP, Hibernate, Spring Framework, Spring MVC, HTML, CSS, JavaScript, and MySQL. Built TapFoods (Swiggy Clone) and Amazon Clone during the training program.",
    technologies: [
      "Java",
      "JDBC",
      "Servlet",
      "JSP",
      "Hibernate",
      "Spring Framework",
      "Spring MVC",
      "HTML",
      "CSS",
      "JavaScript",
      "MySQL",
    ],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Career Journey
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Experience that{" "}
            <span className="font-serif italic font-normal text-white">
              reflects real work.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A simple overview of my learning journey, professional experience,
            and hands-on project work.
          </p>
        </div>

        <div className="relative">
          <div
            className="
              timeline-glow
              absolute
              left-0
              md:left-1/2
              top-0
              bottom-0
              w-[2px]
              bg-gradient-to-b
              from-primary/70
              via-primary/30
              to-transparent
              md:-translate-x-1/2
              z-0
            "
          />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in z-10"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                <div
                  className="
                    absolute
                    left-0
                    md:left-1/2
                    top-4
                    w-3
                    h-3
                    bg-primary
                    rounded-full
                    -translate-x-1/2
                    ring-4
                    ring-background
                    z-20
                  "
                >
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500">
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>

                    <h3 className="text-xl font-semibold mt-2">
                      {exp.role}
                    </h3>

                    <p className="text-muted-foreground">
                      {exp.company}
                    </p>

                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>

                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;