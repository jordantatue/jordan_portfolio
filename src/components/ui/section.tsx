import * as React from "react";
import { cn } from "@/lib/utils";
import MotionWrapper from "../MotionWrapper";

interface SectionProps {
  id: string;
  title: string;
  /** Phrase courte sous le titre, qui situe la section. */
  lead?: string;
  className?: string;
  children: React.ReactNode;
}

/**
 * Enveloppe commune a toutes les sections : meme largeur, meme rythme
 * vertical, meme hierarchie de titre.
 */
export default function Section({
  id,
  title,
  lead,
  className,
  children,
}: SectionProps) {
  return (
    <section id={id} className={cn("py-16 md:py-20", className)}>
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <header className="mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              {title}
            </h2>
            <div className="mt-3 h-px w-12 bg-brand" aria-hidden="true" />
            {lead && (
              <p className="mt-4 text-sm text-muted-foreground max-w-2xl">
                {lead}
              </p>
            )}
          </header>
        </MotionWrapper>
        {children}
      </div>
    </section>
  );
}
