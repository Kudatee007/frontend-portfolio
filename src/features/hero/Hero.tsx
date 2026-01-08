import React from "react";
import Reveal from "../../utils/Reveal";
import dotGrid from "../../assets/images/div.dotgrid_dotGrid__fIloK.svg";

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="Home"
      className="relative flex items-center justify-center overflow-hidden pt-36 pb-24 px-20 sm:px-24 xl:px-48 sm:pt-48 sm:pb-28 xl:pt-52 xl:pb-32"
    >
      <div
        className="absolute inset-0 ml-14 xl:ml-20"
        style={{
          backgroundImage: `url(${dotGrid})`,
        }}
      />
      {/* Gradient overlays */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-emerald-500/20 rounded-full blur-[120px] animate-pulse"></div>
      <div
        className="absolute bottom-1/4 -right-48 w-96 h-96 bg-teal-500/15 rounded-full blur-[120px] animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="relative z-10 max-w-[1400px] mx-auto w-full">
        <div className="max-w-3x">
          {/* Main heading */}
          <Reveal>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 sm:mb-8 leading-[50px] font-archivo">
              Hey, I’m Timmy<span className="text-accent">.</span>
            </h1>
          </Reveal>

          <Reveal>
            <h2 className="text-[40px] text-white/90 font-light mb-6 sm:mb-8 leading-10 font-poppins">
              I’m a{" "}
              <span className="font-semibold text-accent">
                frontend engineer
              </span>
            </h2>
          </Reveal>

          <Reveal>
            <p className="text-xl sm:text-2xl text-white/70 font-light mb-8 sm:mb-10 max-w-2xl font-poppins">
              I build responsive and accessible web applications with a strong
              focus on clarity, performance, and maintainable frontend
              architecture.
            </p>
          </Reveal>

          {/* CTA Button */}
          <Reveal>
            <button
              onClick={() => scrollToSection("Contact")}
              className="px-6 py-2 sm:px-8 sm:py-3 text-lg sm:text-xl text-slate-950 bg-accent rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/50 hover:scale-105 active:scale-95"
            >
              Contact me
            </button>
          </Reveal>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-6 h-10 border-2 border-emerald-400/60 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-emerald-400 rounded-full animate-scroll"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
