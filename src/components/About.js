import {Brain} from "lucide-react";

import { MotionSection } from "./Assets";

export default function About() {
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
