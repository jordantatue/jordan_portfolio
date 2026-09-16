import ThemeToggle from "./ui/theme-toggle";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "@/lib/data";

/** Source unique des liens de navigation, partagee bureau et mobile. */
const navItems = [
  { id: "experience", label: "Expérience" },
  { id: "skills", label: "Compétences" },
  { id: "projects", label: "Projets" },
  { id: "education", label: "Formation" },
];

export default function GlassHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((open) => !open);

  const baseUrl = import.meta.env.BASE_URL ?? "/";
  const normalizedBase = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/70">
      <div className="container max-w-4xl mx-auto px-6 md:px-4 h-16 flex items-center justify-between">
        <a
          href={normalizedBase}
          className="flex items-center gap-2.5 font-semibold tracking-tight hover:text-brand transition-colors"
        >
          <img
            src={`${normalizedBase}logos/site_logo.png`}
            alt=""
            width={32}
            height={32}
            className="h-8 w-8 rounded-md object-contain"
            aria-hidden="true"
          />
          {personalInfo.name}
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className="text-muted-foreground hover:text-brand transition-colors"
            >
              {label}
            </a>
          ))}
          <a
            href={`mailto:${personalInfo.email}`}
            className="rounded-md border border-brand-border bg-brand-muted px-3 py-1.5 font-medium hover:bg-brand hover:text-background transition-colors"
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
              {navItems.map(({ id, label }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="py-3 text-muted-foreground hover:text-brand transition-colors"
                  onClick={toggleMenu}
                >
                  {label}
                </a>
              ))}
              <a
                href={`mailto:${personalInfo.email}`}
                className="py-3 font-medium text-brand"
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
