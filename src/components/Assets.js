import { motion} from "framer-motion";

export const ME = {
  name: "Sharath S Hebbar",
  title: "Lead AI Engineer",
  tagline: "Machine Learning Engineer | AI Engineer | Building Scalable AI Solutions | Generative AI | Natural Language Processing | Optimization | Big Data",
  location: "Bengaluru, Karnataka, India",
  email: "sharathshebbar@gmail.com",
  github: "https://github.com/SharathHebbar",
  linkedin: "https://www.linkedin.com/in/sharath-s-hebbar/",
  medium: "https://medium.com/@sharathhebbar24",
  resume: "/resume.pdf", // put in /public
};

export const Badge = ({ children }) => (
  <span className="px-3 py-1 rounded-full border border-neutral-700 bg-neutral-900/40 text-sm">
    {children}
  </span>
);

export const MotionSection = ({ id, title, icon: Icon, children }) => (
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
