import { motion } from "framer-motion";
import FadeIn from "../components/FadeIn";

const stats = [
  { number: "4", label: "Projects", suffix: "+" },
  { number: "16", label: "Tech", suffix: "" },
  { number: "2", label: "Years", suffix: "+" },
  { number: "MCA", label: "@ CEG", suffix: "" },
  { number: "Chennai", label: "India", suffix: "" },
];

const getStatFontSize = (value) =>
  value.length > 4 ? "clamp(1.35rem, 2.7vw, 2.25rem)" : "clamp(1.8rem, 4vw, 3rem)";

export default function StatsBar() {
  return (
    <section className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-12 sm:py-16 md:py-20">
      <FadeIn delay={0} y={30}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="relative group cursor-default"
              >
                <div
                  className="relative rounded-[24px] sm:rounded-[30px] border border-[#D7E2EA]/10 bg-[#0C0C0C] p-5 sm:p-6 md:p-8 text-center overflow-hidden"
                  style={{
                    boxShadow: "0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
                  }}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[24px] sm:rounded-[30px]"
                    style={{
                      background: "radial-gradient(circle at 50% 0%, rgba(182, 0, 168, 0.15) 0%, transparent 60%)",
                    }}
                  />
                  <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-[#B600A8]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <span
                      className="hero-heading font-black block"
                      style={{ fontSize: getStatFontSize(stat.number), lineHeight: 1 }}
                    >
                      {stat.number}
                      {stat.suffix && (
                        <span className="text-[#B600A8] text-lg sm:text-xl">{stat.suffix}</span>
                      )}
                    </span>
                    <span className="text-[#D7E2EA]/50 font-medium uppercase tracking-wider text-xs sm:text-sm mt-2 block">
                      {stat.label}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            whileHover={{ scale: 1.01 }}
            className="mt-8 sm:mt-10 relative group"
          >
            <div
              className="rounded-[24px] sm:rounded-[30px] border border-[#D7E2EA]/10 bg-[#0C0C0C] p-5 sm:p-6 md:p-8 flex items-center gap-4 sm:gap-6 overflow-hidden"
              style={{
                boxShadow: "0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
              }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[24px] sm:rounded-[30px]"
                style={{
                  background: "radial-gradient(circle at 10% 50%, rgba(118, 33, 176, 0.1) 0%, transparent 50%)",
                }}
              />
              <div className="relative z-10 flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#B600A8]/20 to-[#7621B0]/20 border border-[#B600A8]/30 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B600A8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              </div>
              <div className="relative z-10">
                <p className="text-[#D7E2EA]/40 font-medium text-xs sm:text-sm uppercase tracking-wider">Leadership Experience</p>
                <p className="text-[#D7E2EA] font-medium text-sm sm:text-base mt-1">Organized a Web Development Workshop during undergraduate studies</p>
              </div>
            </div>
          </motion.div>
        </div>
      </FadeIn>
    </section>
  );
}
