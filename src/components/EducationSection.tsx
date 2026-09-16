import { education, certifications, languages } from "@/lib/data";
import TimelineItem from "./TimelineItem";
import Section from "./ui/section";
import { GlassCard } from "./ui/glass-card";
import { BadgeCheck, Languages as LanguagesIcon } from "lucide-react";
import MotionWrapper from "./MotionWrapper";

export default function EducationSection() {
  return (
    <Section id="education" title="Formation" className="bg-muted/20">
      {education.map((edu, index) => (
        <MotionWrapper key={edu.institution} delay={index * 0.08}>
          <TimelineItem
            title={edu.degree}
            subtitle={`${edu.institution} · ${edu.location}`}
            date={edu.period}
            logoSrc={edu.logo}
            logoAlt={`Logo ${edu.institution}`}
            isLast={index === education.length - 1}
          >
            <ul className="mt-4 space-y-2.5">
              {edu.achievements.map((achievement) => (
                <li
                  key={achievement.slice(0, 32)}
                  className="relative pl-4 text-sm text-muted-foreground leading-relaxed before:absolute before:left-0 before:top-2.5 before:h-1 before:w-1 before:rounded-full before:bg-brand"
                >
                  {achievement}
                </li>
              ))}
            </ul>
          </TimelineItem>
        </MotionWrapper>
      ))}

      <MotionWrapper delay={0.12}>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          <GlassCard className="p-5">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-brand-muted text-brand">
                <BadgeCheck className="h-4 w-4" aria-hidden="true" />
              </span>
              <h3 className="text-sm font-semibold tracking-tight">
                Certifications
              </h3>
            </div>
            <ul className="flex flex-wrap gap-2">
              {certifications.map((cert) => (
                <li
                  key={cert.name}
                  className="rounded-md border border-border/60 bg-background/70 px-2.5 py-1 text-sm"
                >
                  {cert.name}
                </li>
              ))}
            </ul>
          </GlassCard>

          <GlassCard className="p-5">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-brand-muted text-brand">
                <LanguagesIcon className="h-4 w-4" aria-hidden="true" />
              </span>
              <h3 className="text-sm font-semibold tracking-tight">Langues</h3>
            </div>
            <ul className="space-y-2">
              {languages.map((lang) => (
                <li
                  key={lang.name}
                  className="flex items-center justify-between gap-3 rounded-md border border-border/60 bg-background/70 px-3 py-2"
                >
                  <span className="text-sm font-medium">{lang.name}</span>
                  <span className="text-xs text-muted-foreground">
                    {lang.level}
                  </span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </MotionWrapper>
    </Section>
  );
}
