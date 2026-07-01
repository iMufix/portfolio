import FadeIn from "../components/FadeIn";
import { motion } from "framer-motion";

const techStack = [
  { name: "Java", color: "#E76F00" },
  { name: "JavaScript", color: "#F7DF1E" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Python", color: "#3776AB" },
  { name: "Dart", color: "#0175C2" },
  { name: "React", color: "#61DAFB" },
  { name: "Node.js", color: "#339933" },
  { name: "Express", color: "#404040" },
  { name: "Flutter", color: "#02569B" },
  { name: "MongoDB", color: "#47A248" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "Firebase", color: "#FFCA28" },
  { name: "Git", color: "#F05032" },
  { name: "Docker", color: "#2496ED" },
  { name: "OpenAI API", color: "#10A37F" },
  { name: "Gemini API", color: "#4285F4" },
];

export default function TechStackSection() {
  return (
    <section className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <FadeIn delay={0} y={40}>
        <h2 className="hero-heading font-black uppercase text-center mb-16 sm:mb-20 md:mb-28" style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}>
          Tech Stack
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
        {techStack.map((tech, index) => (
          <FadeIn key={tech.name} delay={index * 0.05}>
            <div className="rounded-2xl border border-[#D7E2EA]/20 px-6 py-4 sm:py-5 flex items-center justify-center gap-3 transition-all duration-300 hover:border-[#D7E2EA]/50 hover:bg-[#D7E2EA]/5 cursor-default">
              <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: tech.color }} />
              <span className="text-[#D7E2EA] font-medium uppercase tracking-wider" style={{ fontSize: "clamp(0.75rem, 1.2vw, 1rem)" }}>
                {tech.name}
              </span>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.3} y={30}>
        <div className="max-w-5xl mx-auto mt-20 sm:mt-24 md:mt-32 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border border-[#D7E2EA]/20 rounded-[30px] p-6 sm:p-8">
            <span className="text-[#D7E2EA]/40 font-medium text-sm uppercase tracking-wider">2025 &ndash; 2027</span>
            <h3 className="text-[#D7E2EA] font-bold mt-2" style={{ fontSize: "clamp(1.2rem, 2.5vw, 2rem)" }}>Master of Computer Applications</h3>
            <p className="text-[#D7E2EA]/60 font-light mt-2">College of Engineering Guindy (CEG), Anna University</p>
          </div>
          <div className="border border-[#D7E2EA]/20 rounded-[30px] p-6 sm:p-8">
            <span className="text-[#D7E2EA]/40 font-medium text-sm uppercase tracking-wider">2021 &ndash; 2024</span>
            <h3 className="text-[#D7E2EA] font-bold mt-2" style={{ fontSize: "clamp(1.2rem, 2.5vw, 2rem)" }}>Bachelor of Computer Applications</h3>
            <p className="text-[#D7E2EA]/60 font-light mt-2">Mohamed Sathak College of Arts and Science</p>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.35} y={30}>
        <div className="max-w-5xl mx-auto mt-16 sm:mt-20">
          <p className="text-[#D7E2EA]/40 font-medium uppercase tracking-wider text-sm mb-6 text-center">Languages</p>
          <div className="flex items-center justify-center gap-4 sm:gap-6 flex-wrap">
            {[{ name: "English", level: "Professional" }, { name: "Tamil", level: "Native" }].map((lang) => (
              <motion.div key={lang.name} whileHover={{ y: -4, scale: 1.05 }} className="relative group">
                <div className="rounded-full border border-[#D7E2EA]/15 bg-[#0C0C0C] px-6 py-3 sm:px-8 sm:py-3.5 flex items-center gap-3" style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.03)" }}>
                  <span className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm">{lang.name}</span>
                  <span className="text-[#D7E2EA]/30 text-xs">|</span>
                  <span className="text-[#B600A8]/70 font-medium text-xs uppercase tracking-wider">{lang.level}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.38} y={30}>
        <div className="max-w-5xl mx-auto mt-12 sm:mt-16">
          <p className="text-[#D7E2EA]/40 font-medium uppercase tracking-wider text-sm mb-6 text-center">Currently Learning</p>
          <div className="flex items-center justify-center gap-4 sm:gap-6 flex-wrap">
            {["AWS", "Machine Learning"].map((item) => (
              <motion.div key={item} whileHover={{ y: -4, scale: 1.05 }} className="relative group">
                <div className="rounded-full border border-[#B600A8]/20 bg-[#0C0C0C] px-6 py-3 sm:px-8 sm:py-3.5 flex items-center gap-2" style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.03)" }}>
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B600A8] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B600A8]" />
                  </span>
                  <span className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm">{item}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.4} y={30}>
        <div className="max-w-5xl mx-auto mt-16 sm:mt-20 text-center">
          <p className="text-[#D7E2EA]/40 font-medium uppercase tracking-wider text-sm mb-4">Competitive Programming</p>
          <div className="flex items-center justify-center gap-6 sm:gap-8">
            <a href="https://leetcode.com/u/Mufix7/" target="_blank" rel="noopener noreferrer" className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm sm:text-base hover:text-[#BBCCD7] transition-colors duration-200">LeetCode</a>
            <span className="text-[#D7E2EA]/20">|</span>
            <a href="https://codeforces.com/profile/mohamedmufid1" target="_blank" rel="noopener noreferrer" className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm sm:text-base hover:text-[#BBCCD7] transition-colors duration-200">Codeforces</a>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.45} y={30}>
        <div className="max-w-5xl mx-auto mt-12 sm:mt-16">
          <p className="text-[#D7E2EA]/40 font-medium uppercase tracking-wider text-sm mb-6 text-center">Certifications</p>
          <div className="border border-[#D7E2EA]/20 rounded-[30px] p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-[#D7E2EA] font-bold" style={{ fontSize: "clamp(1.1rem, 2vw, 1.5rem)" }}>MERN Stack Development</h3>
              <p className="text-[#D7E2EA]/60 font-light mt-1">Pumo Technovation</p>
            </div>
            <span className="text-[#D7E2EA]/30 font-medium text-sm uppercase tracking-wider">In Progress</span>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.5} y={30}>
        <div className="max-w-5xl mx-auto mt-12 sm:mt-16 text-center">
          <p className="text-[#D7E2EA]/40 font-medium uppercase tracking-wider text-sm mb-4">Connect</p>
          <div className="flex items-center justify-center gap-6 sm:gap-8 flex-wrap">
            <a href="https://www.linkedin.com/in/mohamed-mufid-023b55256" target="_blank" rel="noopener noreferrer" className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm sm:text-base hover:text-[#BBCCD7] transition-colors duration-200">LinkedIn</a>
            <span className="text-[#D7E2EA]/20">|</span>
            <a href="https://github.com/iMufix" target="_blank" rel="noopener noreferrer" className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm sm:text-base hover:text-[#BBCCD7] transition-colors duration-200">GitHub</a>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
