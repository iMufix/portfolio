import { motion } from "framer-motion";
import FadeIn from "../components/FadeIn";

const hobbies = [
  {
    name: "Audiophile",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
      </svg>
    ),
    desc: "High-fidelity audio & sound engineering",
  },
  {
    name: "Video Games",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="20" height="12" rx="2" />
        <path d="M6 12h4M8 10v4M15 12h.01M18 12h.01" />
      </svg>
    ),
    desc: "Strategy & immersive storytelling",
  },
  {
    name: "Books",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
    desc: "Tech, psychology & fiction",
  },
];

export default function HobbiesSection() {
  return (
    <section className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <FadeIn delay={0} y={40}>
        <h2 className="hero-heading font-black uppercase text-center mb-4" style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}>Beyond Code</h2>
      </FadeIn>
      <FadeIn delay={0.1} y={20}>
        <p className="text-[#D7E2EA]/40 font-light text-center mb-16 sm:mb-20 md:mb-28 max-w-md mx-auto">What I do when I&apos;m not building software</p>
      </FadeIn>
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
        {hobbies.map((hobby, index) => (
          <FadeIn key={hobby.name} delay={index * 0.15} y={30}>
            <motion.div whileHover={{ y: -12, scale: 1.03 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="relative group cursor-default">
              <div className="relative rounded-[30px] sm:rounded-[40px] border border-[#D7E2EA]/10 bg-[#0C0C0C] p-8 sm:p-10 text-center overflow-hidden h-full"
                style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)" }}>
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-700 blur-xl"
                  style={{ background: index === 0 ? "radial-gradient(circle, #B600A8 0%, transparent 70%)" : index === 1 ? "radial-gradient(circle, #7621B0 0%, transparent 70%)" : "radial-gradient(circle, #BBCCD7 0%, transparent 70%)" }} />
                <div className="absolute inset-0 rounded-[30px] sm:rounded-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ boxShadow: "inset 0 0 0 1px rgba(182, 0, 168, 0.2), 0 0 40px rgba(182, 0, 168, 0.1)" }} />
                <div className="relative z-10">
                  <div className="text-[#D7E2EA]/30 group-hover:text-[#B600A8]/60 transition-colors duration-500 mx-auto mb-5 flex justify-center">{hobby.icon}</div>
                  <h3 className="text-[#D7E2EA] font-bold text-lg sm:text-xl uppercase tracking-wider">{hobby.name}</h3>
                  <p className="text-[#D7E2EA]/40 font-light text-sm mt-3">{hobby.desc}</p>
                </div>
              </div>
            </motion.div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
