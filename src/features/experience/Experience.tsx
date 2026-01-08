import Reveal from "../../utils/Reveal";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string[];
  skills: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "Risevest Academy",
    role: "Frontend Engineering Program",
    period: "2023 – 2024",
    description: [
      "Completed an intensive, project-based frontend engineering program focused on building production-ready web applications.",
      "Worked extensively with modern frontend frameworks and tooling, applying best practices in component architecture, state management, and API integration.",
      "Collaborated in Git-based workflows involving pull requests, code reviews, and issue tracking to simulate real-world engineering teams.",
      "Gained exposure to performance considerations, frontend security fundamentals, and maintainable code practices.",
    ],
    skills: [
      "JavaScript (ES6+)",
      "TypeScript",
      "React",
      "HTML5 & CSS3",
      "REST APIs",
      "Git & GitHub",
      "Frontend architecture",
      "Basic testing practices",
    ],
  },
  {
    company: "Tech Studio",
    role: "Software Development Training",
    period: "2022 – 2023",
    location: "Lagos, Nigeria",
    description: [
      "Built foundational experience in web development through hands-on projects and guided training.",
      "Developed frontend interfaces and basic backend integrations while strengthening problem-solving and debugging skills.",
      "Worked with JavaScript-based stacks to understand end-to-end application flow.",
    ],
    skills: [
      "JavaScript",
      "HTML & CSS",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="Exp"
      className="bg-slate-950 py-20 sm:py-24 lg:py-32 px-5 sm:px-10 lg:px-20"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10"></div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-44 h-44 sm:w-96 sm:h-96 bg-emerald-500/10 rounded-full blur-[120px] animate-pulse"></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-[120px] animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-6 mb-14">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white whitespace-nowrap font-archivo">
            Experience<span className="text-accent">.</span>
          </h2>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        <div className="space-y-16">
          {experiences.map((exp) => (
            <div key={exp.company} className="space-y-6">
              {/* Header */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-semibold text-white">
                    {exp.role}
                  </h3>
                  <p className="text-white/60">
                    {exp.company}
                    {exp.location && ` · ${exp.location}`}
                  </p>
                </div>
                <p className="text-white/50">{exp.period}</p>
              </div>

              {/* Description */}
              <Reveal>
                <ul className="list-disc list-inside space-y-3 text-slate-300 leading-relaxed">
                  {exp.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </Reveal>

              {/* Skills */}
              <Reveal>
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      //   className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/70 hover:border-accent hover:text-accent transition-colors"
                      className="px-4 py-2 text-sm sm:text-base bg-slate-800 text-white rounded-full border border-slate-700 hover:border-accent hover:text-accent hover:bg-slate-800/80 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
