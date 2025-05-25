import { test, expect } from '@playwright/test';
import { login } from '../helpers/authHelper';
import { addItemToCart } from '../helpers/cartHelper';

test.describe('Panier - Ajout d\'article', () => {
  // Se connecter avant chaque test
  test.beforeEach(async ({ page }) => {
    await login(page, 'standard_user');
  });

  /**
   * Test pour vérifier qu'un article peut être ajouté au panier.
   */
  test('Ajouter un article au panier', async ({ page }) => {
    await addItemToCart(page, 'Sauce Labs Backpack');
    await page.goto('https://www.saucedemo.com/cart.html');
    await expect(page.locator('.cart_item')).toContainText('Sauce Labs Backpack');
  });
});
