import React, { useState, useEffect } from "react";
import TK from "../../assets/images/TK.svg";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdCancel } from "react-icons/md";
import Resume from "../../assets/documents/KUDAISI TIMILEHIN.pdf";

type Section = "Home" | "About" | "Project" | "Exp" | "Contact" | "";

const Navbar: React.FC = () => {
  const [expand, setExpand] = useState<boolean>(true);
  const [prevScrollPos, setPrevScrollPos] = useState<number>(window.pageYOffset);
  const [visible, setVisible] = useState<boolean>(true);
  const [activeSection, setActiveSection] = useState<Section>("");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 10;
      setVisible(isVisible);
      setPrevScrollPos(currentScrollPos);

      // Determine active section
      const sections: Section[] = ["Home", "About", "Project", "Exp", "Contact"];
      const sectionElements = sections.map(id => document.getElementById(id));

      for (let i = 0; i < sectionElements.length; i++) {
        const section = sectionElements[i];
        const nextSection = sectionElements[i + 1];

        if (section) {
          const isInSection = 
            currentScrollPos >= section.offsetTop - 100 &&
            (!nextSection || currentScrollPos < nextSection.offsetTop - 100);

          if (isInSection) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const handleToggle = () => {
    setExpand(!expand);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setExpand(true); // Close mobile menu after click
  };

  const navItems = [
    { id: "About", label: "About" },
    { id: "Project", label: "Projects" },
    { id: "Exp", label: "Experience" },
    { id: "Contact", label: "Contact" }
  ];

  return (
    <>
      {/* Main Navbar */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-[1000] bg-slate-950/95 backdrop-blur-md border-b border-emerald-500/10 transition-transform duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="mx-auto px-5">
          <div className="flex items-center justify-between py-5">
            {/* Logo */}
            <img
              src={TK}
              alt="Logo"
              className="w-12 h-12 sm:w-14 sm:h-14 cursor-pointer hover:scale-110 transition-transform duration-300 hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]"
              onClick={() => scrollToSection("Home")}
            />

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6 lg:gap-10">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  className={`relative text-sm lg:text-base font-light tracking-[0.2em] transition-all duration-300 hover:text-emerald-400 group opacity-70 ${
                    activeSection === item.id 
                      ? "text-emerald-400" 
                      : "text-white"
                  }`}
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                  <span 
                    className={`absolute -bottom-1 left-0 h-[1px] bg-gradient-to-r from-emerald-400 to-teal-400 transition-all duration-300 ${
                      activeSection === item.id 
                        ? "w-full" 
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Resume Button & Hamburger */}
            <div className="flex items-center gap-3 sm:gap-4">
              <a
                href={Resume}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 sm:px-5 sm:py-2.5 text-sm sm:text-base font-semibold text-accent hover:shadow-lg hover:shadow-emerald-500/40 transition-all duration-300 hover:scale-105 border border-accent"
              >
                My Resume
              </a>
              
              {/* Hamburger Menu */}
              <button
                className="md:hidden text-emerald-400 text-3xl sm:text-4xl hover:text-emerald-300 transition-colors hover:scale-110 active:scale-95"
                onClick={handleToggle}
              >
                {expand ? <GiHamburgerMenu /> : <MdCancel />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            expand 
              ? "max-h-0 opacity-0" 
              : "max-h-96 opacity-100"
          }`}
        >
          <div className="px-6 py-8 bg-slate-900/95 backdrop-blur-lg border-t border-emerald-500/20 space-y-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`block w-full text-center text-lg font-light tracking-[0.15em] transition-all duration-300 hover:text-emerald-400 ${
                  activeSection === item.id 
                    ? "text-emerald-400 scale-105" 
                    : "text-slate-300"
                }`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Fixed Sidebar - Social Icons */}
      <aside className="flex fixed left-4 xl:left-8 bottom-0 z-[999] flex-col items-center gap-5 pb-8 animate-fade-in">
        <a
          href="https://www.linkedin.com/in/timilehin-kudaisi-87834524a/"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative"
        >
          <div className="p-1.5 bg-white rounded-sm hover:bg-emerald-400 transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/50">
            <FaLinkedinIn />
          </div>
        </a>
        
        <a
          href="https://github.com/Kudatee007"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative"
        >
          <div className="p-1.5 bg-white rounded-full hover:bg-emerald-400 transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/50">
            <TbBrandGithubFilled />
          </div>
        </a>
        
        <a
          href="https://twitter.com/Kudatee001"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative"
        >
          <div className="p-1.5 bg-white rounded-full hover:bg-emerald-400 transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/50">
            {/* <FaTwitter className="text-xl text-slate-950" /> */}
            <FaTwitter />
          </div>
        </a>
        
        {/* Vertical line */}
        <div className="w-px h-24 bg-gradient-to-b from-emerald-400 via-emerald-500 to-transparent opacity-60"></div>
      </aside>
    </>
  );
};

export default Navbar;