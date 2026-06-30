import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const projectDetails = {
  Presetify: {
    features: [
      "Community-driven equalizer preset sharing platform",
      "Advanced search and filtering by device, platform, and genre",
      "User rating and review system for presets",
      "AI-powered preset recommendations using OpenAI",
      "PostgreSQL database with optimized queries for fast discovery",
      "Responsive React frontend with real-time updates",
    ],
    architecture: "MERN Stack with PostgreSQL replacing MongoDB for relational data. REST API with Express.js. OpenAI API integration for intelligent recommendations.",
    challenge: "Handling large audio preset data efficiently while maintaining fast search. Solved by implementing PostgreSQL full-text search and indexing.",
  },
  Vitaboo: {
    features: [
      "AI-powered self-health diagnostics",
      "Personalized wellness guidance and recommendations",
      "Symptom checker with intelligent routing",
      "Health tracking dashboard with historical data",
      "Cross-platform mobile app with Flutter",
      "Firebase backend for real-time data sync",
    ],
    architecture: "Flutter mobile app with Firebase (Auth, Firestore, Cloud Functions). OpenAI API for diagnostic intelligence and wellness recommendations.",
    challenge: "Ensuring accurate AI health guidance without medical liability. Implemented clear disclaimers and confidence scoring for all recommendations.",
  },
  "Grievance System": {
    features: [
      "Role-based access control (Admin, Officer, Student)",
      "Complaint tracking with status updates and notifications",
      "Document upload for proof and evidence",
      "AI chatbot for instant grievance assistance",
      "Analytics dashboard for administration",
      "Email notifications for status changes",
    ],
    architecture: "MERN stack with JWT authentication. Role-based middleware for access control. OpenAI-powered chatbot for FAQ and initial triage.",
    challenge: "Managing complex role hierarchies and ensuring data privacy. Implemented middleware-based authorization and encrypted file uploads.",
  },
  ION: {
    features: [
      "Structured mental health questionnaires",
      "AI-assisted personalized guidance using Gemini",
      "Progress tracking and mood journaling",
      "Resource recommendations based on responses",
      "Cross-platform Flutter mobile app",
      "Firebase integration for secure data storage",
    ],
    architecture: "Flutter with Firebase (Auth, Firestore). Gemini API for generating contextual guidance and coping strategies based on user responses.",
    challenge: "Creating sensitive, empathetic AI responses for mental health. Fine-tuned Gemini prompts with safety guidelines and therapist-reviewed templates.",
  },
};

export default function ProjectModal({ project, isOpen, onClose }) {
  if (!project) return null;
  const details = projectDetails[project.name];
  if (!details) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-4 sm:inset-8 md:inset-16 lg:inset-24 z-50 overflow-y-auto rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA]/30 bg-[#0C0C0C] p-6 sm:p-8 md:p-12"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 sm:top-8 sm:right-8 text-[#D7E2EA]/60 hover:text-[#D7E2EA] transition-colors cursor-pointer bg-transparent border-none"
            >
              <X size={32} />
            </button>

            <div className="max-w-4xl mx-auto">
              <span className="text-[#D7E2EA]/40 font-medium text-sm uppercase tracking-wider">
                {project.category}
              </span>
              <h2
                className="text-[#D7E2EA] font-black uppercase mt-2"
                style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
              >
                {project.name}
              </h2>
              <p className="text-[#D7E2EA]/50 font-medium uppercase tracking-wider text-sm mt-2">
                {project.tech}
              </p>

              <div className="mt-8 sm:mt-12 space-y-8">
                <div>
                  <h3 className="text-[#BBCCD7] font-bold uppercase tracking-wider text-sm mb-4">
                    Key Features
                  </h3>
                  <ul className="space-y-3">
                    {details.features.map((f, i) => (
                      <li
                        key={i}
                        className="text-[#D7E2EA]/80 font-light flex items-start gap-3"
                      >
                        <span className="text-[#B600A8] mt-1 flex-shrink-0">→</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-[#BBCCD7] font-bold uppercase tracking-wider text-sm mb-4">
                    Architecture
                  </h3>
                  <p className="text-[#D7E2EA]/80 font-light leading-relaxed">
                    {details.architecture}
                  </p>
                </div>

                <div>
                  <h3 className="text-[#BBCCD7] font-bold uppercase tracking-wider text-sm mb-4">
                    Key Challenge
                  </h3>
                  <p className="text-[#D7E2EA]/80 font-light leading-relaxed">
                    {details.challenge}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
