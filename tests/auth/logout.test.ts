// Importation des fonctions de test Playwright et de la fonction login personnalisée
import { test, expect } from '@playwright/test';
import { login } from '../helpers/authHelper';

// Groupe de tests pour la fonctionnalité de déconnexion
test.describe('Déconnexion', () => {

  // Test : Vérifie que l'utilisateur peut se déconnecter avec succès
  test('L’utilisateur peut se déconnecter', async ({ page }) => {

    // Étape 1 : Connexion avec un utilisateur valide (standard_user)
    await login(page, 'standard_user');

    // Étape 2 : Ouverture du menu de navigation
    await page.click('#react-burger-menu-btn');

    // Étape 3 : Clic sur le lien de déconnexion dans le menu
    await page.click('#logout_sidebar_link');

    // Étape 4 : Vérification que l'utilisateur est redirigé vers la page de connexion
    await expect(page).toHaveURL('https://www.saucedemo.com/');

    // Étape 5 : Vérifie que le bouton de connexion est visible à nouveau (preuve que l’utilisateur est bien déconnecté)
    await expect(page.locator('#login-button')).toBeVisible();
  });
});
