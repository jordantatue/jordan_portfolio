import { featuredProjects, otherProjects, personalInfo } from "@/lib/data";
import { Github, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Section from "./ui/section";
import { GlassCard } from "./ui/glass-card";
import MotionWrapper from "./MotionWrapper";

export default function ProjectsSection() {
  return (
    <Section
      id="projects"
      title="Projets"
      lead="Deux réalisations qui résument ma façon de travailler : un modèle mis en service et supervisé, une interface adossée à des LLM."
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {featuredProjects.map((project, index) => (
          <MotionWrapper key={project.title} delay={index * 0.12}>
            <GlassCard className="group h-full flex flex-col p-6 hover:border-brand-border">
              <h3 className="text-lg font-semibold tracking-tight group-hover:text-brand transition-colors">
                {project.title}
              </h3>

              <ul className="mt-3 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded border border-brand-border bg-brand-muted px-2 py-0.5 text-xs font-medium"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              <ul className="mt-4 space-y-2 flex-grow">
                {project.description.map((line) => (
                  <li
                    key={line.slice(0, 32)}
                    className="relative pl-4 text-sm text-muted-foreground leading-relaxed before:absolute before:left-0 before:top-2.5 before:h-1 before:w-1 before:rounded-full before:bg-brand"
                  >
                    {line}
                  </li>
                ))}
              </ul>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center self-start text-sm font-medium hover:text-brand transition-colors"
              >
                <Github className="h-4 w-4 mr-2" aria-hidden="true" />
                Voir le code
              </a>
            </GlassCard>
          </MotionWrapper>
        ))}
      </div>

      <MotionWrapper delay={0.2}>
        <div className="mt-12">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
            Projets de formation
          </h3>
          <ul className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            {otherProjects.map((project) => (
              <li key={project.title}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block border-l-2 border-border pl-4 hover:border-brand transition-colors"
                >
                  <span className="flex items-center text-sm font-medium group-hover:text-brand transition-colors">
                    {project.title}
                    <ArrowUpRight
                      className="ml-1 h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity"
                      aria-hidden="true"
                    />
                  </span>
                  <span className="mt-0.5 block text-sm text-muted-foreground">
                    {project.summary}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <motion.a
            href={`${personalInfo.github}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center text-sm font-medium hover:text-brand transition-colors"
            whileHover={{ x: 2 }}
          >
            <Github className="h-4 w-4 mr-2" aria-hidden="true" />
            Tous mes dépôts GitHub
            <ArrowUpRight className="ml-1 h-3.5 w-3.5" aria-hidden="true" />
          </motion.a>
        </div>
      </MotionWrapper>
    </Section>
  );
}
