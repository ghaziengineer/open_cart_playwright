import { test, expect } from '@playwright/test';

test.describe('Panier - Accès non autorisé', () => {
  test('Redirection vers la page de login si non connecté', async ({ page }) => {
    // Tentative d'accès direct à la page panier sans connexion
    await page.goto('https://www.saucedemo.com/cart.html');

    // Vérifie la redirection vers la page d'accueil/login
    await expect(page).toHaveURL('https://www.saucedemo.com/');

    // Vérifie que le bouton de login est visible (indiquant que l'on est bien sur la page login)
    await expect(page.locator('#login-button')).toBeVisible();
  });
});
