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
|   └── inventory/
|       ├── inventoryImagesLoad.test.ts    # Vérifie le chargement des images produits
|       ├── inventoryItemDetails.test.ts   # Vérifie l’affichage des détails produits
|       ├── inventoryPageLoad.test.ts      # Vérifie le chargement de la page inventory
|       ├── inventorySort.test.ts          # Vérifie le tri des produits
|       ├── productDetail.test.ts          # Vérifie la page détail produit
|       └── productList.test.ts            # Vérifie la liste des produits
|
├── helpers/
|       ├── authHelper.ts                  # Fonctions d'authentification (login)
|       ├── cartHelper.ts                  # Fonctions du panier (cart)
|       ├── inventoryHelper.ts             # Fonctions utilitaires pour tests inventory
├── playwright.config.ts                   # Configuration Playwright
├── tsconfig.json                          # Configuration TypeScript
└── package.json                           # Dépendances et scripts npm
```
## Explication 
### - helpers/authHelper.ts
contient la logique pour la connexion à Saucedemo.
Il gère les différents types d’utilisateurs (valides et bloqués) et remplit automatiquement les champs du formulaire de login.

### -helpers/cartHelper.ts
Contient la logique des actions liées au panier sur Saucedemo. Il inclut des fonctions pour ajouter, retirer et vérifier des articles dans le panier, tout en s'assurant d'être sur la bonne page avant chaque action. Les interactions se font via des sélecteurs ciblés sur les boutons « Add to cart » et « Remove », avec une navigation automatique entre les pages d’inventaire et de panier.
## Continous integration CI ( github  actions ) 
- Crée sauce_demo_playwright\.github\workflows\playwright.yml qui contient la logique du déclenchement de la pipeline
Execution possible automatiquement :
- aprés push , pull request
localement avec :  $env:CI="true"; npx playwright test



