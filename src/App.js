import { useMemo } from "react";
import { motion} from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink, FileDown, ArrowRight, Cpu, Database, Brain, BarChart, BookOpen, Award } from "lucide-react";

import { ME, Badge,MotionSection } from "./components/Assets"
import Nav from "./components/Nav"
import Contact from "./components/Contact"
import Hero from "./components/Hero"
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience"
import RealTimeProjects from "./components/RealTimeProjects";
import Education from "./components/Education"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Nav />
      <Hero />
      {/* <About /> */}
      <Skills />
      <Projects />
      <Education />
      <Experience />
      <RealTimeProjects />
      <Contact />
      <footer className="border-t border-neutral-900 py-10 mt-16 text-center text-neutral-400">
        © {new Date().getFullYear()} {ME.name}. Built with React, Tailwind & Framer Motion.
      </footer>
    </div>
  );
}
