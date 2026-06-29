import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AnimatedText({ text, className }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const words = text.split(" ");

  return (
    <p ref={containerRef} className={className} aria-label={text}>
      {words.map((word, index) => {
        const start = index / words.length;
        const end = (index + 1) / words.length;
        return (
          <Word
            key={index}
            word={word}
            progress={scrollYProgress}
            start={start}
            end={end}
          />
        );
      })}
    </p>
  );
}

function Word({ word, progress, start, end }) {
  const opacity = useTransform(progress, [start, end], [0.2, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block mr-[0.3em]">
      {word}
    </motion.span>
  );
}
