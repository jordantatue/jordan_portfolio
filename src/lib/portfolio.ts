/** Contenu public vérifié avec les CV, LinkedIn et les dépôts de Jordan. */
export const profile = {
  name: "Jordan Tatue",
  role: "Ingénieur logiciel · Full Stack, DevOps & IA",
  location: "Paris · mobile en France",
  email: "tatuejordan@gmail.com",
  github: "https://github.com/jordantatue",
  linkedin: "https://www.linkedin.com/in/tatuejordan/",
  intro: "Je conçois des applications métier, les déploie et les fais évoluer. Du développement Full Stack aux pipelines DevOps et aux projets IA, je relie le code aux besoins réels.",
};

export const resumes = [
  { label: "Développeur Full Stack", file: "cv/Jordan_TATUE_FullStack_DevOps.pdf", description: "Java, React, APIs et applications métier" },
  { label: "DevOps · MLOps · Cloud", file: "cv/Jordan_TATUE_DevOps_MLOps_Cloud.pdf", description: "Infrastructure, CI/CD et production" },
  { label: "Ingénieur IA · Data Science", file: "cv/Jordan_TATUE_IA_Data.pdf", description: "Machine learning, données et IA" },
];

export const quickPrompts = [
  { label: "Quelles sont ses compétences ?", question: "Quelles sont tes compétences ?" },
  { label: "Son expérience", question: "Quelle est ton expérience professionnelle ?" },
  { label: "Ses projets IA", question: "Quels sont tes projets en intelligence artificielle ?" },
  { label: "Sa stack DevOps", question: "Quelle est ta stack DevOps ?" },
];

export const projects = [
  {
    number: "01", title: "ImmoStat · House Price Prediction", category: "MLOps", status: "Dépôt public",
    summary: "Pipeline de prédiction immobilière : préparation de données, entraînement, API d'inférence et supervision.",
    context: "Faire passer un modèle de machine learning du notebook vers un service exploitable et traçable.",
    delivered: "API FastAPI, image Docker, CI/CD GitHub Actions, Prometheus et Grafana. La V2 d'intégration de données françaises est encore privée.",
    impact: "Une chaîne reproductible, testable et observable ; traitement par lots de données hétérogènes pour préparer la V2.",
    stack: ["Python", "scikit-learn", "FastAPI", "Docker", "GitHub Actions", "Prometheus", "Grafana"],
    link: "https://github.com/jordantatue/House_Price_Prediction",
  },
  {
    number: "02", title: "BeautyShop", category: "Full Stack", status: "Code privé",
    summary: "Boutique en ligne adaptée au commerce camerounais, du catalogue à la commande.",
    context: "Faciliter l'achat de produits beauté avec des modes de paiement et de confirmation adaptés au terrain.",
    delivered: "Front React, API Django, PostgreSQL, Docker Compose, nginx, tests et livraison continue.",
    impact: "Parcours de commande plus traçable, avec paiement à la livraison ou Mobile Money et confirmation WhatsApp.",
    stack: ["React", "Django", "PostgreSQL", "Docker Compose", "nginx"],
    link: null,
    live: "https://mireille.camerstores.com/",
    screenshot: "media/beautyshop-boutique.png",
  },
  {
    number: "03", title: "Job Tracker", category: "Produit IA", status: "Code privé",
    summary: "Extension Chrome pour centraliser les candidatures et utiliser Gemini pour adapter un CV.",
    context: "Réduire la dispersion des candidatures et faciliter la préparation d'une réponse à une offre.",
    delivered: "Tableau interactif, statistiques, capture d'offre depuis l'onglet actif et assistant connecté à Google Gemini.",
    impact: "Suivi local des candidatures sans stockage serveur et un flux plus direct entre offre et adaptation du CV.",
    stack: ["React", "Vite", "Chrome API", "Gemini API", "JavaScript"],
    link: null,
  },
  {
    number: "04", title: "Portfolio statique", category: "Web", status: "Dépôt public",
    summary: "Ce portfolio : une interface d'exploration personnelle, rapide et hébergée sur GitHub Pages.",
    context: "Présenter un profil transversal et donner accès aux preuves derrière chaque compétence.",
    delivered: "Site Astro généré en HTML statique, navigation accessible et simulation locale de questions-réponses.",
    impact: "Lecture directe sur ordinateur et mobile, sans compte utilisateur ni serveur applicatif.",
    stack: ["Astro", "TypeScript", "CSS", "GitHub Pages"],
    link: "https://github.com/jordantatue/jordan_portfolio",
  },
];

export const moreProjects = [
  { title: "Snap-Faces", detail: "Application Angular de partage de photos et de likes.", link: "https://github.com/jordantatue/snapface", video: "https://www.youtube.com/watch?v=wMjSthcGC6M" },
  { title: "HappySport", detail: "Analyse de besoins, cas d'utilisation et conception applicative.", link: "https://github.com/jordantatue/Analyse_Projet_HappySport", video: "https://www.youtube.com/watch?v=exJkZ0fLiWY" },
  { title: "Site de commande", detail: "Site de commande développé en PHP et MySQL.", link: "https://github.com/jordantatue/Burger_Code_Securise", video: "https://www.youtube.com/watch?v=pw1yJ2cXEiA" },
  { title: "Gestion des contacts", detail: "Application de bureau Java pour gérer un annuaire.", link: "https://github.com/jordantatue/Applications-de-contacts-", video: "https://www.youtube.com/watch?v=0Q9OOUkNmBo" },
  { title: "Machine Learning", detail: "Préparation des données et évaluation de modèles.", link: "https://github.com/jordantatue/MachineLearning", video: null },
];

export const experience = [
  {
    period: "2026", role: "Ingénieur Data & IA / Développeur Full Stack", company: "ARGEDIS · TotalEnergies", place: "Tours",
    context: "Applications intranet et API métier utilisées autour de l'activité des stations-service ; évolution du patrimoine applicatif et contribution à une plateforme de données souveraine.",
    project: "Parc applicatif .NET 10 / React / SQL Server et flux de données organisés en couches Bronze, Silver et Gold.",
    delivered: ["Développement Full Stack et contribution aux API métier.", "Scripts Python pour les contrôles, le reporting et la documentation des flux.", "Travaux sur la migration SQL Server vers PostgreSQL et Windows vers Linux, avec Docker et CI/CD."],
    impact: "Contribution à des données plus structurées pour l'équipe Data et à des livraisons mieux documentées. Aucun indicateur chiffré n'est publié dans le CV.",
    stack: [".NET 10", "C#", "React", "SQL Server", "PostgreSQL", "Python", "Docker", "Power BI"],
  },
  {
    period: "2026", role: "Développeur Full Stack Web & Mobile", company: "Axeal / Heverett · FrancePay CFE", place: "Paris",
    context: "Reprise d'une application bancaire mobile pour les expatriés français, avec services bancaires fournis par Xpollens.",
    project: "Application React Native / Expo, backoffice React et trois microservices Java Spring Boot : Core, API et Webhook.",
    delivered: ["Reprise et migration de l'application mobile, maintenance du backoffice.", "Conteneurisation et déploiement des microservices sur Kubernetes.", "Pipelines GitHub Actions pour INT, PRE et PROD ; documentation et transfert de compétences."],
    impact: "Continuité technique lors de la reprise du produit et chaîne de déploiement structurée sur trois environnements.",
    stack: ["React Native", "Expo", "React", "Java", "Spring Boot", "Kubernetes", "GitHub Actions"],
  },
  {
    period: "2025—2026", role: "Développeur Full Stack Java / Angular", company: "Groupe Zéphir", place: "Châteaubriant",
    context: "SIROCCO, portail métier destiné aux agents et courtiers du groupe.",
    project: "Fonctionnalités commerciales : challenges, bonus, tableaux de bord et indicateurs de performance.",
    delivered: ["Conception des règles de calcul métier et développement des écrans Angular et services Java.", "Livraison en recette puis en production, suivi utilisateur et documentation technique.", "Exploitation de la chaîne Jenkins, Maven et WildFly."],
    impact: "Mise à disposition d'outils de suivi commercial et meilleure continuité entre métier, développement et exploitation.",
    stack: ["Java", "Spring", "Angular", "Oracle SQL", "Hibernate", "Jenkins", "Maven", "WildFly"],
  },
  {
    period: "2023—2025", role: "Développeur Full Stack & DevOps", company: "Société Générale · DSI Assurances", place: "Orléans",
    context: "Applications métier internes développées et exploitées dans un environnement bancaire exigeant.",
    project: "Portail interne, automatisations, données et migrations d'infrastructure.",
    delivered: ["Développement d'applications et d'API en Python, Java et PHP.", "Scripts Python/Bash, traitements ETL et restitution SQL / BigQuery.", "Pipelines GitLab CI et Jenkins, playbooks Ansible et travaux de migration cloud Azure / AWS.", "Documentation et transfert de compétences avec l'équipe de Roumanie."],
    impact: "Réduction d'interventions répétitives par automatisation et visibilité accrue sur les traitements applicatifs.",
    stack: ["Python", "Django", "Java", "Grails", "PHP", "Symfony", "Ansible", "GitLab CI", "Jenkins", "Azure", "AWS"],
  },
  {
    period: "2024", role: "Data Scientist · hackathon", company: "enercity", place: "Hanovre",
    context: "Hackathon international consacré à la prédiction de consommation énergétique.",
    project: "Préparation de données et comparaison de modèles de régression.",
    delivered: ["Nettoyage, normalisation et exploration statistique des données.", "Modèles linéaires et XGBoost évalués avec RMSE et MAE.", "Visualisations et restitution des résultats aux équipes métier."],
    impact: "Base d'analyse et résultats comparables pour éclairer la modélisation de la consommation.",
    stack: ["Python", "pandas", "scikit-learn", "XGBoost", "RMSE", "MAE"],
  },
  {
    period: "2022", role: "Data Analyst · stage", company: "Camtel", place: "Douala",
    context: "Données internes liées aux segments clients et aux performances du réseau télécom.",
    project: "Préparer des jeux de données utilisables et rendre les analyses accessibles aux équipes métier.",
    delivered: ["Extraction, transformation et nettoyage avec Python, pandas et PostgreSQL.", "Scripts d'analyse et rapports périodiques automatisés.", "Tableaux interactifs en JavaScript et visualisations statistiques Matplotlib / Seaborn."],
    impact: "Données consolidées et analyses plus faciles à consulter pour les équipes marketing et techniques.",
    stack: ["Python", "pandas", "PostgreSQL", "JavaScript", "DataTables", "Matplotlib", "Seaborn"],
  },
];

export const skillGroups = [
  { name: "Langages", items: ["Python", "Java", "C#", "JavaScript", "TypeScript", "PHP", "Go", "Bash", "SQL", "C / C++"] },
  { name: "Front-end & mobile", items: ["React", "Angular", "React Native", "Expo", "HTML", "CSS", "Bootstrap"] },
  { name: "Back-end & API", items: ["Spring Boot", "Django", "FastAPI", ".NET", "Node.js", "Symfony", "Grails / Groovy", "Hibernate", "REST", "OAuth2 / JWT", "OpenID Connect"] },
  { name: "DevOps & cloud", items: ["Docker", "Docker Compose", "Kubernetes", "Terraform", "Ansible", "nginx", "Linux / RHEL", "AWS", "Azure", "GCP"] },
  { name: "CI/CD & qualité", items: ["GitHub Actions", "GitLab CI", "Jenkins", "Maven", "SonarQube", "TDD", "Tests E2E", "Revues de code"] },
  { name: "Données", items: ["PostgreSQL", "SQL Server", "Oracle", "MySQL", "MongoDB", "BigQuery", "Supabase", "Apache Spark", "Kafka"] },
  { name: "IA & machine learning", items: ["pandas", "NumPy", "Jupyter", "scikit-learn", "XGBoost", "TensorFlow", "LLMs", "RAG", "LangChain", "Mistral AI", "Gemini API", "Claude API", "OpenAI API", "NLP", "pgvector", "OpenSearch", "OCR", "Classification", "Clustering", "Feature engineering", "RMSE / MAE"] },
  { name: "Observabilité & automatisation", items: ["Prometheus", "Grafana", "ELK", "n8n", "Git LFS", "CRON"] },
  { name: "Méthodes & collaboration", items: ["Scrum", "SAFe", "Kanban", "DDD", "Jira", "Confluence", "Documentation technique"] },
];

export const education = [
  { date: "2020—2025", title: "Diplôme d'ingénieur · IA & développement Full Stack", place: "Groupe 3iL · Limoges", detail: "Cycle ingénieur accrédité CTI, dont deux années en alternance." },
  { date: "2024—2025", title: "Master 2 · Data Science & Cloud DevOps", place: "Hochschule Hannover · Allemagne", detail: "Mobilité Erasmus, spécialisation data science et cloud." },
];
