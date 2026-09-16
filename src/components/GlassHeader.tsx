import ThemeToggle from "./ui/theme-toggle";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { pages, hrefFor } from "@/lib/navigation";

interface GlassHeaderProps {
  /** Slug de la page courante, pour marquer l'onglet actif. */
  current: string;
}

export default function GlassHeader({ current }: GlassHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((open) => !open);

  const baseUrl = import.meta.env.BASE_URL ?? "/";

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/70">
      <div className="container max-w-4xl mx-auto px-6 md:px-4 h-16 flex items-center justify-between">
        <a
          href={hrefFor("", baseUrl)}
          className="flex items-center gap-2.5 font-semibold tracking-tight hover:text-brand transition-colors"
        >
          <img
            src={`${baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`}logos/site_logo.png`}
            alt=""
            width={32}
            height={32}
            className="h-8 w-8 rounded-md object-contain"
            aria-hidden="true"
          />
          <span className="hidden sm:inline">{personalInfo.name}</span>
        </a>

        <nav className="hidden md:flex items-center gap-1 text-sm">
          {pages.map(({ slug, label }) => {
            const isActive = slug === current;
            return (
              <a
                key={slug || "home"}
                href={hrefFor(slug, baseUrl)}
                aria-current={isActive ? "page" : undefined}
                className={`rounded-md px-3 py-1.5 transition-colors ${
                  isActive
                    ? "bg-brand-muted font-medium text-brand"
                    : "text-muted-foreground hover:text-brand"
                }`}
              >
                {label}
              </a>
            );
          })}
          <a
            href={`mailto:${personalInfo.email}`}
            className="ml-2 rounded-md border border-brand-border bg-brand-muted px-3 py-1.5 font-medium hover:bg-brand hover:text-background transition-colors"
          >
            Me contacter
          </a>
        </nav>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <button
            className="md:hidden p-2 text-foreground"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden overflow-hidden border-t border-border/60 bg-background/95 backdrop-blur-md"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            <nav className="flex flex-col px-6 py-2 text-sm">
              {pages.map(({ slug, label }) => {
                const isActive = slug === current;
                return (
                  <a
                    key={slug || "home"}
                    href={hrefFor(slug, baseUrl)}
                    aria-current={isActive ? "page" : undefined}
                    className={`py-3 transition-colors ${
                      isActive
                        ? "font-medium text-brand"
                        : "text-muted-foreground hover:text-brand"
                    }`}
                    onClick={toggleMenu}
                  >
                    {label}
                  </a>
                );
              })}
              <a
                href={`mailto:${personalInfo.email}`}
                className="border-t border-border/60 py-3 font-medium"
                onClick={toggleMenu}
              >
                Me contacter
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
