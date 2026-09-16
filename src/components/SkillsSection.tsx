import { skills } from "@/lib/data";
import { motion } from "framer-motion";
import {
  Cloud,
  Brain,
  GitBranch,
  Activity,
  Code2,
  Server,
  MonitorSmartphone,
  Database,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Section from "./ui/section";
import { GlassCard } from "./ui/glass-card";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
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
  icon: LucideIcon;
  highlight?: boolean;
  /** Occupe les deux colonnes pour fermer la grille sans ligne orpheline. */
  wide?: boolean;
}> = [
  { key: "devopsCloud", label: "DevOps & Cloud", icon: Cloud, highlight: true },
  { key: "aiData", label: "IA & Data", icon: Brain, highlight: true },
  { key: "cicd", label: "CI/CD & qualité", icon: GitBranch },
  { key: "observability", label: "Observabilité", icon: Activity },
  { key: "programmingLanguages", label: "Langages", icon: Code2 },
  { key: "backend", label: "Back-end", icon: Server },
  { key: "frontend", label: "Front-end", icon: MonitorSmartphone },
  { key: "databases", label: "Données & traitement", icon: Database },
  { key: "methodology", label: "Méthodologies", icon: Users, wide: true },
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
        viewport={{ once: true, amount: 0.05 }}
      >
        {skillCategories.map(({ key, label, icon: Icon, highlight, wide }) => {
          const items = skills[key];
          if (!items || items.length === 0) return null;

          return (
            <motion.div
              key={key}
              variants={cardVariants}
              className={wide ? "md:col-span-2" : undefined}
            >
              <GlassCard
                className={`h-full p-5 ${
                  highlight ? "border-brand-border bg-brand-muted" : ""
                }`}
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md ${
                      highlight
                        ? "bg-brand text-background"
                        : "bg-brand-muted text-brand"
                    }`}
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <h3 className="text-sm font-semibold tracking-tight">
                    {label}
                  </h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-md border border-border/60 bg-background/70 px-2.5 py-1 text-sm"
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
