import React from "react";

interface Skill {
  name: string;
}

const About: React.FC = () => {
  const workSkills: Skill[] = [
    { name: "JavaScript (ES6+)" },
    { name: "TypeScript" },
    { name: "React" },
    { name: "HTML5" },
    { name: "CSS3" },
    { name: "Tailwind CSS" },
    { name: "REST APIs" },
    { name: "Git & GitHub" },
    { name: "Basic unit testing" },
  ];

  const exploringSkills: Skill[] = [
    { name: "Framer Motion" },
    { name: "Sass" },
    { name: "GraphQL" },
  ];
  return (
    <section
      id="About"
      className="relative py-20 sm:py-24 lg:py-32 px-5 sm:px-10 lg:px-20 bg-background"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 sm:gap-6 mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white whitespace-nowrap">
            About<span className="text-emerald-400">.</span>
          </h2>
          <div className="flex-1 h-[2px] bg-gradient-to-r from-slate-600 to-transparent opacity-30"></div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-10 lg:gap-16">
          {/* About Text */}
          <div className="lg:col-span-2 space-y-6 text-slate-300 text-lg sm:text-xl leading-relaxed font-light tracking-wide">
            <p>
              <span className="float-left text-5xl sm:text-6xl font-bold text-white bg-slate-800 p-4 flex items-center justify-center mr-4 mb-2">
                I'm
              </span>
              a frontend engineer with a background in finance, bringing a
              strong analytical mindset to building clean, user-focused web
              interfaces. I enjoy working at the intersection of design and
              engineering, where clarity and performance matter.
            </p>

            <p>
              My experience includes building responsive web applications using
              React, TypeScript, and modern tooling like Tailwind CSS. I follow
              sound engineering practices such as component-driven development,
              basic unit testing, and maintainable architecture to ensure
              reliability as projects grow.
            </p>

            <p>
              Outside of day-to-day development, I explore new frontend
              patterns, refine existing projects, and collaborate with others to
              turn ideas into practical, well-crafted products.
            </p>
          </div>

          {/* Skills Section */}
          <div className="space-y-8 lg:space-y-10">
            {/* Work Skills */}
            <div className="group">
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-6 flex items-center gap-3">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                Use at Work
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {workSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 text-sm sm:text-base bg-slate-800 text-white rounded-full border border-slate-700 hover:border-emerald-400 hover:text-emerald-400 hover:bg-slate-800/80 transition-all duration-300 cursor-default"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Fun Skills */}
            <div className="group">
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-6 flex items-center gap-3">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                Exploring
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {exploringSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 text-sm sm:text-base bg-slate-800 text-white rounded-full border border-slate-700 hover:border-accent hover:text-accent hover:bg-slate-800/80 transition-colors cursor-default"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
