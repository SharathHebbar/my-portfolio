import { motion } from "framer-motion";
import { Github , Folder} from "lucide-react";
import { MotionSection, Badge } from "./Assets";

const projects = [
  // {
  //   title: "Machine Learning Projects List",
  //   desc: "List of all ML Projects",
  //   tags: ["Machine Learning", "Data Science", "AI Engineering", "GenAI", "LLMs", "Traditional ML", "Deep Learning"],
  //   demo: "#",
  //   code: "https://github.com/SharathHebbar/ML-Project-list",
  // },
  {
    title: "Transformers",
    desc: "Attention is all you need.",
    tags: ["LLMs", "Transformers", "HuggingFace", "Opensource", "Embeddings", "Tokenization"],
    demo: "#",
    code: "https://github.com/SharathHebbar/Transformers",
  },
  {
    title: "Analytics",
    desc: "Marketing Analytics, Clinical Analytics",
    tags: ["Machine Learning", "Data Science", "Clinical Analytics", "Marketing Analytics", "Customer Segmentation"],
    demo: "#",
    code: "https://github.com/SharathHebbar/Analytics",
  },
  {
    title: "LLM Engineering",
    desc: "LLM Engineering",
    tags: ["Chatbot", "Agents", "LangGraph", "LangChain", "Generative AI", "RAG", "LLM", "Agentic AI"],
    demo: "#",
    code: "https://github.com/SharathHebbar/LLM-Engineering",
  },
];


export default function Projects() {
  return (
    <MotionSection id="projects" title="Projects" icon={Folder}>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="group rounded-2xl border border-neutral-800 bg-neutral-950/40 p-5 hover:border-lime-400/60"
          >
            <h3 className="text-lg font-bold">{p.title}</h3>
            <p className="mt-2 text-neutral-300 text-sm">{p.desc}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-3">
              <a href={p.code} className="inline-flex items-center gap-2 text-sm text-neutral-300 hover:underline">
                <Github className="w-4 h-4" /> Code
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </MotionSection>
  );
}
