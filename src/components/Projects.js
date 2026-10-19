import { motion } from "framer-motion";
import { Github , Folder} from "lucide-react";
import { MotionSection, Badge } from "./Assets";

const projects = [
  {
    title: "HCP Targeting",
    desc: "HCP Targeting using System One Model",
    tags: ["Machine Learning", "Data Science", "GenAI", "LLMs", "Pharma", "System One Model"],
    demo: "https://hcp-targeting-nba.streamlit.app/",
    code: "https://github.com/SharathHebbar/HCP_Targeting",
  },
  {
  title: "Quantitative Finance",
    desc: "Quantitative Finance and Algorithmic Trading",
    tags: ["Machine Learning", "Data Science", "GenAI", "Finance", "Low Latency", "Algo Trading"],
    demo: "https://hcp-targeting-nba.streamlit.app/",
    code: "https://github.com/SharathHebbar/Quantitative-Finance",
  },
  {
    title: "Machine Learning Projects List",
    desc: "List of all ML Projects",
    tags: ["Machine Learning", "Data Science", "AI Engineering", "GenAI", "LLMs", "Traditional ML", "Deep Learning"],
    demo: "#",
    code: "https://github.com/SharathHebbar/ML-Project-list",
  },
  {
    title: "Instruction Tuned SLM",
    desc: "Instruction Fine Tuning SLM (smollm) for JSON Output",
    tags: ["HuggingFace", "FineTuning", "Language Model", "TRL"],
    demo: "#",
    code: "https://github.com/SharathHebbar/smol_lm_finetuned_instruction",
  },
  {
    title: "AI Engineering",
    desc: "AI Inference Engineering",
    tags: ["AI Inference", "Agentic AI", "CUDA", "Low Latency", "Edge and Local AI", "RAG", "Serving"],
    demo: "#",
    code: "https://github.com/SharathHebbar/AI-Engineering",
  },
  {
    title: "LLM Engineering",
    desc: "LLM Engineering",
    tags: ["Agents", "LangGraph", "RAG", "Generative AI", "Agentic AI", "LLM", "LangChain"],
    demo: "#",
    code: "https://github.com/SharathHebbar/LLM-Engineering",
  },
  {
    title: "Transformers",
    desc: "Attention is all you need.",
    tags: ["LLMs", "Transformers", "HuggingFace", "Opensource", "NLP", "Embeddings", "Tokenization"],
    demo: "#",
    code: "https://github.com/SharathHebbar/Transformers",
  },
  {
    title: "ML Model Serving with FastAPI and Redis",
    desc: "ML Model Serving with FastAPI and Redis",
    tags: ["Machine Learning", "Data Science", "MLOps", "Redis", "FastAPI"],
    demo: "#",
    code: "https://github.com/SharathHebbar/ML-Model-Serving-with-FastAPI-and-Redis",
  },
  {
    title: "Analytics",
    desc: "Marketing Analytics, Clinical Analytics",
    tags: ["Machine Learning", "Data Science", "Clinical Analytics", "Marketing Analytics", "Customer Segmentation"],
    demo: "#",
    code: "https://github.com/SharathHebbar/Analytics",
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
