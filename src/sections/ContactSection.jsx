import FadeIn from "../components/FadeIn";
import ContactButton from "../components/ContactButton";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 flex flex-col items-center gap-10 sm:gap-14 md:gap-16"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase text-center"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          Contact
        </h2>
      </FadeIn>

      <FadeIn delay={0.2} y={20}>
        <p
          className="text-[#D7E2EA] font-light text-center leading-relaxed max-w-[560px]"
          style={{ fontSize: "clamp(1rem, 2vw, 1.35rem)" }}
        >
           I build across the stack with a backend edge. Open to internships and full-time opportunities — let&apos;s create something impactful together.
        </p>
      </FadeIn>

      <FadeIn delay={0.3} y={20}>
        <div className="flex flex-col items-center gap-4">
          <a
            href="mailto:mohamedmufid1@outlook.com"
            className="text-[#D7E2EA] font-medium text-sm sm:text-base tracking-wider hover:text-[#BBCCD7] transition-colors duration-200"
          >
            mohamedmufid1@outlook.com
          </a>
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
            <a
              href="https://github.com/iMufix"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D7E2EA]/60 font-medium text-sm uppercase tracking-wider hover:text-[#D7E2EA] transition-colors duration-200"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/mohamed-mufid-023b55256"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D7E2EA]/60 font-medium text-sm uppercase tracking-wider hover:text-[#D7E2EA] transition-colors duration-200"
            >
              LinkedIn
            </a>
            <a
              href="https://leetcode.com/u/Mufix7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D7E2EA]/60 font-medium text-sm uppercase tracking-wider hover:text-[#D7E2EA] transition-colors duration-200"
            >
              LeetCode
            </a>
            <a
              href="https://codeforces.com/profile/mohamedmufid1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D7E2EA]/60 font-medium text-sm uppercase tracking-wider hover:text-[#D7E2EA] transition-colors duration-200"
            >
              Codeforces
            </a>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.4} y={20}>
        <ContactButton label="Get in Touch" />
      </FadeIn>

      <FadeIn delay={0.6} y={20}>
        <p className="text-[#D7E2EA]/30 text-sm font-light tracking-wide">
          &copy; {new Date().getFullYear()} Mohamed Mufid K T. All rights reserved.
        </p>
      </FadeIn>
    </section>
  );
}
