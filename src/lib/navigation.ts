/**
 * Source unique des pages du site : ordre de la navigation, libelles et
 * titres de document. L'en-tete et l'enchainement bas de page la partagent.
 */
export interface PageEntry {
  /** Segment d'URL. Vide pour l'accueil. */
  slug: string;
  /** Libelle affiche dans la navigation. */
  label: string;
  /** Titre du document, complete du nom dans le Layout. */
  title: string;
  description: string;
}

export const pages: PageEntry[] = [
  {
    slug: "",
    label: "Profil",
    title: "Profil",
    description:
      "Portfolio de Jordan Tatue, ingénieur DevOps & IA et développeur full-stack basé à Paris.",
  },
  {
    slug: "experience",
    label: "Expérience",
    title: "Expérience professionnelle",
    description:
      "Parcours de Jordan Tatue : Groupe Zéphir, Société Générale – Assurances et hackathon data science Enercity.",
  },
  {
    slug: "projects",
    label: "Projets",
    title: "Projets",
    description:
      "Projets de Jordan Tatue : API de prédiction servie avec FastAPI et supervisée, extension adossée à des LLM.",
  },
  {
    slug: "skills",
    label: "Compétences",
    title: "Compétences",
    description:
      "Compétences de Jordan Tatue : DevOps et cloud, IA et data, CI/CD, observabilité, back-end et front-end.",
  },
  {
    slug: "education",
    label: "Formation",
    title: "Formation",
    description:
      "Formation de Jordan Tatue : diplôme d’ingénieur 3iL (CTI) et Master 2 Machine Learning & Data à Hanovre.",
  },
];

/** Prefixe un slug par la base du site, qui varie selon le deploiement. */
export function hrefFor(slug: string, baseUrl: string): string {
  const base = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
  return slug ? `${base}${slug}` : base;
}

/** Page precedente et suivante, pour l'enchainement en bas de page. */
export function neighbours(slug: string): {
  previous?: PageEntry;
  next?: PageEntry;
} {
  const index = pages.findIndex((page) => page.slug === slug);
  if (index === -1) return {};
  return { previous: pages[index - 1], next: pages[index + 1] };
}
