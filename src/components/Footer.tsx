import { personalInfo } from "@/lib/data";
import { Mail, Github, Linkedin } from "lucide-react";

const links = [
  { icon: Mail, label: "Email", href: `mailto:${personalInfo.email}` },
  { icon: Github, label: "GitHub", href: personalInfo.github, external: true },
  { icon: Linkedin, label: "LinkedIn", href: personalInfo.linkedin, external: true },
];

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {personalInfo.name}
          </p>

          <nav className="flex items-center gap-5" aria-label="Me contacter">
            {links.map(({ icon: Icon, label, href, external }) => (
              <a
                key={label}
                href={href}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="flex items-center text-sm text-muted-foreground hover:text-brand transition-colors"
              >
                <Icon className="h-4 w-4 mr-1.5" aria-hidden="true" />
                {label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
