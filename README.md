# Automatisation des tests sur le site Saucedemo avec Playwright et TypeScript

## Configuration

```bash
#Initialiser un projet Node.js
npm init -y
#Installer Playwright avec TypeScript
npm install -D @playwright/test
npx playwright install
#Initialiser la structure Playwright (création automatique des fichiers de base)
#configuration TypeScript
npm install typescript
npx tsc --init
```
## Architecture du projet
```bash
/project-root
├── tests/
│   └── auth/
│       ├── login.test.ts                  # Tests de connexion
│       ├── logout.test.ts                 # Tests de déconnexion
│       ├── invalidCredentials.test.ts     # Tests pour identifiants invalides
│       └── emptyFields.test.ts            # Tests pour champs vides
|   └── cart/
|       ├── addToCart.test.ts              # Ajout d'un seul article
|       ├── addMultipleItems.test.ts       # Ajout de plusieurs articles
|       ├── removeFromCart.test.ts         # Suppression d'articles
|       ├── cartCounter.test.ts            # Vérifie le badge du panier
|       ├── continueShopping.test.ts       # Test du bouton "Continue Shopping"
|       └── unauthorizedAccess.test.ts     # Accès au panier sans login
├── helpers/
|       ├── authHelper.ts             # Fonctions d'authentification (login)
|       ├── cartHelper.ts             # Fonctions du panier (cart)

├── playwright.config.ts          # Configuration Playwright
├── tsconfig.json                 # Configuration TypeScript
└── package.json                  # Dépendances et scripts npm
```
## Explication 
### - helpers/authHelper.ts
contient la logique pour la connexion à Saucedemo.
Il gère les différents types d’utilisateurs (valides et bloqués) et remplit automatiquement les champs du formulaire de login.




