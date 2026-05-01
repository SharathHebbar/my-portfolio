import {Brain} from "lucide-react";

import { MotionSection } from "./Assets";

export default function About() {
  return (
    <MotionSection id="about" title="About" icon={Brain}>
      <div className="prose prose-invert max-w-none text-neutral-300">
        <p>
          AI / ML Engineer with 3.8+ years of full-time experience working in Retail, Pharma, Medical and Product
          development domains.
        </p>
        <p>
          With expertise in the end-to-end process of building, designing, deploying, and delivering Machine Learning
          products and solutions.
        </p>
        <p>
          Proficiency in utilizing, building, pre-training, and fime-tuning Machine Learning models to address a wide
          range of business challenges effectively.
        </p>
        <p>
          Additionally, equipped strong skills in data pre-processing, feature engineering, feature selection, model
          development, deployment, interpretability, and monitoring.
        </p>
      </div>
    </MotionSection>
  );
}
