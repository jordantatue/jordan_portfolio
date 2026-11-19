/** Sources : CV du 14 novembre 2026, profil LinkedIn et dépôts GitHub. */
export const profile = {
  name: "Jordan Tatue",
  role: "Ingénieur logiciel · Full Stack, DevOps & IA",
  location: "Paris · mobile en France",
  email: "tatuejordan@gmail.com",
  github: "https://github.com/jordantatue",
  linkedin: "https://www.linkedin.com/in/tatuejordan/",
  intro: "Je développe des applications métier et les accompagne jusqu'à leur mise en production. Mon terrain de jeu relie les interfaces, les API, les données et l'automatisation des livraisons.",
  approach: "Après des missions en banque et dans l'énergie, je continue d'explorer le machine learning et le MLOps à travers des projets concrets, du modèle à l'API supervisée.",
};

export const projects = [
  {
    number: "01", title: "House Price Prediction", category: "MLOps · projet public",
    summary: "Un pipeline de prédiction immobilière qui va de la préparation des données à l'inférence via une API FastAPI.",
    challenge: "Rendre un modèle réutilisable, testable et exploitable au-delà du notebook.",
    solution: "Préparation et évaluation des données, service d'inférence FastAPI, image Docker, workflows GitHub Actions et éléments de supervision.",
    stack: ["Python", "scikit-learn", "FastAPI", "Docker", "GitHub Actions"],
    link: "https://github.com/jordantatue/House_Price_Prediction", accent: "mint",
  },
  {
    number: "02", title: "BeautyShop", category: "Full Stack · projet privé",
    summary: "Une boutique en ligne pensée pour un parcours d'achat adapté au marché camerounais.",
    challenge: "Relier catalogue, panier et commande à des moyens de paiement et de confirmation accessibles.",
    solution: "Interface React, API Django avec PostgreSQL, conteneurisation Docker Compose, nginx et intégration continue.",
    stack: ["React", "Django", "PostgreSQL", "Docker Compose"],
    link: null, accent: "violet",
  },
  {
    number: "03", title: "Portfolio statique", category: "Web · projet public",
    summary: "Le site que vous consultez : un portfolio généré à la compilation et publié sur GitHub Pages.",
    challenge: "Présenter un profil transversal avec des preuves accessibles et une navigation claire.",
    solution: "Pages HTML statiques, navigation directe et contenu éditorial centralisé dans le dépôt.",
    stack: ["Astro", "TypeScript", "CSS", "GitHub Pages"],
    link: "https://github.com/jordantatue/jordan_portfolio", accent: "blue",
  },
];

export const moreProjects = [
  { title: "HappySport", category: "Conception logicielle", text: "Analyse des besoins, cas d'utilisation et conception d'un projet applicatif.", link: "https://github.com/jordantatue/Analyse_Projet_HappySport" },
  { title: "Site de commande", category: "Développement web", text: "Projet de commande en ligne développé en PHP.", link: "https://github.com/jordantatue/site_commande" },
  { title: "Machine Learning", category: "Exploration de données", text: "Travaux d'analyse, de préparation et d'évaluation de modèles.", link: "https://github.com/jordantatue/MachineLearning" },
];

export const experience = [
  { period: "2026", role: "Ingénieur Data & IA / Développeur Full Stack", company: "ARGEDIS · TotalEnergies", place: "Tours", text: "Applications métier en .NET, React et SQL Server ; contribution aux flux de données, aux automatisations Python et à la préparation de migrations vers PostgreSQL et Linux.", tags: [".NET", "React", "Python", "Data"] },
  { period: "2026", role: "Développeur Full Stack Web & Mobile", company: "Axeal / Heverett · FrancePay CFE", place: "Paris", text: "Reprise d'une application bancaire React Native, maintenance d'un backoffice React et déploiement de microservices Spring Boot sur Kubernetes avec GitHub Actions.", tags: ["React Native", "Spring Boot", "Kubernetes", "CI/CD"] },
  { period: "2023—2025", role: "Développeur Full Stack & DevOps", company: "Société Générale · DSI Assurances", place: "Orléans", text: "Applications internes en Python, Java et PHP ; scripts d'automatisation, pipelines GitLab CI et Jenkins, et travaux de migration cloud avec les équipes d'exploitation.", tags: ["Python", "Java", "Ansible", "GitLab CI"] },
  { period: "2024", role: "Data Scientist · hackathon", company: "enercity", place: "Hanovre", text: "Préparation de données et modèles de régression pour prédire la consommation énergétique, avec évaluation par RMSE et MAE.", tags: ["pandas", "scikit-learn", "XGBoost"] },
];

export const capabilities = [
  { icon: "{ }", title: "Développement", text: "Des interfaces aux services métier, avec une attention portée à la qualité et à la livraison.", tools: ["React", "Angular", "Java / Spring", "Python / FastAPI", ".NET"] },
  { icon: ">_", title: "DevOps & Cloud", text: "Des pipelines et des environnements reproductibles pour livrer et exploiter les applications.", tools: ["Docker", "Kubernetes", "GitHub Actions", "GitLab CI", "Jenkins", "Ansible"] },
  { icon: "◎", title: "IA & données", text: "Préparer les données, évaluer les modèles et construire les services qui les rendent utilisables.", tools: ["pandas", "scikit-learn", "XGBoost", "FastAPI", "SQL", "RAG"] },
];

export const education = [
  { date: "2020—2025", title: "Diplôme d'ingénieur · IA & développement Full Stack", place: "Groupe 3iL · Limoges", detail: "Formation d'ingénieur accréditée CTI." },
  { date: "2024—2025", title: "Master 2 · Data Science & Cloud DevOps", place: "Hochschule Hannover · Allemagne", detail: "Semestre Erasmus centré sur les données et le cloud." },
];
