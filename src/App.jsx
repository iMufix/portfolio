import SplashCursor from "./components/SplashCursor";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";
import HeroSection from "./sections/HeroSection";
import StatsBar from "./sections/StatsBar";
import MarqueeSection from "./sections/MarqueeSection";
import AboutSection from "./sections/AboutSection";
import SkillsSection from "./sections/SkillsSection";
import TechStackSection from "./sections/TechStackSection";
import TimelineSection from "./sections/TimelineSection";
import ProjectsSection from "./sections/ProjectsSection";
import HobbiesSection from "./sections/HobbiesSection";
import StayUpdatedSection from "./sections/StayUpdatedSection";
import ContactSection from "./sections/ContactSection";

function App() {
  return (
    <>
      <SplashCursor />
      <ScrollProgress />
      <BackToTop />
      <div className="main-wrapper">
        <HeroSection />
        <StatsBar />
        <MarqueeSection />
        <AboutSection />
        <SkillsSection />
        <TechStackSection />
        <TimelineSection />
        <ProjectsSection />
        <HobbiesSection />
        <StayUpdatedSection />
        <ContactSection />
      </div>
    </>
  );
}

export default App;
