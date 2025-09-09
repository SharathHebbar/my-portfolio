import { motion } from "framer-motion";
import { BookOpen, ExternalLink } from "lucide-react";

import { MotionSection, Badge } from "./Assets";

const real_time_projects = [
  {
    title: "Automated Custom Segments for Enhanced Targeting: MicroSegmentation",
    skills: ["SQL", "PySpark", "Python", "Clustering", "GenAI", "Big Data", "LLM"],
    year: "Apr 2024 - Aug 2025",
    bullets: [
      `Designed and implemented a data-driven segmentation solution using SQL, Python, PySpark, and K-Means Clustering to
      categorize Healthcare Professionals (HCPs) based on their engagement and activity patterns.`,
      `Created a customer engagement score to evaluate HCPs’ engagement, utilized prescription, 
      and sales potential to calculate HCPs potential.`,
      `Segmented HCPs using K-Means Clustering based on Engagement, Prescription, and Sales potential.`,
      `Deployed the system across multiple markets, enhancing targeted marketing strategies and 
      improving HCP engagement, resulting in more efficient targeting and better outcomes.`
    ],
  },
  {
    title: "Power AI",
    skills: ["Python", "GenAI", "PowerBI", "FastAPI", "LangChain", "LangGraph", "Text-to-SQL"],
    year: "June 2024 - Jan 2025",
    bullets: [
      `Integrated AI into PowerBI using Python, GPT-4, and a Agentic Framework to enable advanced summarization
       and interactive data conversations.`,
      `Developed a Agentic AI framework that ingests structured data from PowerBI sources, generates relevant questions, 
      dynamically creates and executes code to retrieve answers, and compiles Q&A pairs to automate 
      chart-level and dashboard summaries, enhancing rapid insight extraction 
      and improving data comprehension by over 60%.`,
      `Built a custom chatbot to deliver tailored, actionable business insights, significantly improving user experience,
      decision-making speed, and dashboard accessibility.`,
      `Segmented HCPs using K-Means Clustering based on Engagement, Prescription, and Sales potential.`,
    ],
  },
   {
    title: "Customer Churn",
    skills: ["Python", "Traditional ML Algorithms", "GCP", "Vertex AI", "Data Analytics and Engineering"],
    year: "Oct 2023 - Jan 2024",
    bullets: [
      `Predicting Customer Churn based on historical data. Built a solution using Python and traditional ML 
      techniques like Random Forest, XGBoost, CatBoost, and Artificial Neural Network`,
      `The dataset had 20M records with data ranging from the past 5 years to till date.`,
      ` This system can be used for Customer Retention, Revenue Retention, 
      and Operational Efficiency.`
    ],
  },
   {
    title: "Custom Synthetic Document Generator",
    skills: ["Python", "FastAPI", "GCP", "Vertex AI", "Document AI", "Git", "Firestore", "GenAI"],
    year: "Aug 2022 - Sep 2023",
    bullets: [
      `Built an End-to-End Synthetic Document Generator using Python, FastAPI, Document AI, PaLM API, and Google Services.`,
      `Enabled users to upload, modify, and generate synthetic documents, ensuring PII security.`,
      `Utilized for creating synthetic datasets for Machine Learning applications and accelerating internal projects, 
      reducing document preparation time and effort.`,
      `Automated dataset tagging during custom processor training in GCP’s Document AI, cutting annotation time by 50%.`
    ],
  },
];

export function RealTimeProjects() {
  return (
    <MotionSection id="pubs" title="Real Time Projects" icon={BookOpen}>
      <div className="space-y-4">
        {real_time_projects.map((p) => (
          <div key={p.title} className="flex flex-wrap items-center gap-2 justify-between rounded-2xl border border-neutral-800 p-4 bg-neutral-950/40">
            
            <div className="flex flex-col gap-2">
                <div className="flex justify-between items-start">
                    {/* Left side: Title + Skills */}
                    <div>
                    <h3 className="text-lg font-bold">{p.title}</h3>
                    <div className="mt-2 flex flex-wrap gap-2">
                        {p.skills.map((s) => (
                        <Badge key={s}>{s}</Badge>
                        ))}
                    </div>
                    </div>


                    <span className="text-sm text-neutral-400">{p.year}</span>
                </div>

                
                <ul className="mt-3 list-disc pl-5 text-neutral-300">
                    {p.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                    ))}
                </ul>
                </div>

          </div>
          
        ))}
      </div>
    </MotionSection>
  );
}