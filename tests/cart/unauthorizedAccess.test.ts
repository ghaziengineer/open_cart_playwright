import { test, expect } from '@playwright/test';

test.describe('Panier - Accès non autorisé', () => {
  test('Redirection ou accès refusé si non connecté', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/cart.html');

    // Vérifie qu’on est redirigé vers la page de login
    await expect(page).toHaveURL('https://www.saucedemo.com/');
    await expect(page.locator('#login-button')).toBeVisible();
  });
});
