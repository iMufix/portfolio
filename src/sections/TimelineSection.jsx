import { motion } from "framer-motion";
import FadeIn from "../components/FadeIn";

const milestones = [
  { year: "2021", title: "Started BCA", desc: "Mohamed Sathak College of Arts and Science", side: "left" },
  { year: "2024", title: "BCA Complete", desc: "Organized Web Development Workshop", side: "right" },
  { year: "2025", title: "Started MCA", desc: "CEG, Anna University + MERN Certification", side: "left" },
  { year: "2027", title: "MCA Complete", desc: "Targeting internships & full-time roles", side: "right", projected: true },
];

export default function TimelineSection() {
  return (
    <section className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <FadeIn delay={0} y={40}>
        <h2 className="hero-heading font-black uppercase text-center mb-16 sm:mb-20 md:mb-28" style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}>
          Timeline
        </h2>
      </FadeIn>
      <div className="max-w-4xl mx-auto relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#B600A8]/50 via-[#7621B0]/30 to-transparent transform -translate-x-1/2 hidden md:block" />
        <div className="space-y-12 md:space-y-0">
          {milestones.map((milestone, index) => (
            <FadeIn key={milestone.year} delay={index * 0.15} y={30}>
              <div className={`relative md:flex md:items-center ${milestone.side === "left" ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <motion.div whileHover={{ y: -5, scale: 1.02 }} className={`md:w-[45%] ${milestone.side === "left" ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
                  <div className="relative rounded-[24px] sm:rounded-[30px] border border-[#D7E2EA]/10 bg-[#0C0C0C] p-5 sm:p-6 overflow-hidden group"
                    style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)" }}>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[24px] sm:rounded-[30px]"
                      style={{ background: milestone.projected ? "radial-gradient(circle at 50% 0%, rgba(182, 0, 168, 0.08) 0%, transparent 60%)" : "radial-gradient(circle at 50% 0%, rgba(118, 33, 176, 0.08) 0%, transparent 60%)" }} />
                    {milestone.projected && (
                      <span className="absolute top-3 right-3 sm:top-4 sm:right-4 text-[#B600A8]/60 font-medium text-[10px] sm:text-xs uppercase tracking-wider">Projected</span>
                    )}
                    <div className="relative z-10">
                      <span className="hero-heading font-black block" style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}>{milestone.year}</span>
                      <h3 className="text-[#D7E2EA] font-bold text-sm sm:text-base mt-1">{milestone.title}</h3>
                      <p className="text-[#D7E2EA]/40 font-light text-xs sm:text-sm mt-1">{milestone.desc}</p>
                    </div>
                  </div>
                </motion.div>
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                  <motion.div whileHover={{ scale: 1.3 }} className="w-4 h-4 rounded-full bg-[#0C0C0C] border-2 border-[#B600A8] relative z-10">
                    <div className="absolute inset-0 rounded-full bg-[#B600A8]/30 animate-ping" />
                  </motion.div>
                </div>
                <div className="hidden md:block md:w-[45%]" />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
