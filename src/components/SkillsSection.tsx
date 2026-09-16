import { skills } from "@/lib/data";
import { motion } from "framer-motion";
import Section from "./ui/section";
import { GlassCard } from "./ui/glass-card";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

/**
 * Ordre volontaire : l'infrastructure et l'IA en premier, le developpement
 * applicatif ensuite. Les deux premieres categories sont mises en avant.
 */
const skillCategories: Array<{
  key: keyof typeof skills;
  label: string;
  highlight?: boolean;
}> = [
  { key: "devopsCloud", label: "DevOps & Cloud", highlight: true },
  { key: "aiData", label: "IA & Data", highlight: true },
  { key: "cicd", label: "CI/CD & qualité" },
  { key: "observability", label: "Observabilité" },
  { key: "programmingLanguages", label: "Langages" },
  { key: "backend", label: "Back-end" },
  { key: "frontend", label: "Front-end" },
  { key: "databases", label: "Données & traitement" },
  { key: "methodology", label: "Méthodologies" },
];

export default function SkillsSection() {
  return (
    <Section
      id="skills"
      title="Compétences"
      lead="Les technologies que j’utilise en production, de l’infrastructure au modèle servi."
      className="bg-muted/20"
    >
      <motion.div
        className="grid grid-cols-1 gap-4 md:grid-cols-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {skillCategories.map((category) => {
          const items = skills[category.key];
          if (!items || items.length === 0) return null;

          return (
            <motion.div
              key={category.key}
              variants={cardVariants}
              className={category.highlight ? "md:col-span-1" : undefined}
            >
              <GlassCard
                className={`h-full p-5 ${
                  category.highlight ? "border-brand-border bg-brand-muted" : ""
                }`}
              >
                <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                  {category.label}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-md border border-border/60 bg-background/60 px-2.5 py-1 text-sm"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
