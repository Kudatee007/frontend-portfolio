import React from "react";
import Reveal from "../../utils/Reveal";
import { HiMail } from "react-icons/hi";

const Contact: React.FC = () => {
  return (
    <footer
      id="Contact"
      className="relative min-h-[90vh] flex items-center justify-center bg-slate-950 py-20"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10"></div>
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-44 h-44 sm:w-96 sm:h-96 bg-emerald-500/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }}></div>

      <div className="relative z-10 w-full max-w-4xl mx-auto text-center space-y-8 pl-5 pr-5 sm:pl-10 sm:pr-10 md:pl-[72px] md:pr-5 lg:pl-20 lg:pr-20 xl:pl-20 xl:pr-20 flex flex-col items-center justify-center">
        {/* Heading */}
        <Reveal>
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white font-archivo leading-tight">
            Contact<span className="text-emerald-400">.</span>
          </h2>
        </Reveal>

        {/* Description */}
        <Reveal>
          <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 font-poppins font-light leading-relaxed max-w-2xl mx-auto px-4">
            Feel free to reach out via email if you'd like to connect! 
            Alternatively, you can connect with me on LinkedIn or Twitter 
            if that suits you better.
          </p>
        </Reveal>

        {/* Email */}
        <Reveal>
          <a
            href="mailto:Timilehinkudaisi@gmail.com"
            className="group inline-flex items-center justify-center gap-3 text-sm sm:text-2xl lg:text-3xl font-poppins font-medium text-white hover:text-emerald-400 transition-colors duration-300 tracking-wider"
          >
            <div className="p-2 bg-emerald-400/10 rounded-lg group-hover:bg-emerald-400/20 transition-colors duration-300">
              <HiMail />
            </div>
            <span className="border-b-2 border-transparent group-hover:border-emerald-400 transition-all duration-300">
              Timilehinkudaisi@gmail.com
            </span>
          </a>
        </Reveal>

        {/* Social Links */}
        {/* <Reveal>
          <div className="flex items-center justify-center gap-6 pt-8">
            <a
              href="https://www.linkedin.com/in/timilehin-kudaisi-87834524a/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="p-3 bg-white rounded-full group-hover:bg-emerald-400 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-emerald-500/50">
                <FaLinkedinIn />
              </div>
            </a>
            
            <a
              href="https://github.com/Kudatee007"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="p-3 bg-white rounded-full group-hover:bg-emerald-400 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-emerald-500/50">
                <TbBrandGithubFilled />
              </div>
            </a>
            
            <a
              href="https://twitter.com/Kudatee001"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="p-3 bg-white rounded-full group-hover:bg-emerald-400 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-emerald-500/50">
                <FaTwitter />
              </div>
            </a>
          </div>
        </Reveal> */}

        {/* Footer Copyright */}
        <Reveal>
          <div className="pt-16 border-t border-slate-800/50 mt-16">
            <p className="text-sm sm:text-base text-slate-500 font-poppins font-light">
              © {new Date().getFullYear()} Timilehin Kudaisi. Built with React, TypeScript & Tailwind CSS.
            </p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
};

export default Contact;