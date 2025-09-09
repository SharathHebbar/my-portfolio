import { motion } from "framer-motion";
import { University } from "lucide-react";

import { MotionSection } from "./Assets";


const education = [
  {
    college: "University Visvesvaraya College of Engineering",
    degree: "Bachelor of Technology in Computer Science (9.45 CGPA)",
    period: "Sep 2019 — May 2022",
    location: "Bengaluru, Karnataka, India"
  },
  {
    college: "MEI Polytechnic",
    degree: "Diploma in Computer Science (90.03 %)",
    period: "July 2016 — June 2019",
    location: "Bengaluru, Karnataka, India"
  },
];

export default function Education() {
  return (
    <MotionSection id="education" title="Education" icon={University}>
      <div className="space-y-6">
        {education.map((e) => (
          <motion.div
            key={e.role}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="rounded-2xl border border-neutral-800 p-5 bg-neutral-950/40"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-bold">{e.college}</h3>
              <span className="text-sm text-neutral-400">{e.period}</span>
            </div>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <i className="text-sm">{e.degree}</i>
              <span className="text-sm text-neutral-400">{e.location}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </MotionSection>
  );
}
