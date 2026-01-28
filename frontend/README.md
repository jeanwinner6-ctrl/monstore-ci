# MonStore.CI - Frontend

Frontend React moderne pour la plateforme e-commerce MonStore.CI.

## Technologies utilisées

- **React 19** - Framework UI moderne
- **Vite** - Build tool ultra-rapide
- **React Router** - Navigation côté client
- **Tailwind CSS** - Framework CSS utility-first pour un design responsive
- **ESLint** - Linting du code

## Fonctionnalités

- ✅ Design responsive et moderne
- ✅ Navigation fluide entre les pages
- ✅ Page d'accueil avec produits en vedette
- ✅ Catalogue de produits avec filtres par catégorie
- ✅ Panier d'achat interactif
- ✅ Interface utilisateur clean et intuitive
- ✅ Optimisé pour les performances

## Structure du projet

```
frontend/
├── src/
│   ├── components/      # Composants réutilisables
│   │   ├── Header.jsx   # En-tête de navigation
│   │   ├── Footer.jsx   # Pied de page
│   │   └── Layout.jsx   # Layout principal
│   ├── pages/           # Pages de l'application
│   │   ├── Home.jsx     # Page d'accueil
│   │   ├── Products.jsx # Catalogue produits
│   │   └── Cart.jsx     # Panier
│   ├── App.jsx          # Composant racine avec routing
│   ├── main.jsx         # Point d'entrée
│   └── index.css        # Styles globaux avec Tailwind
├── public/              # Fichiers statiques
├── index.html           # Template HTML
├── package.json         # Dépendances et scripts
└── vite.config.js       # Configuration Vite

```

## Installation

```bash
cd frontend
npm install
```

## Développement

Lancer le serveur de développement :

```bash
npm run dev
```

L'application sera accessible sur [http://localhost:5173](http://localhost:5173)

## Build

Créer une version de production :

```bash
npm run build
```

Les fichiers optimisés seront générés dans le dossier `dist/`.

## Preview

Prévisualiser la version de production localement :

```bash
npm run preview
```

## Linting

Vérifier la qualité du code :

```bash
npm run lint
```

## Prochaines étapes

- [ ] Intégration avec une API backend
- [ ] Gestion d'état avec Context API ou Redux
- [ ] Authentification utilisateur
- [ ] Système de paiement
- [ ] Gestion avancée du panier (localStorage)
- [ ] Filtres et recherche avancés
- [ ] Pages produit détaillées
- [ ] Tests unitaires et d'intégration

## Licence

© 2026 MonStore.CI. Tous droits réservés.

