import {
Database,
Globe,
Server,
Code2,
FileCode,
} from "lucide-react";

const skills = [
  {
    name: "Core Java",
    percentage: 80,
    icon: Code2,
  },
  {
    name: "Spring Boot",
    percentage: 70,
    icon: Server,
  },
  {
    name: "Spring Framework",
    percentage: 65,
    icon: Server,
  },
  {
    name: "Hibernate",
    percentage: 60,
    icon: Database,
  },
  {
    name: "React JS",
    percentage: 65,
    icon: Globe,
  },
  {
    name: "JavaScript",
    percentage: 50,
    icon: FileCode,
  },
  {
    name: "HTML",
    percentage: 60,
    icon: Globe,
  },
  {
    name: "CSS",
    percentage: 50,
    icon: Globe,
  },
  {
    name: "MySQL",
    percentage: 50,
    icon: Database,
  },
];

export const Skills = () => {
return ( <section
   id="skills"
   className="py-32 relative overflow-hidden"
 > <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />

```
  <div className="container mx-auto px-6 relative z-10">

    <div className="text-center max-w-3xl mx-auto mb-16">
      <span className="text-primary text-sm font-semibold tracking-widest uppercase">
        Technical Skills
      </span>

      <h2 className="text-4xl md:text-5xl font-black mt-4">
        My Skills &
        <span className="text-primary"> Expertise</span>
      </h2>

      <p className="text-muted-foreground mt-4">
        Technologies and frameworks I use for building
        modern web applications.
      </p>
    </div>

    <div className="glass rounded-[32px] p-8 md:p-12 max-w-5xl mx-auto border border-white/10">

      <div className="space-y-8">

        {skills.map((skill, idx) => (
          <div key={idx}>

            <div className="flex items-center justify-between mb-3">

              <div className="flex items-center gap-3">
                <skill.icon className="w-5 h-5 text-primary" />

                <span className="font-semibold text-white">
                  {skill.name}
                </span>
              </div>

              <span className="text-primary font-bold">
                {skill.percentage}%
              </span>

            </div>

            <div className="w-full h-3 rounded-full bg-slate-800 overflow-hidden">

              <div
                className="
                h-full
                rounded-full
                bg-gradient-to-r
                from-purple-500
                via-violet-500
                to-blue-500
                shadow-[0_0_20px_rgba(139,92,246,0.5)]
                transition-all
                duration-1000
                "
                style={{
                  width: `${skill.percentage}%`,
                }}
              />

            </div>

          </div>
        ))}

      </div>

    </div>

  </div>
</section>

);
};
