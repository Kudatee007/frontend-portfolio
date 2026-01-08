import React, { useState } from "react";
import Reveal from "../../utils/Reveal";
import { TbBrandGithubFilled } from "react-icons/tb";
import { MdCancel } from "react-icons/md";
import { LuExternalLink } from "react-icons/lu";
import pablo from "../../assets/images/pablo.png";
import creativeShowcase from "../../assets/images/creative-showcase.png";
import urgent2kay from "../../assets/images/urgent-2kay.png";

interface ProjectData {
  id: string;
  name: string;
  image: string;
  tech: string;
  shortDesc: string;
  detailedDesc: string[];
  skills: string;
  github: string;
  live: string;
  category: string;
}

const Project: React.FC = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const projects: ProjectData[] = [
    {
      id: "urgent2kay",
      name: "Urgent 2Kay",
      image: urgent2kay,
      tech: "React · TypeScript · Tailwind CSS · Context API",
      shortDesc:
        "A fintech web platform that allows sponsors to pay service providers directly, ensuring transparency and accountability in bill payments.",
      detailedDesc: [
        "Urgent 2Kay addresses the trust gap in informal financial assistance by enabling sponsors to pay verified service providers directly rather than transferring cash to individuals.",
        "I worked on frontend architecture and multi-step user flows, building dashboard-style layouts that support complex bill requests and payment states.",
        "The application emphasizes clarity through structured request grouping, real-time status updates, and clear payment confirmations.",
        "This project strengthened my experience building fintech-style interfaces with React and managing shared application state in a reliability-focused environment.",
      ],
      skills:
        "React component architecture, shared state management, multi-step user flows, dashboard UI patterns.",
      github: "https://github.com/Na8aN-web/URGENT-2KAY-GROUP-PROJECT",
      live: "https://urgent-2-kay-group-project-yozf.vercel.app/",
      category: "Fintech Platform · Directed Bill Payments",
    },
    {
      id: "creative",
      name: "Creative Showcase",
      image: creativeShowcase,
      tech: "React · TypeScript · Tailwind CSS · Framer Motion",
      shortDesc:
        "A pixel-accurate recreation of a creative studio homepage, focused on responsive layout systems and animation precision.",
      detailedDesc: [
        "Creative Showcase is a UI-focused frontend project built to demonstrate precision in layout, typography, and motion.",
        "I recreated the original design with attention to spacing, hierarchy, and responsiveness while maintaining clean component structure.",
        "Framer Motion was used to implement subtle, performance-friendly animations and scroll interactions.",
        "This project highlights my ability to translate static designs into polished, production-quality frontend interfaces.",
      ],
      skills:
        "Responsive layout systems, animation orchestration, UI precision, performance-aware frontend development.",
      github: "https://github.com/Kudatee007/creative-showcase",
      live: "https://creative-showcase-beta.vercel.app/",
      category: "UI Engineering · Motion Design",
    },
    {
      id: "pablo",
      name: "Pablo Dimensions",
      image: pablo,
      tech: "React · Redux · Node.js · Express",
      shortDesc:
        "An e-commerce web application featuring product browsing, cart state management, and responsive shopping flows.",
      detailedDesc: [
        "Pablo Dimensions is an e-commerce web application built to explore frontend architecture and shared state management.",
        "I implemented product listings, navigation flows, and cart interactions with a focus on usability and consistency.",
        "Redux was used to manage application-wide state such as cart updates and user interactions.",
        "This project reinforced my understanding of frontend structure in applications with dynamic data and user-driven state.",
      ],
      skills:
        "Frontend state management, e-commerce UI flows, Redux-based shared state, component-driven architecture.",
      github: "https://github.com/Kudatee007/Pablo-dimensions",
      live: "https://superlative-liger-5cd1f3.netlify.app",
      category: "E-commerce · Frontend Architecture",
    },
  ];

  const openModal = (id: string) => {
    setActiveModal(id);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <section
      id="Project"
      className="relative py-20 sm:py-24 lg:py-32 px-5 sm:px-10 lg:px-20 bg-slate-950"
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
        <div className="flex items-center gap-4 sm:gap-6 mb-12 sm:mb-16">
          <div className="flex-1 h-[2px] bg-gradient-to-l from-slate-600 to-transparent opacity-30"></div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white whitespace-nowrap font-archivo">
            Projects<span className="text-emerald-400">.</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-slate-800/30 rounded-2xl overflow-hidden border border-slate-700/50 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden bg-slate-800 p-5 sm:p-8">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full rounded-lg group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Project Content */}
              <div className="p-6 sm:p-8 space-y-4">
                {/* Project Name + Links */}
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-2xl sm:text-3xl font-black text-white font-archivo">
                    {project.name}
                  </h3>
                  <div className="flex-1 h-[1px] bg-gradient-to-r from-slate-600 to-transparent opacity-30"></div>
                  <div className="flex gap-3">
                    <Reveal>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-xl text-accent rounded-full hover:text-white transition-all duration-300"
                      >
                        <TbBrandGithubFilled />
                      </a>
                    </Reveal>
                    <Reveal>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-xl text-accent rounded-full hover:text-white transition-all duration-300"
                      >
                        <LuExternalLink />
                      </a>
                    </Reveal>
                  </div>
                </div>

                {/* Tech Stack */}
                <Reveal>
                  <p className="text-emerald-400 font-poppins text-base sm:text-lg font-medium">
                    {project.tech}
                  </p>
                </Reveal>

                {/* Short Description */}
                <Reveal>
                  <p className="text-slate-300 font-poppins text-base sm:text-lg font-light leading-relaxed">
                    {project.shortDesc}
                    <span
                      className="text-emerald-400 cursor-pointer hover:text-emerald-300 transition-colors ml-1 font-medium"
                      onClick={() => openModal(project.id)}
                    >
                      Learn more
                    </span>
                  </p>
                </Reveal>
              </div>
            </div>
          ))}
        </div>

        {/* Modals */}
        {projects.map((project) => (
          <div
            key={`modal-${project.id}`}
            className={`fixed inset-0 z-[2000] bg-slate-950/95 backdrop-blur-md transition-all duration-300 overflow-y-auto ${
              activeModal === project.id
                ? "opacity-100 visible"
                : "opacity-0 invisible"
            }`}
            onClick={closeModal}
          >
            <div className="min-h-screen px-4 sm:px-6 py-12 sm:py-20 flex items-center justify-center">
              <div
                className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-10 p-2 bg-slate-800/80 rounded-full hover:bg-emerald-400 transition-all duration-300 hover:scale-110 hover:rotate-90"
                >
                  <MdCancel />
                </button>

                {/* Modal Image */}
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full"
                  />
                </div>

                {/* Modal Content */}
                <div className="p-6 sm:p-10 lg:p-12 space-y-6">
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-archivo">
                    {project.name}
                  </h3>

                  <p className="text-emerald-400 font-poppins text-lg sm:text-xl font-medium">
                    {project.category}
                  </p>

                  <div className="space-y-5 text-slate-300 font-poppins text-base sm:text-lg font-light leading-relaxed">
                    {project.detailedDesc.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>

                  <p className="text-slate-300 font-poppins text-base sm:text-lg font-light leading-relaxed">
                    <strong className="text-white">
                      Key skills demonstrated:
                    </strong>{" "}
                    {project.skills}
                  </p>

                  {/* Project Links */}
                  <div className="pt-6">
                    <h4 className="text-2xl font-black text-white font-archivo mb-6">
                      Project Links<span className="text-emerald-400">.</span>
                    </h4>

                    <div className="flex flex-wrap gap-6">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 group"
                      >
                        <div className="p-2 bg-white text-xl text-slate-950 rounded-full group-hover:bg-emerald-400 transition-all duration-300 group-hover:scale-110">
                          <TbBrandGithubFilled />
                        </div>
                        <span className="text-emerald-400 font-poppins font-semibold group-hover:text-emerald-300 transition-colors">
                          Source Code
                        </span>
                      </a>

                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 group"
                      >
                        <div className="p-2 bg-white text-xl text-slate-950 rounded-full group-hover:bg-emerald-400 transition-all duration-300 group-hover:scale-110">
                          <LuExternalLink />
                        </div>
                        <span className="text-emerald-400 font-poppins font-semibold group-hover:text-emerald-300 transition-colors">
                          Live Demo
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
