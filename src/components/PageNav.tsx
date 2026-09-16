import { ArrowLeft, ArrowRight } from "lucide-react";
import { neighbours, hrefFor } from "@/lib/navigation";

interface PageNavProps {
  current: string;
}

/**
 * Liens vers la page precedente et la suivante. Evite les culs-de-sac
 * maintenant que le contenu est reparti sur plusieurs pages.
 */
export default function PageNav({ current }: PageNavProps) {
  const { previous, next } = neighbours(current);
  const baseUrl = import.meta.env.BASE_URL ?? "/";

  if (!previous && !next) return null;

  return (
    <nav
      className="container max-w-4xl mx-auto px-6 md:px-4 pb-12"
      aria-label="Pages voisines"
    >
      <div className="flex items-stretch gap-3 border-t border-border pt-6">
        {previous ? (
          <a
            href={hrefFor(previous.slug, baseUrl)}
            className="group flex flex-1 items-center gap-3 rounded-lg border border-border/60 p-4 hover:border-brand-border hover:bg-brand-muted transition-colors"
          >
            <ArrowLeft
              className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-brand transition-colors"
              aria-hidden="true"
            />
            <span className="min-w-0">
              <span className="block text-xs text-muted-foreground">
                Précédent
              </span>
              <span className="block text-sm font-medium truncate">
                {previous.label}
              </span>
            </span>
          </a>
        ) : (
          <span className="flex-1" />
        )}

        {next ? (
          <a
            href={hrefFor(next.slug, baseUrl)}
            className="group flex flex-1 items-center justify-end gap-3 rounded-lg border border-border/60 p-4 text-right hover:border-brand-border hover:bg-brand-muted transition-colors"
          >
            <span className="min-w-0">
              <span className="block text-xs text-muted-foreground">
                Suivant
              </span>
              <span className="block text-sm font-medium truncate">
                {next.label}
              </span>
            </span>
            <ArrowRight
              className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-brand transition-colors"
              aria-hidden="true"
            />
          </a>
        ) : (
          <span className="flex-1" />
        )}
      </div>
    </nav>
  );
}
