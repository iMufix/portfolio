import FadeIn from "../components/FadeIn";
import { motion } from "framer-motion";

const interests = [
  { name: "System Design", icon: "🏗️" },
  { name: "API Patterns", icon: "🔗" },
  { name: "Cloud Native", icon: "☁️" },
  { name: "Database Architecture", icon: "🗄️" },
  { name: "DevOps", icon: "⚙️" },
  { name: "AI Integration", icon: "🤖" },
];

export default function StayUpdatedSection() {
  return (
    <section className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-16 sm:py-20 md:py-24">
      <FadeIn delay={0} y={30}>
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-[30px] sm:rounded-[40px] border border-[#D7E2EA]/10 bg-[#0C0C0C] p-6 sm:p-8 md:p-10 overflow-hidden"
            style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)" }}>
            <div className="absolute inset-0 opacity-30"
              style={{ background: "radial-gradient(ellipse at 20% 50%, rgba(182, 0, 168, 0.1) 0%, transparent 50%), radial-gradient(ellipse at 80% 50%, rgba(118, 33, 176, 0.1) 0%, transparent 50%)" }} />
            <div className="relative z-10">
              <p className="text-[#D7E2EA]/40 font-medium uppercase tracking-wider text-sm mb-3 text-center">Always Curious</p>
              <p className="text-[#D7E2EA] font-light text-center max-w-2xl mx-auto mb-8" style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}>
                I stay plugged into the backend ecosystem — exploring system design patterns, API best practices, cloud infrastructure, and scalable architectures. Continuous learning keeps me ahead of the curve.
              </p>
              <div className="flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
                {interests.map((item) => (
                  <motion.div key={item.name} whileHover={{ y: -4, scale: 1.08 }} transition={{ type: "spring", stiffness: 400, damping: 15 }} className="relative group">
                    <div className="rounded-full border border-[#D7E2EA]/15 bg-[#0C0C0C]/60 backdrop-blur-sm px-4 py-2 sm:px-5 sm:py-2.5 flex items-center gap-2"
                      style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.3)" }}>
                      <span className="text-sm">{item.icon}</span>
                      <span className="text-[#D7E2EA] font-medium text-xs sm:text-sm uppercase tracking-wider">{item.name}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
