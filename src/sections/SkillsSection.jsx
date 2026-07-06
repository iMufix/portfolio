import FadeIn from "../components/FadeIn";

const skills = [
  {
    number: "01",
    name: "Full Stack Development",
    description:
      "Building complete applications with React frontends, Node.js/Express backends, and database integration. Delivering end-to-end solutions from UI to server logic.",
  },
  {
    number: "02",
    name: "Mobile Development",
    description:
      "Cross-platform mobile apps with Flutter and Dart. Firebase integration for real-time sync, authentication, and cloud functions. Deployed on both Android and iOS.",
  },
  {
    number: "03",
    name: "Backend Architecture",
    description:
      "Designing scalable server-side systems with RESTful APIs, middleware pipelines, authentication, and optimized request handling using Node.js, Express, and PostgreSQL.",
  },
  {
    number: "04",
    name: "API Design & Integration",
    description:
      "Building structured API endpoints with validation, error handling, and rate limiting. Integrating third-party services like OpenAI, Gemini, and Firebase into applications.",
  },
  {
    number: "05",
    name: "Database & Cloud",
    description:
      "Schema design and query optimization across PostgreSQL and MongoDB. Deploying with Docker, managing environments, and setting up CI/CD pipelines for reliable releases.",
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
