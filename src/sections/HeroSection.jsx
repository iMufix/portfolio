import { useState, useEffect } from "react";
import FadeIn from "../components/FadeIn";
import Magnet from "../components/Magnet";
import ContactButton from "../components/ContactButton";
import FlowingMenu from "../components/FlowingMenu";

const navLinks = ["About", "Skills", "Projects", "Contact"];
const roles = [
  "Software Developer",
  "Flutter Developer",
  "Backend Engineer",
  "API Architect",
];
const bitmojiSrc = `${import.meta.env.BASE_URL}images/bitmoji.png`;

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const handleNavClick = (link) => {
    const id = link.toLowerCase();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typeSpeed = isDeleting ? 40 : 60;
    const pauseTime = 2000;

    let timeout;

    if (isPaused) {
      timeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseTime);
    } else if (isDeleting) {
      if (displayText === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        timeout = setTimeout(() => {
          setDisplayText((prev) => prev.slice(0, -1));
        }, typeSpeed);
      }
    } else {
      if (displayText === currentRole) {
        setIsPaused(true);
      } else {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }, typeSpeed);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, isPaused, roleIndex]);

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

      {/* Typing Role */}
      <FadeIn delay={0.35} y={20}>
        <div className="text-center mt-2 sm:mt-4">
          <p className="text-[#D7E2EA] font-medium uppercase tracking-widest text-sm sm:text-base md:text-lg">
            {displayText}
            <span className="animate-pulse text-[#B600A8]">|</span>
          </p>
        </div>
      </FadeIn>

      {/* Availability Badge */}
      <FadeIn delay={0.45} y={20}>
        <div className="flex items-center justify-center gap-2 mt-3 sm:mt-4">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
          </span>
          <span className="text-green-400 font-medium text-xs sm:text-sm uppercase tracking-wider">
            Open to internships & full-time roles
          </span>
        </div>
      </FadeIn>

      {/* Hero Portrait */}
      <FadeIn
        delay={0.6}
        y={30}
        className="absolute left-1/2 -translate-x-1/2 z-10 top-[55%] sm:top-[50%] md:top-[52%] -translate-y-1/2 sm:translate-y-0 sm:bottom-0 w-[200px] sm:w-[280px] md:w-[360px] lg:w-[420px]"
      >
        <Magnet padding={150} strength={3}>
          <img
            src={bitmojiSrc}
            alt="Mohamed Mufid K T"
            className="w-full h-auto object-contain"
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
            Software developer with a backend bias, building end-to-end solutions
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="/resume.pdf"
              download
              className="rounded-full border-2 border-[#D7E2EA] px-6 py-3 sm:px-8 sm:py-3.5 text-xs sm:text-sm font-medium uppercase tracking-widest text-[#D7E2EA] cursor-pointer hover:bg-[#D7E2EA]/10 transition-colors duration-200"
            >
              Resume
            </a>
            <ContactButton label="Get in Touch" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
