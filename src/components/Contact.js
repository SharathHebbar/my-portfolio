import { motion} from "framer-motion";
import {Mail, ArrowRight} from "lucide-react";

import { MotionSection } from "./Assets";

export default function Contact() {
  return (
    <MotionSection id="contact" title="Contact" icon={Mail}>
      <div className="rounded-2xl border border-neutral-800 p-6 bg-neutral-950/40">
        <p className="text-neutral-300">Have a project or a role in mind? Let’s talk.</p>
        <form className="mt-4 grid gap-3 sm:grid-cols-2">
          <input className="bg-neutral-900/60 border border-neutral-800 rounded-xl p-3 sm:col-span-1" placeholder="Name" />
          <input className="bg-neutral-900/60 border border-neutral-800 rounded-xl p-3 sm:col-span-1" placeholder="Email" />
          <input className="bg-neutral-900/60 border border-neutral-800 rounded-xl p-3 sm:col-span-2" placeholder="Subject" />
          <textarea className="bg-neutral-900/60 border border-neutral-800 rounded-xl p-3 sm:col-span-2" rows={5} placeholder="Message" />
          <button type="button" className="sm:col-span-2 inline-flex items-center gap-2 bg-lime-400 text-black font-bold px-5 py-3 rounded-xl w-max">
            Send Message <ArrowRight className="w-5 h-5" />
          </button>
        </form>
      </div>
    </MotionSection>
  );
}