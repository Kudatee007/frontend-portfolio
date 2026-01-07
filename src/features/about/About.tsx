import React from "react";

interface Skill {
    name: string;
  }

const About: React.FC = () => {
  const workSkills: Skill[] = [
    { name: "Javascript" },
    { name: "Typescript" },
    { name: "HTML" },
    { name: "CSS" },
    { name: "React" },
    { name: "Redux" },
    { name: "NodeJS" },
    { name: "Express" },
    { name: "MongoDB" },
    { name: "Github" },
  ];

  const funSkills: Skill[] = [
    { name: "Tailwind" },
    { name: "Sass" },
    { name: "GraphQL" },
  ];
  return (
    <div>
      {" "}
      <section
        id="About"
        className="relative py-20 sm:py-24 lg:py-32 px-5 sm:px-10 lg:px-20 bg-slate-900/50"
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
                <span className="float-left text-5xl sm:text-6xl font-bold text-white bg-slate-800 w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mr-4 mb-2">
                  A
                </span>
                s a recent finance graduate, I have developed a strong
                foundation in financial analysis and decision-making. However, I
                have always had a passion for front-end web development and have
                dedicated much of my time to learning and improving my skills in
                this area.
              </p>

              <p>
                I am skilled in HTML, CSS, JavaScript, React.js, Node.js, and
                proficiency in modern tools like Tailwind CSS and Sass, and I
                thrive on turning ideas into dynamic, user-centric web
                applications. My journey from finance to full-stack development
                has been driven by an insatiable curiosity and a relentless
                pursuit of growth.
              </p>

              <p>
                Outside of coding, you'll find me immersed in personal projects,
                exploring the latest trends in web development, or engaging in
                meaningful collaborations to bring ideas to life.
              </p>
            </div>

            {/* Skills Section */}
            <div className="space-y-8 lg:space-y-10">
              {/* Work Skills */}
              <div className="group">
                <h3 className="text-2xl sm:text-3xl font-black text-white mb-6 flex items-center gap-3">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
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
                  <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></span>
                  Use for Fun
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {funSkills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 text-sm sm:text-base bg-slate-800 text-white rounded-full border border-slate-700 hover:border-teal-400 hover:text-teal-400 hover:bg-slate-800/80 transition-all duration-300 cursor-default"
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
    </div>
  );
};

export default About;
