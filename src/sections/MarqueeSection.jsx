function double(array) {
  return [...array, ...array];
}

const techLogos = [
  { name: "React", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Flutter", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
  { name: "JavaScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Python", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Java", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Dart", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
  { name: "MongoDB", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "PostgreSQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Firebase", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "Git", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Docker", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Express", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "HTML5", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Tailwind", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "OpenAI", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openai/openai-original.svg" },
  { name: "GitHub", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Linux", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
];

const row1 = techLogos.slice(0, 10);
const row2 = techLogos.slice(10);

function MarqueeCard({ tech }) {
  return (
    <div className="w-[200px] h-[200px] sm:w-[220px] sm:h-[220px] rounded-2xl flex-shrink-0 relative overflow-hidden flex flex-col items-center justify-center group"
      style={{
        background: "linear-gradient(145deg, #141416 0%, #1c1c1e 100%)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)",
        border: "1px solid rgba(215, 226, 234, 0.08)",
      }}>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: "radial-gradient(circle at 50% 30%, rgba(182, 0, 168, 0.15) 0%, transparent 60%)" }} />
      <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-[#B600A8]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10 flex flex-col items-center">
        <div className="w-16 h-16 sm:w-20 sm:h-20 mb-3 relative" style={{ filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.5))", transform: "translateZ(0)" }}>
          <img src={tech.url} alt={tech.name} className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110" loading="lazy" />
        </div>
        <span className="text-[#D7E2EA]/60 font-medium uppercase tracking-wider text-[10px] sm:text-xs group-hover:text-[#D7E2EA]/90 transition-colors duration-300">{tech.name}</span>
      </div>
    </div>
  );
}

export default function MarqueeSection() {
  return (
    <section className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden">
      <div className="flex flex-col gap-4">
        <div className="overflow-hidden">
          <div className="carousel-track flex gap-4 w-max">
            {double(row1).map((tech, i) => (
              <MarqueeCard key={i} tech={tech} />
            ))}
          </div>
        </div>
        <div className="overflow-hidden">
          <div className="carousel-track-reverse flex gap-4 w-max">
            {double(row2).map((tech, i) => (
              <MarqueeCard key={i} tech={tech} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
