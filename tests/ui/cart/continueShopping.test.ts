import { test, expect } from '@playwright/test';
import { login } from '../../helpers/authHelper';
import { addItemToCart, CartItems } from '../../helpers/cartHelper';

test.describe('Panier - Bouton Continue Shopping', () => {
  test.beforeEach(async ({ page }) => {
    // Se connecter
    await login(page, 'standard_user');

    // Ajouter un article au panier
    await addItemToCart(page, CartItems.BACKPACK);

    // Naviguer vers la page du panier
    await page.goto('https://www.saucedemo.com/cart.html');
  });

  test('Le bouton "Continue Shopping" ramène vers l’inventaire', async ({ page }) => {
    // Cliquer sur le bouton "Continue Shopping"
    await page.click('[data-test="continue-shopping"]');

    // Vérifier que l'URL correspond à la page inventaire
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  });
});
