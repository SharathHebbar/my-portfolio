import { useMemo } from "react";
import { motion } from "framer-motion";
import { Cpu, Database} from "lucide-react";

import { Badge, MotionSection } from "./Assets";

const skills = {
  "AI Engineering": ["Prompt Engineering", "RAG", "Agents", "Evaluation", "Guardrails", "Fine Tuning Language Models"],
  "ML Engineering": ["Supervised ML", "Unsupervised ML", "Neural Networks", "NLP", "Deep Learning", "Transfer Learning", "Fine Tuning"],
  "AI / ML Frameworks": ["LangChain", "LangGraph", "CrewAI", "PyTorch", "TensorFlow", "Scikit-learn", "XGBoost", "SpaCy", "NLTK", "HuggingFace"],
  "Languages and Databases": ["Python", "C", "C++", "SQL", "NoSQL"],
  "Libraries and Frameworks": ["FastAPI", "Postgres", "MySQL", "MongoDB", "Firestore/Firebase", "Flask", "Streamlit", "DuckDB", "PySpark", "Spark"],
  "Platform and DevOps": ["GCP", "Azure", "Git", "GitHub", "GitLab", "Docker", "MLflow", "Vertex AI", "Document AI", "Databricks", "GCR", "ACR"],
  // "Cloud": ["Azure", "GCP", "AWS"],
};

export default function Skills() {
  const entries = useMemo(() => Object.entries(skills), []);
  return (
    <MotionSection id="skills" title="Skills" icon={Cpu}>
      <div className="grid gap-6 sm:grid-cols-2">
        {entries.map(([group, items]) => (
          <motion.div
            key={group}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl border border-neutral-800 p-5 bg-neutral-950/40"
          >
            <h3 className="font-bold mb-3 flex items-center gap-2"><Database className="w-4 h-4" /> {group}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((s) => (
                <Badge key={s}>{s}</Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </MotionSection>
  );
}
