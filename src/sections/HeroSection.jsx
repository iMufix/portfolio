import { useState } from "react";
import FadeIn from "../components/FadeIn";
import Magnet from "../components/Magnet";
import ContactButton from "../components/ContactButton";
import FlowingMenu from "../components/FlowingMenu";

const navLinks = ["About", "Skills", "Projects", "Contact"];

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (link) => {
    const id = link.toLowerCase();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <section
      id="hero"
      className="relative flex flex-col h-screen overflow-x-clip"
    >
      {/* Navbar */}
      <FadeIn delay={0} y={-20}>
        <nav className="flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8">
          <ul className="hidden sm:flex items-center gap-6 md:gap-8">
            {navLinks.map((link) => (
              <li key={link}>
                <FlowingMenu
                  text={link}
                  onClick={() => handleNavClick(link)}
                  className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70"
                />
              </li>
            ))}
          </ul>

          <button
            className="sm:hidden flex flex-col gap-1.5 bg-transparent border-none cursor-pointer z-50"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-[#D7E2EA] transition-transform duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-[#D7E2EA] transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-[#D7E2EA] transition-transform duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>

          <div className="hidden sm:block" />
        </nav>

        {menuOpen && (
          <div className="sm:hidden fixed inset-0 bg-[#0C0C0C]/95 z-40 flex flex-col items-center justify-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => handleNavClick(link)}
                className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xl bg-transparent border-none cursor-pointer"
              >
                {link}
              </button>
            ))}
          </div>
        )}
      </FadeIn>

      {/* Hero Heading */}
      <div className="overflow-hidden w-full mt-6 sm:mt-4 md:-mt-5">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]">
            Hi, i&apos;m Mufid
          </h1>
        </FadeIn>
      </div>

      {/* Portrait Placeholder */}
      <FadeIn
        delay={0.6}
        y={30}
        className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px]"
      >
        <Magnet padding={150} strength={3}>
          <img
            src="/images/bitmoji.jpg"
            alt="Mohamed Mufid K T"
            className="w-full h-auto object-contain rounded-full"
            loading="eager"
          />
        </Magnet>
      </FadeIn>

      {/* Bottom Bar */}
      <div className="mt-auto flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10">
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: "clamp(0.75rem, 1.4vw, 1.5rem)" }}
          >
            Software Developer crafting scalable, AI-powered solutions
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton label="Get in Touch" />
        </FadeIn>
      </div>
    </section>
  );
}
