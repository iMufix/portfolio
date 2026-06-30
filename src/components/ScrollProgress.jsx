import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = (scrollTop / docHeight) * 100;
      setProgress(scrollProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-[9998] bg-transparent">
      <motion.div
        className="h-full"
        style={{
          width: `${progress}%`,
          background: "linear-gradient(90deg, #18011F, #B600A8, #7621B0, #BE4C00)",
        }}
        transition={{ duration: 0.1 }}
      />
    </div>
  );
}
