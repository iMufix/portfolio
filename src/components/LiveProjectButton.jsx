import { motion } from "framer-motion";

export default function LiveProjectButton({ label = "Live Project" }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05, backgroundColor: "rgba(215, 226, 234, 0.1)" }}
      whileTap={{ scale: 0.95 }}
      className="rounded-full border-2 border-[#D7E2EA] px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base font-medium uppercase tracking-widest text-[#D7E2EA] cursor-pointer bg-transparent transition-colors duration-200"
    >
      {label}
    </motion.button>
  );
}
