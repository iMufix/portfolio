import FadeIn from "../components/FadeIn";

const skills = [
  {
    number: "01",
    name: "Full Stack Development",
    description:
      "Building complete web applications from frontend to backend using React, Node.js, Express, and databases. Delivering scalable, production-ready solutions.",
  },
  {
    number: "02",
    name: "Mobile Development",
    description:
      "Cross-platform mobile applications with Flutter and Dart. Firebase integration for real-time data, authentication, and cloud storage.",
  },
  {
    number: "03",
    name: "AI Integration",
    description:
      "Integrating OpenAI and Gemini APIs into applications for intelligent features. AI-powered diagnostics, chatbots, and content generation.",
  },
  {
    number: "04",
    name: "UI/UX Design",
    description:
      "Crafting intuitive, modern interfaces with attention to layout, typography, and user experience. Creating designs that convert and delight users.",
  },
  {
    number: "05",
    name: "Backend Engineering",
    description:
      "Robust server-side architecture with RESTful APIs, database design, and authentication. Experience with MongoDB, PostgreSQL, and Firebase.",
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <h2
        className="text-[#0C0C0C] font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
      >
        Skills
      </h2>

      <div className="max-w-5xl mx-auto flex flex-col">
        {skills.map((skill, index) => (
          <FadeIn key={skill.number} delay={index * 0.1}>
            <div
              className={`flex items-start gap-4 sm:gap-6 md:gap-8 py-8 sm:py-10 md:py-12 ${
                index > 0 ? "border-t border-[rgba(12,12,12,0.15)]" : ""
              }`}
            >
              <span
                className="text-[#0C0C0C] font-black leading-none flex-shrink-0"
                style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
              >
                {skill.number}
              </span>
              <div className="flex flex-col gap-2 sm:gap-3 pt-2 sm:pt-4">
                <h3
                  className="text-[#0C0C0C] font-medium uppercase"
                  style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
                >
                  {skill.name}
                </h3>
                <p
                  className="text-[#0C0C0C] font-light leading-relaxed max-w-2xl"
                  style={{
                    fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)",
                    opacity: 0.6,
                  }}
                >
                  {skill.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
