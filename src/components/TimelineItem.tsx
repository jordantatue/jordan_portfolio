import * as React from "react";
import { cn } from "@/lib/utils";

interface TimelineItemProps {
  title: string;
  subtitle: string;
  date: string;
  logoSrc?: string;
  logoAlt?: string;
  isLast?: boolean;
  children?: React.ReactNode;
}

/**
 * Entree de frise chronologique. Volontairement statique : la revelation au
 * defilement est portee par la section parente, pour n'avoir qu'un seul
 * observateur par entree plutot qu'un par ligne.
 */
export default function TimelineItem({
  title,
  subtitle,
  date,
  logoSrc,
  logoAlt,
  isLast = false,
  children,
}: TimelineItemProps) {
  const baseUrl = import.meta.env.BASE_URL ?? "/";
  const normalizedBase = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
  const resolvedLogoSrc = logoSrc ? `${normalizedBase}${logoSrc}` : "";

  return (
    <div className="relative flex gap-5">
      <div className="flex flex-col items-center">
        <div className="h-2.5 w-2.5 mt-2 shrink-0 rounded-full bg-brand ring-4 ring-background" />
        {!isLast && <div className="w-px grow bg-border" />}
      </div>

      <div className={cn("min-w-0", isLast ? "pb-0" : "pb-10")}>
        <div className={resolvedLogoSrc ? "flex items-start gap-4" : undefined}>
          {resolvedLogoSrc && (
            <div className="h-12 w-12 shrink-0 rounded-md border border-border/60 bg-white p-1.5 flex items-center justify-center overflow-hidden">
              <img
                src={resolvedLogoSrc}
                alt={logoAlt ?? ""}
                className="max-h-full max-w-full object-contain"
                loading="lazy"
              />
            </div>
          )}
          <div className="flex flex-col gap-0.5">
            <h3 className="font-semibold tracking-tight">{title}</h3>
            <p className="text-sm text-muted-foreground">{subtitle}</p>
            <p className="text-xs text-muted-foreground/70">{date}</p>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
