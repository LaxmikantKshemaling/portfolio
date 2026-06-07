import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "Pravarthana Portal (HR & Employee Management System)",
    description:
      "A complete HR and Employee Management System where HR/Admin can manage employees, attendance, payroll, leave requests, and organizational workflows while employees can access personal dashboards and company resources.",
    image: "/pravarthana.png",
    tags: ["Java", "Spring Boot", "React.js", "MySQL"],
    link: "#",
    github:
      "https://github.com/LaxmikantKshemaling/employee-hr-management-system",
  },

  {
    title: "Coffee Shop (BuyFour)",
    description:
      "A modern coffee shop and food ordering application featuring menu browsing, category filtering, cart management, secure authentication, and order processing with a responsive user interface.",
    image: "/coffeeshap.png",
    tags: ["Java", "Spring Boot", "React.js", "MySQL"],
    link: "#",
    github: "https://github.com/LaxmikantKshemaling/buyfour",
  },

  {
  title: "CoCoBizz - Inventory Management System",
  description:
    "A complete Inventory Management System built using Spring Boot, React.js, and MySQL. It provides product management, warehouse management, inventory tracking, purchase management, shipment tracking, order management, user administration, and real-time business analytics through an interactive dashboard.",
  image: "/cocobuzz.png",
  tags: ["Java", "Spring Boot", "React.js", "MySQL"],
  link: "#",
  github: "https://github.com/LaxmikantKshemaling/cocobizz"
},

  {
    title: "TapFoods (Swiggy Clone)",
    description:
      "A food delivery web application built using Java Full Stack technologies with menu, cart, checkout, and order management features.",
    image: "/tapfoods.png",
    tags: ["HTML", "CSS", "JSP", "Core Java", "Servlet", "JDBC", "MySQL"],
    link: "#",
    github: "https://github.com/LaxmikantKshemaling/TapFoods",
  },

  {
    title: "Amazon Clone",
    description:
      "An e-commerce clone application developed to understand product listing, shopping cart flow, user management, and backend integration.",
    image: "/amazon-clone.png",
    tags: ["HTML", "CSS", "JSP", "Core Java", "Servlet", "JDBC", "MySQL"],
    link: "#",
    github: "https://github.com/LaxmikantKshemaling/Amozen-clone",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that{" "}
            <span className="font-serif italic font-normal text-white">
              make an impact.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of real-world projects built during professional work
            and hands-on full-stack development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />

                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>

                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:translate-y-1 transition-all" />
                </div>

                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
