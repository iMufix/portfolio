import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import LiveProjectButton from "../components/LiveProjectButton";
import ProjectModal from "../components/ProjectModal";

const projects = [
  {
    number: "01",
    category: "Backend + API",
    name: "Presetify",
    tech: "MERN, PostgreSQL, OpenAI API",
    description:
      "Community-driven platform with a RESTful backend for discovering, sharing, and rating audio presets. Features relational database schema design, API endpoints for CRUD operations, search with filtering, and third-party API integration for AI-powered recommendations.",
    github: "https://github.com/iMufix/Presetify",
    images: [
      "linear-gradient(135deg, #18011F 0%, #B600A8 50%, #7621B0 100%)",
      "linear-gradient(135deg, #7621B0 0%, #B600A8 50%, #18011F 100%)",
      "linear-gradient(135deg, #BE4C00 0%, #B600A8 50%, #7621B0 100%)",
    ],
  },
  {
    number: "02",
    category: "API + Mobile",
    name: "Vitaboo",
    tech: "Flutter, Firebase, OpenAI API",
    description:
      "Health diagnostics platform with cloud-connected backend using Firebase for real-time data sync, authentication, and serverless functions. OpenAI API integration powers intelligent health insights through structured API request-response flows.",
    github: "https://github.com/iMufix/Vitaboo",
    images: [
      "linear-gradient(135deg, #0C0C0C 0%, #646973 50%, #BBCCD7 100%)",
      "linear-gradient(135deg, #BBCCD7 0%, #646973 50%, #0C0C0C 100%)",
      "linear-gradient(135deg, #D7E2EA 0%, #646973 50%, #0C0C0C 100%)",
    ],
  },
    {
    number: "03",
    category: "Backend + AI",
    name: "Grievance System",
    tech: "MERN, OpenAI API",
    description:
      "Role-based university grievance management platform with a robust backend featuring JWT authentication middleware, role-based access control, file upload endpoints, and an AI-powered chatbot API for automated assistance and ticket resolution.",
    github: "https://github.com/iMufix/grievance_system_uni",
    images: [
      "linear-gradient(135deg, #18011F 0%, #7621B0 50%, #BBCCD7 100%)",
      "linear-gradient(135deg, #BBCCD7 0%, #7621B0 50%, #18011F 100%)",
      "linear-gradient(135deg, #646973 0%, #BBCCD7 50%, #D7E2EA 100%)",
    ],
  },
  {
    number: "04",
    category: "API Integration",
    name: "ION",
    tech: "Flutter, Firebase, Gemini API",
    description:
      "Mental wellness platform with structured data collection and cloud synchronization. Integrates with the Gemini API for AI-assisted guidance, featuring request/response parsing, prompt engineering, and secure API key management.",
    github: "https://github.com/iMufix/ION_APP",
    images: [
      "linear-gradient(135deg, #0C0C0C 0%, #18011F 50%, #B600A8 100%)",
      "linear-gradient(135deg, #B600A8 0%, #18011F 50%, #0C0C0C 100%)",
      "linear-gradient(135deg, #7621B0 0%, #BBCCD7 50%, #D7E2EA 100%)",
    ],
  },
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const containerRef = useRef(null);

  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <h2
        className="hero-heading font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
      >
        Projects
      </h2>

      <div ref={containerRef} className="flex flex-col gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={index}
            totalCards={projects.length}
            onSelect={() => setSelectedProject(project)}
          />
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

function ProjectCard({ project, index, totalCards, onSelect }) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={cardRef}
      className="sticky top-24 md:top-32 h-[85vh]"
      style={{ top: `${index * 28}px` }}
    >
      <motion.div
        style={{ scale }}
        className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 h-full flex flex-col gap-4 sm:gap-6"
      >
        {/* Top Row */}
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
            <span className="text-[#D7E2EA] font-black text-lg sm:text-xl md:text-2xl">
              {project.number}
            </span>
            <span className="text-[#D7E2EA] font-medium uppercase text-sm sm:text-base tracking-wider">
              {project.category}
            </span>
          </div>

          <h3
            className="text-[#D7E2EA] font-black uppercase"
            style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)" }}
          >
            {project.name}
          </h3>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LiveProjectButton label="GitHub" />
          </a>
        </div>

        {/* Tech Stack */}
        <p className="text-[#D7E2EA]/50 font-medium uppercase tracking-wider text-xs sm:text-sm">
          {project.tech}
        </p>

        {/* Description */}
        <p className="text-[#D7E2EA]/70 font-light leading-relaxed max-w-3xl">
          {project.description}
        </p>

        {/* Image Grid + Click overlay */}
        <div
          className="flex gap-4 flex-1 min-h-0 cursor-pointer relative group"
          onClick={onSelect}
        >
          <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-[#D7E2EA] font-medium uppercase tracking-widest text-sm bg-[#0C0C0C]/80 backdrop-blur-sm px-6 py-3 rounded-full border border-[#D7E2EA]/30">
              View Details
            </span>
          </div>
          <div className="w-[40%] flex flex-col gap-4">
            <div
              className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] w-full"
              style={{
                height: "clamp(130px, 16vw, 230px)",
                background: project.images[0],
              }}
            />
            <div
              className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] w-full flex-1"
              style={{
                height: "clamp(160px, 22vw, 340px)",
                background: project.images[1],
              }}
            />
          </div>
          <div className="w-[60%]">
            <div
              className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] w-full h-full"
              style={{
                background: project.images[2],
              }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
