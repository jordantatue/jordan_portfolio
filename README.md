# Portfolio — Jordan Tatue

Portfolio statique consacré au développement Full Stack, au DevOps et à l'IA appliquée.

Site : [jordantatue.github.io/jordan_portfolio](https://jordantatue.github.io/jordan_portfolio/)

## Conception

Le site adopte une présentation éditoriale claire inspirée d'AIVOR : rail de navigation, introduction centrée et champ de questions. Il est généré par Astro en HTML et CSS statiques pour GitHub Pages. Aucune API, base de données ou clé secrète n'est requise pour le consulter.

Le contenu éditorial est dans `src/lib/portfolio.ts`. La page principale est `src/pages/index.astro` et son style dans `src/styles/workspace.css`. Les anciennes URL de sections redirigent vers les ancres de la page principale. Les compétences sont toutes visibles et les expériences détaillent contexte, projet, réalisations, impact et technologies.

Le champ de questions lit `public/knowledge/portfolio.md` dans le navigateur et choisit une réponse par mots-clés. C'est une simulation locale, sans modèle d'IA. Une future IA réelle demanderait un service côté serveur pour protéger la clé API, même si le site reste statique.

Les trois CV publics (Full Stack, DevOps / MLOps / Cloud et IA / Data Science) sont dans `public/cv/`. Une capture de la boutique BeautyShop est dans `public/media/`, et les quatre démonstrations YouTube historiques sont liées depuis les projets d'archives.

## Sources du contenu

- CV de Jordan Tatue datés des 10 et 14 novembre 2026, variantes Full Stack, DevOps / MLOps / Cloud et IA / Data Science.
- [Profil LinkedIn de Jordan Tatue](https://www.linkedin.com/in/tatuejordan/).
- Dépôts GitHub liés depuis les cartes projets.

Les projets privés sont décrits sans lien vers leur code. Les expériences sont résumées à partir du CV ; aucun résultat chiffré n'a été ajouté sans source.

## Développement local

Prérequis : Node.js 24 ou version compatible avec Astro 7.

```bash
npm ci
npm run dev
npm run build
```

Le build est écrit dans `static/`. La configuration Astro définit `base: '/jordan_portfolio/'` pour le déploiement sur GitHub Pages.

## Déploiement

Un push sur `master` déclenche `.github/workflows/deploy.yml`, construit le site et publie `static/` sur `gh-pages`.

## Licence

MIT — voir [LICENSE](LICENSE). Ce dépôt dérive initialement de [my-portfolio](https://github.com/rishikesh2003/my-portfolio) de Rishikesh S ; l'attribution historique est conservée.
