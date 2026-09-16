import { workExperience } from "@/lib/data";
import TimelineItem from "./TimelineItem";
import Section from "./ui/section";
import MotionWrapper from "./MotionWrapper";

export default function ExperienceSection() {
  return (
    <Section
      id="experience"
      title="Expérience professionnelle"
      lead="Du développement métier à l’industrialisation des déploiements."
    >
      {workExperience.map((job, index) => (
        <MotionWrapper key={job.company + job.period} delay={index * 0.08}>
          <TimelineItem
            title={job.position}
            subtitle={`${job.company} · ${job.location}`}
            date={job.period}
            logoSrc={job.logo}
            logoAlt={`Logo ${job.company}`}
            isLast={index === workExperience.length - 1}
          >
            <ul className="mt-4 space-y-2.5">
              {job.achievements.map((achievement) => (
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
    </Section>
  );
}
