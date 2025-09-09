import { motion } from "framer-motion";
import { Github, ExternalLink, ShieldCheck} from "lucide-react";

import { MotionSection, Badge } from "./Assets";
const certifications = [
  {
    title: "Associate Cloud Engineer",
    issued_by: "Google",
    issued_date: "31-Oct-2022",
    exp_date: "31-Oct-2025",
    link: "https://www.credential.net/89681ca7-c10f-48c6-8ee4-79fc33cee4b2#acc.LO9kjHWm",
    photo: "./ace.png",
  },
  {
    title: "Professional MLE",
    issued_by: "Google",
    issued_date: "02-Jan-2023",
    exp_date: "02-Jan-2025",
    link: "https://www.credential.net/60a72451-d5e3-4095-a464-40a683efebc7#acc.WEh4Xewn",
    photo: "./pmle.png",
  },
  {
    title: "Machine Learning Specialty",
    issued_by: "AWS",
    issued_date: "21-Oct-2023",
    exp_date: "21-Oct-2026",
    link: "https://www.credly.com/badges/aa876a30-55b5-4c6b-bcc5-ab08feb4a978/public_url",
    photo: "./aws.png",
  },
];


export default function Certifications() {
  return (
    <MotionSection id="certifications" title="Certifications" icon={ShieldCheck}>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((p) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="group rounded-2xl border border-neutral-800 bg-neutral-950/40 p-5 hover:border-lime-400/60"
          >
            {/* <h3 className="text-lg font-bold">{p.title}</h3>
            <p className="mt-2 text-neutral-300 text-sm">Issued By: {p.issued_by}</p>
            <p className="mt-2 text-neutral-300 text-sm">Issued Date: {p.issued_date}</p>
            <p className="mt-2 text-neutral-300 text-sm">Expiry Date: {p.exp_date}</p>
            <div className="mt-4 flex items-center gap-3">
              <a href={p.link} className="inline-flex items-center gap-2 text-sm text-neutral-300 hover:underline">
                <ExternalLink className="w-4 h-4" /> Certification Link
              </a>
            </div> */}
            
            <img src={p.photo} alt="Photo" />
            
          </motion.div>
        ))}
      </div>
    </MotionSection>
  );
}
