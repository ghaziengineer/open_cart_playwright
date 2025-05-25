# 🧪 Automatisation des tests Saucedemo avec Playwright & TypeScript
Ce projet met en œuvre des tests automatisés E2E, API, performance et sécurité pour le site saucedemo.com à l’aide de Playwright et TypeScript.

## ⚙️ Installation & Configuration
```bash
# Initialiser un projet Node.js
npm init -y

# Installer Playwright avec support TypeScript
npm install -D @playwright/test
npx playwright install

# Initialiser TypeScript
npm install typescript
npx tsc --init
```
## 🗂️ Structure du projet
```bash
/project-root
├── tests/
│   ├── ui/                                # Tests UI end-to-end
│   │   ├── auth/                          # Authentification
│   │   │   ├── login.test.ts
│   │   │   ├── logout.test.ts
│   │   │   ├── invalidCredentials.test.ts
│   │   │   └── emptyFields.test.ts
│   │   ├── cart/                          # Panier
│   │   │   ├── addToCart.test.ts
│   │   │   ├── addMultipleItems.test.ts
│   │   │   ├── removeFromCart.test.ts
│   │   │   ├── cartCounter.test.ts
│   │   │   ├── continueShopping.test.ts
│   │   │   └── unauthorizedAccess.test.ts
│   │   └── inventory/                     # Produits
│   │       ├── inventoryImagesLoad.test.ts
│   │       ├── inventoryItemDetails.test.ts
│   │       ├── inventoryPageLoad.test.ts
│   │       ├── inventorySort.test.ts
│   │       ├── productDetail.test.ts
│   │       └── productList.test.ts
│   ├── api/                               # Tests API REST (à implémenter)
│   ├── performance/                       # Scénarios JMeter pour le stress/load testing
│   ├── security/                          # Tests de sécurité (accès non autorisé, redirection)
│   └── helpers/                           # Fonctions utilitaires partagées
│       ├── authHelper.ts
│       ├── cartHelper.ts
│       └── inventoryHelper.ts
├── playwright.config.ts                   # Configuration Playwright
├── tsconfig.json                          # Configuration TypeScript
└── package.json                           # Dépendances et scripts
```
## 🚀 Exécution des tests
### Lancer tous les tests
```bash
npx playwright test
```
### Lancer un dossier spécifique
```bash
npx playwright test tests/ui/auth
npx playwright test tests/performance
```
### Lancer un fichier de test précis
```bash
npx playwright test tests/ui/cart/addToCart.test.ts
```
### 🔁 Intégration Continue (CI) avec GitHub Actions
Ajoute le fichier suivant :  
sauce_demo_playwright/.github/workflows/playwright.yml  
Exemple de déclencheurs :  
À chaque push ou pull request vers main  

Possibilité de l’exécuter localement via :  
```bash
$env:CI="true"; npx playwright test  # PowerShell
ou bien execution automatique aprés chaque PR et merge vers main
```
### 📚 Références
https://playwright.dev/  
https://www.saucedemo.com/
