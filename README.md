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
│   ├── ui/                                # Tests fonctionnels UI end-to-end avec Playwright
│   │   ├── auth/                          # Scénarios liés à l’authentification utilisateur
│   │   │   ├── login.test.ts              # Tests de connexion valides
│   │   │   ├── logout.test.ts             # Tests de déconnexion
│   │   │   ├── invalidCredentials.test.ts # Tests pour identifiants invalides
│   │   │   └── emptyFields.test.ts        # Tests pour champs de connexion vides
│   │   ├── cart/                          # Scénarios liés au panier d’achats
│   │   │   ├── addToCart.test.ts          # Ajout d’un seul article au panier
│   │   │   ├── addMultipleItems.test.ts   # Ajout de plusieurs articles simultanément
│   │   │   ├── removeFromCart.test.ts     # Suppression d’articles du panier
│   │   │   ├── cartCounter.test.ts        # Vérification du compteur (badge) du panier
│   │   │   ├── continueShopping.test.ts   # Test du bouton « Continue Shopping »
│   │   │   └── unauthorizedAccess.test.ts # Accès non autorisé au panier sans connexion
│   │   └── inventory/                     # Tests liés à la gestion et affichage des produits
│   │       ├── inventoryImagesLoad.test.ts # Vérifie le chargement des images produits
│   │       ├── inventoryItemDetails.test.ts # Vérifie les détails des produits affichés
│   │       ├── inventoryPageLoad.test.ts  # Vérifie le chargement complet de la page inventaire
│   │       ├── inventorySort.test.ts      # Vérifie le fonctionnement du tri des produits
│   │       ├── productDetail.test.ts      # Vérifie la page de détail d’un produit
│   │       └── productList.test.ts        # Vérifie la liste des produits affichés
├── tests/performance/                    # Tests de performance et charge (ex: JMeter)
│
├── tests/security/                       # Tests de sécurité (accès non autorisé, redirections)
│   ├── redirectAfterLogout.test.ts      # Redirection après déconnexion
│   ├── csrfProtection.test.ts           # Test de protection CSRF (si applicable)
│   └── sessionExpiration.test.ts        # Test expiration de session / token
│
├── helpers/                             # Fonctions utilitaires partagées et helpers
│   ├── authHelper.ts                    # Fonctions réutilisables liées à l’authentification
│   ├── cartHelper.ts                    # Fonctions utilitaires pour gérer le panier
│   ├── inventoryHelper.ts               # Fonctions spécifiques aux tests d’inventaire
│   └── apiHelper.ts                     # Helper commun pour appels API et gestion requêtes
│
├── playwright.config.ts                  # Configuration générale Playwright (tests UI)
├── tsconfig.json                        # Configuration TypeScript
└── package.json                         # Gestionnaire de dépendances et scripts npm

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
