import { useState } from "react";
import { motion } from "framer-motion";

export default function FlowingMenu({ text, className, onClick }) {
  const [hovered, setHovered] = useState(false);
  const chars = text.split("");

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.03,
      },
    },
  };

  const child = {
    hidden: { y: 0 },
    visible: {
      y: -4,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`bg-transparent border-none cursor-pointer ${className}`}
    >
      <motion.span
        variants={container}
        initial="hidden"
        animate={hovered ? "visible" : "hidden"}
        className="inline-flex"
      >
        {chars.map((char, i) => (
          <motion.span
            key={i}
            variants={child}
            className="inline-block"
            style={{ whiteSpace: char === " " ? "pre" : "normal" }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.span>
    </button>
  );
}
