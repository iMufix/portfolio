function double(array) {
  return [...array, ...array];
}

const cardGradients = [
  "linear-gradient(135deg, #18011F 0%, #2D0A33 50%, #B600A8 100%)",
  "linear-gradient(135deg, #0C0C0C 0%, #1a1a2e 50%, #16213e 100%)",
  "linear-gradient(135deg, #B600A8 0%, #7621B0 50%, #4a148c 100%)",
  "linear-gradient(135deg, #18011F 0%, #330033 50%, #660066 100%)",
  "linear-gradient(135deg, #0C0C0C 0%, #141e30 50%, #243b55 100%)",
  "linear-gradient(135deg, #7621B0 0%, #9c27b0 50%, #e040fb 100%)",
  "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
  "linear-gradient(135deg, #B600A8 0%, #ff00ff 50%, #ff00cc 100%)",
  "linear-gradient(135deg, #0C0C0C 0%, #1b1b2f 50%, #2d2d44 100%)",
  "linear-gradient(135deg, #18011F 0%, #3d0c40 50%, #5e1562 100%)",
];

function MarqueeCard({ gradient, label, icon }) {
  return (
    <div
      className="w-[420px] h-[270px] rounded-2xl flex-shrink-0 relative overflow-hidden flex items-center justify-center"
      style={{ background: gradient }}
    >
      {/* Abstract circles */}
      <div
        className="absolute rounded-full opacity-20"
        style={{
          width: "180px",
          height: "180px",
          top: "-40px",
          right: "-40px",
          background: "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute rounded-full opacity-15"
        style={{
          width: "120px",
          height: "120px",
          bottom: "-30px",
          left: "-30px",
          background: "radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)",
        }}
      />
      {/* Dots pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle, #D7E2EA 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
      {/* Content */}
      <div className="relative z-10 text-center px-8">
        {icon && (
          <div className="text-[#D7E2EA]/40 text-5xl mb-3 font-black tracking-tighter">
            {icon}
          </div>
        )}
        <span className="text-[#D7E2EA] font-bold uppercase tracking-widest text-sm">
          {label}
        </span>
      </div>
    </div>
  );
}

const row1Cards = [
  { gradient: cardGradients[0], label: "React", icon: "</>" },
  { gradient: cardGradients[1], label: "Node.js", icon: "{}" },
  { gradient: cardGradients[2], label: "Flutter", icon: "F" },
  { gradient: cardGradients[3], label: "AI/ML", icon: "AI" },
  { gradient: cardGradients[4], label: "Full Stack", icon: "FS" },
  { gradient: cardGradients[5], label: "Mobile", icon: "M" },
  { gradient: cardGradients[6], label: "Backend", icon: "B" },
  { gradient: cardGradients[7], label: "Design", icon: "D" },
  { gradient: cardGradients[8], label: "Database", icon: "DB" },
  { gradient: cardGradients[9], label: "Cloud", icon: "C" },
  { gradient: cardGradients[0], label: "API", icon: "API" },
];

const row2Cards = [
  { gradient: cardGradients[5], label: "Java", icon: "J" },
  { gradient: cardGradients[6], label: "Python", icon: "Py" },
  { gradient: cardGradients[7], label: "TypeScript", icon: "TS" },
  { gradient: cardGradients[8], label: "Dart", icon: "Dt" },
  { gradient: cardGradients[9], label: "Git", icon: "G" },
  { gradient: cardGradients[0], label: "Docker", icon: "Do" },
  { gradient: cardGradients[1], label: "Firebase", icon: "Fb" },
  { gradient: cardGradients[2], label: "MongoDB", icon: "Mg" },
  { gradient: cardGradients[3], label: "PostgreSQL", icon: "Pg" },
  { gradient: cardGradients[4], label: "OpenAI", icon: "O" },
];

export default function MarqueeSection() {
  return (
    <section className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden">
      <div className="flex flex-col gap-3">
        {/* Row 1 - moves RIGHT */}
        <div className="overflow-hidden">
          <div className="carousel-track flex gap-3 w-max">
            {double(row1Cards).map((card, i) => (
              <MarqueeCard
                key={i}
                gradient={card.gradient}
                label={card.label}
                icon={card.icon}
              />
            ))}
          </div>
        </div>

        {/* Row 2 - moves LEFT */}
        <div className="overflow-hidden">
          <div className="carousel-track-reverse flex gap-3 w-max">
            {double(row2Cards).map((card, i) => (
              <MarqueeCard
                key={i}
                gradient={card.gradient}
                label={card.label}
                icon={card.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
