
import { useMemo } from "react";
import { motion} from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink, FileDown, ArrowRight, Cpu, Database, Brain, BarChart, BookOpen, Award } from "lucide-react";

// ---- Quick edit: your info ----
const ME = {
  name: "Sharath S Hebbar",
  title: "Lead AI Engineer",
  tagline: "I design and ship reliable, production-grade AI systems — from RAG and agents to MLOps at scale.",
  location: "Bengaluru, IN",
  email: "sharathshebbar@gmail.com",
  github: "https://github.com/SharathHebbar",
  linkedin: "https://www.linkedin.com/in/sharath-s-hebbar/",
  resume: "/resume.pdf", // put in /public
};

const skills = {
  "AI Engineering": ["Prompt Engineering", "RAG", "Agents", "Evaluation", "Guardrails", "Fine Tuning Language Models"],
  "AI Frameworks": ["LangChain", "LangGraph", "CrewAI"],
  "ML Engineering": ["Supervised ML", "Unsupervised ML", "Neural Networks", "NLP", "Deep Learning", "Transfer Learning", "Fine Tuning"],
  "ML Frameworks": ["PyTorch", "TensorFlow", "Scikit-learn", "XGBoost", "SpaCy", "NLTK", "HuggingFace", "Keras"],
  "Languages and Databases": ["Python", "C", "C++", "SQL", "NoSQL"],
  "Libraries and Frameworks": ["FastAPI", "Postgres", "MySQL", "MongoDB", "Firestore/Firebase", "Flask", "Streamlit", "DuckDB", "PySpark", "Spark"],
  "Platform and DevOps": ["Git", "GitHub", "GitLab", "Docker", "MLflow", "Vertex AI", "Document AI", "Databricks", "GCR", "ACR", "Cloud Run"],
  "Cloud": ["Azure", "GCP", "AWS"],
};

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
    tags: ["Machine Learning", "Clinical Analytics", "Marketing Analytics", "Customer Segmentation"],
    demo: "#",
    code: "https://github.com/SharathHebbar/Analytics",
  },
  {
    title: "LLM Engineering",
    desc: "LLM Engineering",
    tags: ["Chatbot", "Agents", "LangGraph", "LangChain", "GenAI", "RAG", "LLM"],
    demo: "#",
    code: "https://github.com/SharathHebbar/LLM-Engineering",
  },
];

const experience = [
  {
    role: "Lead AI Engineer",
    org: "Tiger Analytics",
    period: "Aug 2025 — Present",
    bullets: [
      "Led design of agentic AI platform (router, SQL/DAX agent, summarizer, memory, eval).",
      "Reduced hallucinations by 38% via retrieval scoring, plan-and-execute, and selective tool-use.",
      "Cut infra cost 27% with request caching, batch embedding, and adaptive context windows.",
    ],
  },
  {
    role: "Data Scientist",
    org: "IQVIA",
    period: "Jan 2024 — Aug 2025",
    bullets: [
      `Integrated GPT-4o into PowerBI using a Agentic AI framework to enable advanced summarization and interactive conversations
      with data visualizations, significantly enhancing data interpretation and accelerating decision-making processes.`,
      `Built an end-to-end Conversational Intelligence Pipeline to process Med Rep to HCP audio interactions, with modules for 
      transcription, translation, medical correction, speaker diarization, and summarization. Leveraged LLMs for domain-specific 
      correction of medical terms, role-based speaker assignment, and summarization to extract Agreed Actions, Areas of Interest, 
      and Objections.`,
      `Conducted comprehensive Exploratory Data Analysis (EDA) on large-scale pharma data of more than 100K+ records (one region) 
      to extract valuable insights about various promotional channels and HCPs’ engagement.`,
      `Calculated HCP Potential using 8–10 engagement channels, prescriptions, and sales data, and applied clustering to segment
      HCPs by behavior and interaction patterns. Developed targeted strategies that improved campaign focus, achieving 70–80% 
      accuracy in identifying the right Healthcare Professionals for outreach.`,
      `Collaborated with the Data Engineering team to optimize, industrialize, and scale code solutions across 12+ regions, integrating
      them into data pipelines to ensure scalability, production efficiency.`
    ],
  },
  {
    role: "Senior Machine Learning Engineer",
    org: "Quantiphi Analytics",
    period: "Feb 2022 — Jan 2024",
    bullets: [
      "Mentored and Spearheaded a team of 7 ML Interns to build a Proof of Concept based on a Multi-modal search engine.",
      `Developed a customer attrition model with 80% F-score using a large dataset of 2 million records with Machine learning
       algorithms such as XGBoost, Random Forest, CatBoost, and Artificial Neural Networks to predict customer churn.`,
       "Built a Custom Synthetic Document Generator which can be used to generate synthetic documents for training ML models.",
       `Trained a custom processor in Google Cloud Document AI using synthetic data generated by the Custom Synthetic Document 
       Generator (CSDG), automating document tagging and reducing annotation time and manual effort by 50%.`,
       "Worked on a proof-of-concept to implement Sentiment Analysis using state-of-the-art Transformer models, including BERT, RoBERTa, DistilBERT, and XLNET achieving a performance of 80%."
    ],
  },
];

const real_time_projects = [
  {
    title: "Power AI",
    skills: "ArXiv",
    year: 2024,
    link: "#",
  },
  {
    title: "Scaling Text-to-SQL with Schema Reasoning",
    venue: "Conference talk",
    year: 2024,
    link: "#",
  },
];

const real_time_projects_v2 = [
    {
    title: "Power AI",
    skills: ["SQL", "PySpark", "Python", "Clustering", "GenAI", "Big Data", "LLM"],
    year: 2023 - 2024,
    bullets: [
      `Integrated GPT-4o into PowerBI using a Agentic AI framework to enable advanced summarization and interactive conversations
      with data visualizations, significantly enhancing data interpretation and accelerating decision-making processes.`,
      `Built an end-to-end Conversational Intelligence Pipeline to process Med Rep to HCP audio interactions, with modules for 
      transcription, translation, medical correction, speaker diarization, and summarization. Leveraged LLMs for domain-specific 
      correction of medical terms, role-based speaker assignment, and summarization to extract Agreed Actions, Areas of Interest, 
      and Objections.`,
      `Conducted comprehensive Exploratory Data Analysis (EDA) on large-scale pharma data of more than 100K+ records (one region) 
      to extract valuable insights about various promotional channels and HCPs’ engagement.`,
      `Calculated HCP Potential using 8–10 engagement channels, prescriptions, and sales data, and applied clustering to segment
      HCPs by behavior and interaction patterns. Developed targeted strategies that improved campaign focus, achieving 70–80% 
      accuracy in identifying the right Healthcare Professionals for outreach.`,
      `Collaborated with the Data Engineering team to optimize, industrialize, and scale code solutions across 12+ regions, integrating
      them into data pipelines to ensure scalability, production efficiency.`
    ],
  },
  {
    title: "Automated Custom Segments for Enhanced Targeting: MicroSegmentation",
    skills: ["SQL", "PySpark", "Python", "Clustering", "GenAI", "Big Data", "LLM"],
    year: 2023 - 2024,
    bullets: [
      `Integrated GPT-4o into PowerBI using a Agentic AI framework to enable advanced summarization and interactive conversations
      with data visualizations, significantly enhancing data interpretation and accelerating decision-making processes.`,
      `Built an end-to-end Conversational Intelligence Pipeline to process Med Rep to HCP audio interactions, with modules for 
      transcription, translation, medical correction, speaker diarization, and summarization. Leveraged LLMs for domain-specific 
      correction of medical terms, role-based speaker assignment, and summarization to extract Agreed Actions, Areas of Interest, 
      and Objections.`,
      `Conducted comprehensive Exploratory Data Analysis (EDA) on large-scale pharma data of more than 100K+ records (one region) 
      to extract valuable insights about various promotional channels and HCPs’ engagement.`,
      `Calculated HCP Potential using 8–10 engagement channels, prescriptions, and sales data, and applied clustering to segment
      HCPs by behavior and interaction patterns. Developed targeted strategies that improved campaign focus, achieving 70–80% 
      accuracy in identifying the right Healthcare Professionals for outreach.`,
      `Collaborated with the Data Engineering team to optimize, industrialize, and scale code solutions across 12+ regions, integrating
      them into data pipelines to ensure scalability, production efficiency.`
    ],
  },
];

const MotionSection = ({ id, title, icon: Icon, children }) => (
  <section id={id} className="max-w-6xl mx-auto px-6 sm:px-8 py-16">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-2xl sm:text-3xl font-extrabold tracking-tight flex items-center gap-3"
    >
      <Icon className="w-6 h-6" /> {title}
    </motion.h2>
    <div className="mt-8">{children}</div>
  </section>
);

const Badge = ({ children }) => (
  <span className="px-3 py-1 rounded-full border border-neutral-700 bg-neutral-900/40 text-sm">
    {children}
  </span>
);

function Nav() {
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

function Hero() {
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
            { label: "Models shipped", value: "25+" },
            { label: "Papers/Talks", value: "8" },
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

function About() {
  return (
    <MotionSection id="about" title="About" icon={Brain}>
      <div className="prose prose-invert max-w-none text-neutral-300">
        <p>
          I specialize in building robust AI systems that move beyond demos: retrieval pipelines with strong
          evaluation, agentic workflows with tool-use, and observability to keep models reliable in production.
        </p>
        <p>
          Recently, I’ve focused on secure RAG, SQL/DAX agents for analytics, and cost-aware deployment strategies
          with batching, caching, and smart context management.
        </p>
      </div>
    </MotionSection>
  );
}

function Skills() {
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

function Projects() {
  return (
    <MotionSection id="projects" title="Projects" icon={BarChart}>
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
              <a href={p.demo} className="inline-flex items-center gap-2 text-sm text-lime-400 hover:underline">
                <ExternalLink className="w-4 h-4" /> Demo
              </a>
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

function Experience() {
  return (
    <MotionSection id="experience" title="Experience" icon={Award}>
      <div className="space-y-6">
        {experience.map((e) => (
          <motion.div
            key={e.role}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="rounded-2xl border border-neutral-800 p-5 bg-neutral-950/40"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-bold">{e.role} · {e.org}</h3>
              <span className="text-sm text-neutral-400">{e.period}</span>
            </div>
            <ul className="mt-3 list-disc pl-5 text-neutral-300">
              {e.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </MotionSection>
  );
}

function RealTimeProjects() {
  return (
    <MotionSection id="pubs" title="Real Time Projects" icon={BookOpen}>
      <div className="space-y-4">
        {real_time_projects.map((p) => (
          <div key={p.title} className="flex flex-wrap items-center gap-2 justify-between rounded-2xl border border-neutral-800 p-4 bg-neutral-950/40">
            <div>
              <p className="font-semibold">{p.title}</p>
              <p className="text-sm text-neutral-400">{p.venue} · {p.year}</p>
            </div>
            <a href={p.link} className="inline-flex items-center gap-2 text-sm text-lime-400 hover:underline">
              <ExternalLink className="w-4 h-4" /> View
            </a>
          </div>
        ))}
      </div>
    </MotionSection>
  );
}

function Contact() {
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

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <RealTimeProjects />
      <Contact />
      <footer className="border-t border-neutral-900 py-10 mt-16 text-center text-neutral-400">
        © {new Date().getFullYear()} {ME.name}. Built with React, Tailwind & Framer Motion.
      </footer>
    </div>
  );
}
