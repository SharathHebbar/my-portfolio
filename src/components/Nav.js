import { Github, Linkedin, Mail} from "lucide-react";

import {ME} from "./Assets"

export default function Nav() {
  const items = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#pubs", label: "Real Time Projects" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <div className="sticky top-0 z-50 backdrop-blur bg-neutral-950/60 border-b border-neutral-800">
      <nav className="max-w-6xl mx-auto px-6 sm:px-8 py-3 flex items-center justify-between">
        <a href="#" className="font-extrabold tracking-tight text-lg">
          <span className="text-lime-400">SSH</span>·<span>Portfolio</span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm">
          {items.map((it) => (
            <a key={it.href} href={it.href} className="text-neutral-300 hover:text-white">
              {it.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a href={ME.github} target="_blank" rel="noreferrer noopener" className="p-2 rounded-xl hover:bg-neutral-900">
            <Github className="w-5 h-5" />
          </a>
          <a href={ME.linkedin} target="_blank" rel="noreferrer noopener" className="p-2 rounded-xl hover:bg-neutral-900">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href={`mailto:${ME.email}`} className="p-2 rounded-xl hover:bg-neutral-900">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </nav>
    </div>
  );
}
