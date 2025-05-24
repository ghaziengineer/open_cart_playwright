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
│       ├── login.test.ts           # Tests de connexion
│       ├── logout.test.ts          # Tests de déconnexion
│       ├── invalidCredentials.test.ts  # Tests pour identifiants invalides
│       └── emptyFields.test.ts     # Tests pour champs vides├── helpers/
│   └── authHelper.ts             # Fonctions d'authentification (login)
├── playwright.config.ts          # Configuration Playwright
├── tsconfig.json                 # Configuration TypeScript
└── package.json                  # Dépendances et scripts npm
```
## Explication 
### - helpers/authHelper.ts
contient la logique pour la connexion à Saucedemo.
Il gère les différents types d’utilisateurs (valides et bloqués) et remplit automatiquement les champs du formulaire de login.




