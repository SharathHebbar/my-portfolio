import { motion } from "framer-motion";
import { GlobeLock } from "lucide-react";
import { MotionSection, Badge } from "./Assets";

const real_time_projects = [
  {
    title: "Conversation Intelligence Pipeline",
    skills: ["Python", "Gen AI", "Prompt Engineering", "LLM", "Speech to Text", "Azure Cloud", "Summarization"],
    year: "May 2025 - Aug 2025",
    bullets: [
      `Built an end-to-end Conversational Intelligence Pipeline to process Medical Representative (Med Rep) to Healthcare Professional (HCP) audio interactions for actionable insights.`,
      `Implemented modules for transcription, translation, medical terminology correction, speaker diarization, and summarization, ensuring accuracy in domain-specific conversations.`,
      `Leveraged LLMs for correction of biomedical terms, role-based speaker assignment, and generation of structured summaries capturing Agreed Actions, Areas of Interest, and Objections.`,
      `Applied evaluation metrics such as Word Error Rate (WER), BLEU score, and precision/recall to measure pipeline performance across stages.`,
      `Ensured pipeline scalability, low-latency processing, and compliance with healthcare data privacy regulations (HIPAA/GDPR).`,
      `Enabled pharma organizations to derive business value by tracking HCP concerns, improving Med Rep engagement, and strengthening decision-making through structured insights.`
    ],
  },
  {
    title: "Automated Custom Segments for Enhanced Targeting -  MicroSegmentation",
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
    title: "Customer Churn Prediction",
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
  {
    title: "AI for Prostate Cancer",
    skills: ["Python", "Descriptive Statistics", "Inferential Statistics", "Vertex AI", "XGBoost", "Random Forest", "GCP"],
    year: "May 2022 - Aug 2022",
    bullets: [
      `Built using Python, Traditional Machine Learning Algorithms to validate the research hypothesis around prostate cancer prediction.`,
      `Performed statistical hypothesis testing (p-value analysis, Z-test, and T-test) to establish the significance of observed differences across patient groups and validate the reliability of predictive features.`,
      `Applied feature importance techniques (e.g., from tree-based models and SHAP analysis) to identify critical clinical and demographic variables impacting disease progression and risk assessment.`,
      `Developed two XGBoost classifier models, tailored separately for two racial cohorts, achieving F1-scores of 0.71 and 0.74, and compared performance to evaluate race-specific risk factors.`,
      `Demonstrated the potential clinical applicability of the hypothesis, where models can serve as a decision-support tool in medical institutes for early screening and pre-judgment of prostate cancer risk.`
    ],
  },
    {
    title: "Sentiment Analysis",
    skills: ["Python", "HuggingFace", "Transformers", "Natural Language Processing", "BERT", "RoBERTa", "XLNet", "DistilBERT"],
    year: "Apr 2022 - May 2022",
    bullets: [
      `Developed a proof-of-concept Sentiment Analysis system leveraging state-of-the-art Transformer architectures such as BERT, RoBERTa, DistilBERT, and XLNet.`,
      `Preprocessed and fine-tuned models on sentiment datasets, applying techniques like tokenization, attention masking, and transfer learning for robust performance.`,
      `Benchmarked multiple Transformer models, comparing accuracy, inference speed, and memory efficiency to identify trade-offs across use cases.`,
      `Achieved 80% accuracy in classification tasks, validating the effectiveness of modern NLP models for sentiment analysis in real-world applications.`,
    ],
  },
];

export default function RealTimeProjects() {
  return (
    <MotionSection id="rwprojects" title="Real World Projects" icon={GlobeLock}>
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