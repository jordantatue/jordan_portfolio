export const personalInfo = {
  name: "Jordan Tatue",
  title: "Ingénieur DevOps & IA · Développeur Full-Stack",
  location: "Paris, France",
  email: "tatuejordan@gmail.com",
  github: "https://github.com/jordantatue",
  linkedin: "https://www.linkedin.com/in/tatuejordan/",
};

/** Paragraphes de présentation affichés dans la section d'en-tête. */
export const introduction = [
  "Ingénieur diplômé (CTI) en développement, intelligence artificielle et DevOps. Je conçois des applications métier de bout en bout — du besoin fonctionnel à la mise en production — et j’automatise ce qui doit l’être : pipelines CI/CD, déploiements, migrations d’infrastructure.",
  "Deux ans d’alternance à la Société Générale – Assurances m’ont formé aux environnements exigeants : développement Python, Java et PHP, automatisation Ansible, pipelines GitLab CI et Jenkins, migrations CentOS vers Red Hat et Cloud Gen1 vers Gen2. Je travaille aujourd’hui chez Groupe Zéphir sur SIROCCO, portail métier Java/Angular destiné aux agents et courtiers du groupe.",
  "Côté IA, un Master 2 Machine Learning & Data à Hanovre et des réalisations concrètes : une API de prédiction servie avec FastAPI, conteneurisée et supervisée sous Prometheus et Grafana, ainsi qu’une extension navigateur adossée à des LLM.",
];

export const workExperience = [
  {
    company: "Groupe Zéphir",
    location: "Châteaubriant, France",
    position: "Développeur Full-Stack Java / Angular",
    period: "Décembre 2025 – Présent",
    logo: "logos/groupe-zephir.png",
    achievements: [
      "Développement de SIROCCO, portail métier utilisé par les agents et courtiers du groupe, en Java (Spring, CLEVA 14) et Angular.",
      "Conception des fonctionnalités commerciales — challenges, mécanismes de bonus, tableaux de bord et indicateurs de performance — jusqu’aux règles de calcul métier, sur Oracle SQL et Hibernate.",
      "Prise en charge du cycle de livraison complet : cadrage du besoin, conception technique, développement, déploiement en recette puis en production, et support utilisateurs.",
      "Exploitation de la chaîne Jenkins, Maven et WildFly en environnements Windows et Linux.",
      "Documentation technique garantissant la continuité entre métier, développement, exploitation et reporting.",
    ],
  },
  {
    company: "Société Générale – Assurances",
    location: "Orléans / Télétravail",
    position: "Alternant Développeur Full-Stack & DevOps",
    period: "Septembre 2023 – Septembre 2025",
    logo: "logos/societe-generale.jpg",
    achievements: [
      "Industrialisation des déploiements, migrations et tâches récurrentes par scripts Python et Bash et playbooks Ansible, supprimant des interventions manuelles répétées.",
      "Construction et exploitation de pipelines CI/CD sous GitLab CI, Jenkins, Docker et GitHub Actions.",
      "Conduite de migrations d’infrastructure de CentOS vers Red Hat et du Cloud Gen1 vers Gen2, sur AWS, Azure et GCP.",
      "Développement d’applications internes de gestion des plannings, réservations, incidents et authentification, en Python/Django, Java/Spring et PHP/Symfony.",
      "Centralisation et supervision des traitements applicatifs derrière des interfaces web dédiées, donnant aux équipes une vue unifiée de l’exécution.",
      "Collaboration avec des équipes en France et en Roumanie : documentation et passation de connaissances.",
    ],
  },
  {
    company: "Enercity",
    location: "Hanovre, Allemagne",
    position: "Hackathon Data Science",
    period: "Novembre 2024",
    logo: "logos/enercity.png",
    achievements: [
      "Modélisation de la consommation énergétique, de la régression linéaire aux modèles à gradient boosté et réseaux de neurones (Python, pandas, scikit-learn, XGBoost, TensorFlow).",
      "Préparation des données : nettoyage, normalisation, traitement des valeurs manquantes et exploration statistique.",
      "Évaluation et optimisation des modèles sur des métriques adaptées au problème.",
      "Restitution des résultats aux équipes métier sous forme de visualisations et d’un rapport technique.",
    ],
  },
];

export const education = [
  {
    institution: "Groupe 3iL",
    location: "Limoges, France",
    degree: "Diplôme d’ingénieur – Développement, IA & DevOps (CTI)",
    period: "2020 – 2025",
    logo: "logos/3il.svg",
    achievements: [
      "Formation en développement logiciel, intelligence artificielle, DevOps et cloud.",
      "Projets académiques et industriels conduits en agile (Scrum, SAFe).",
    ],
  },
  {
    institution: "Hochschule Hannover",
    location: "Hanovre, Allemagne",
    degree: "Master 2 – Machine Learning & Data (Erasmus)",
    period: "2024 – 2025",
    logo: "logos/hsh.svg",
    achievements: [
      "Spécialisation en machine learning, data science et infrastructures cloud.",
      "Projets de modélisation prédictive et de déploiement de modèles.",
    ],
  },
];

/**
 * Competences, ordonnees pour un profil DevOps & IA : l'infrastructure et
 * l'IA d'abord, le developpement applicatif ensuite.
 */
export const skills = {
  devopsCloud: [
    "Docker",
    "Kubernetes",
    "Terraform",
    "Ansible",
    "AWS",
    "Azure",
    "GCP",
    "Linux (RHEL)",
  ],

  cicd: [
    "GitLab CI",
    "Jenkins",
    "GitHub Actions",
    "SonarQube",
    "Maven",
  ],

  observability: [
    "Prometheus",
    "Grafana",
    "ELK",
  ],

  aiData: [
    "scikit-learn",
    "XGBoost",
    "TensorFlow",
    "pandas",
    "LLMs",
    "RAG",
    "OCR",
    "Classification",
    "Clustering",
  ],

  programmingLanguages: [
    "Python",
    "Java",
    "Go",
    "JavaScript",
    "Bash",
    "SQL",
    "C / C++",
  ],

  backend: [
    "Spring Boot",
    "Django",
    "FastAPI",
    "Node.js",
    "Hibernate",
    "OpenID Connect",
  ],

  frontend: [
    "React",
    "Angular",
  ],

  databases: [
    "PostgreSQL",
    "Oracle",
    "MySQL",
    "MongoDB",
    "BigQuery",
    "Apache Spark",
    "Kafka",
  ],

  methodology: [
    "Scrum",
    "SAFe",
    "Kanban",
    "DDD",
    "Jira",
    "Confluence",
  ],
};

export const certifications = [
  { name: "Certification Python" },
  { name: "Certification Angular" },
  { name: "Certification React" },
  { name: "Certification Scrum" },
  { name: "Certification Kanban" },
  { name: "TOEIC" },
];

export const languages = ["Français (natif)", "Anglais (professionnel)"];

/** Projets mis en avant : ceux qui portent le positionnement DevOps & IA. */
export const featuredProjects = [
  {
    title: "API de prédiction immobilière",
    github: "https://github.com/jordantatue/House_Price_Prediction",
    tags: ["Python", "scikit-learn", "FastAPI", "Docker", "Prometheus", "Grafana"],
    description: [
      "Chaîne de machine learning complète : entraînement d’un modèle RandomForest, évaluation et sérialisation (scikit-learn, pandas).",
      "Mise en service du modèle derrière une API REST FastAPI, avec des endpoints dédiés à la santé, à la version et aux métriques.",
      "Observabilité intégrée sous Prometheus et Grafana, et livraison conteneurisée avec Docker.",
    ],
  },
  {
    title: "Suivi de candidatures assisté par LLM",
    github: "https://github.com/jordantatue/job-tracker",
    tags: ["React", "Vite", "LLM", "OpenRouter", "Chrome Extension"],
    description: [
      "Extension navigateur centralisant le suivi des candidatures : tableau dynamique, filtres, statistiques et gestion des statuts.",
      "Assistant conversationnel branché sur l’API OpenRouter (Mistral, Llama) pour analyser les offres et affiner les candidatures.",
      "Données conservées localement via chrome.storage.local : aucun envoi vers un serveur tiers.",
    ],
  },
];

/** Projets de formation, presentes de maniere compacte. */
export const otherProjects = [
  {
    title: "Snap-Faces",
    github: "https://github.com/jordantatue/snapface",
    summary: "Partage de photos avec système de likes, architecture front-end / back-end modulaire.",
  },
  {
    title: "HappySport",
    github: "https://github.com/jordantatue/Analyse_Projet_HappySport",
    summary: "Analyse de besoins, architecture logicielle et prototype fonctionnel.",
  },
  {
    title: "Site de commande sécurisé",
    github: "https://github.com/jordantatue/Burger_Code_Securise",
    summary: "Site dynamique et responsive, gestion des utilisateurs et des commandes.",
  },
  {
    title: "Gestion de contacts",
    github: "https://github.com/jordantatue/Applications-de-contacts-",
    summary: "Application desktop d’annuaire avec recherche avancée et persistance.",
  },
];
