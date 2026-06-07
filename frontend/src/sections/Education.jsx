import { useState } from "react";
import { GraduationCap, ChevronLeft, ChevronRight } from "lucide-react";

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institute: "Sharnbasva University, Kalaburagi",
    year: "2023 – Passed",
    description:
      "Postgraduate program focused on advanced software development, Java full stack technologies, databases, web applications, and real-world project implementation.",
  },
  {
    degree: "Bachelor of Science (B.Sc) – Computer Science",
    institute: "Sai Presidency College, Gulbarga",
    year: "2020 – Completed",
    description:
      "Completed undergraduate studies with a strong foundation in Computer Science, covering programming concepts, data structures, databases, and computer fundamentals.",
  },
  {
    degree: "Pre-University Course (PUC)",
    institute: "Dr. R. M. Lohia Independent PU College",
    year: "2017 – Passed",
    description:
      "Completed pre-university education with emphasis on analytical thinking, mathematics, and core academic fundamentals required for higher studies in computer science.",
  },
  {
    degree: "Secondary School (SSLC)",
    institute: "HKE Society High School",
    year: "2013 – Passed",
    description:
      "Completed secondary education, building a strong academic base and discipline that shaped further educational and professional growth.",
  },
];

export const Education = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % education.length);
  };

  const previous = () => {
    setActiveIdx((prev) => (prev - 1 + education.length) % education.length);
  };

  return (
    <section id="education" className="py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
        <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
          Academic Background
        </span>

        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
          Education &{" "}
          <span className="font-serif italic font-normal text-white">
            Qualifications
          </span>
        </h2>
      </div>

      {/* Education Card */}
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in">
          <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
            <GraduationCap className="w-6 h-6 text-primary-foreground" />
          </div>

          <h3 className="text-2xl md:text-3xl font-semibold mb-2 pt-4">
            {education[activeIdx].degree}
          </h3>

          <p className="text-primary font-medium">
            {education[activeIdx].institute}
          </p>

          <p className="text-sm text-muted-foreground mb-6">
            {education[activeIdx].year}
          </p>

          <p className="text-lg leading-relaxed">
            {education[activeIdx].description}
          </p>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={previous}
            className="p-3 rounded-full glass hover:bg-primary/10 transition-all"
          >
            <ChevronLeft />
          </button>

          <div className="flex gap-2">
            {education.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIdx(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === activeIdx
                    ? "w-8 bg-primary"
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="p-3 rounded-full glass hover:bg-primary/10 transition-all"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};
