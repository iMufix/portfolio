import SplashCursor from "./components/SplashCursor";
import HeroSection from "./sections/HeroSection";
import MarqueeSection from "./sections/MarqueeSection";
import AboutSection from "./sections/AboutSection";
import SkillsSection from "./sections/SkillsSection";
import TechStackSection from "./sections/TechStackSection";
import ProjectsSection from "./sections/ProjectsSection";
import ContactSection from "./sections/ContactSection";

function App() {
  return (
    <div className="main-wrapper">
      <SplashCursor />
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <SkillsSection />
      <TechStackSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}

export default App;
