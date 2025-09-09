import { motion} from "framer-motion";
import { FileDown, ArrowRight} from "lucide-react";

import About from "./About";
import {ME} from "./Assets"

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-neutral-900 bg-gradient-to-b from-neutral-950 to-neutral-900">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-sm text-neutral-400">{ME.location}</p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold leading-tight">
            {ME.name}
          </h1>
          <p className="mt-2 text-xl text-neutral-300">{ME.title}</p>
          <p className="mt-4 text-neutral-300">
            {ME.tagline}
          </p>
          
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={ME.resume}
              className="inline-flex items-center gap-2 bg-lime-400 text-black font-bold px-5 py-3 rounded-xl"
            >
              <FileDown className="w-5 h-5" /> Download CV
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 border-2 border-lime-400 text-lime-400 font-bold px-5 py-3 rounded-xl group"
            >
              View Projects
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          
          {[
            { label: "Years exp", value: "3+" },
            { label: "Certifications", value: "3+" },
            { label: "Blogs", value: "54" },
            { label: "Repos", value: "100+" },
          ].map((s) => (
            <div key={s.label} className="rounded-2xl border border-neutral-800 p-4 bg-neutral-950/40">
              <p className="text-2xl font-extrabold">{s.value}</p>
              <p className="text-neutral-400 text-sm">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* glow accents */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-lime-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
    </section>
  );
}
