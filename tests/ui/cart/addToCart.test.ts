import { test, expect } from '@playwright/test';
import { login } from '../../helpers/authHelper';
import { addItemToCart, CartItems } from '../../helpers/cartHelper';

test.describe('Panier - Ajout d\'article', () => {
  // Se connecter avant chaque test
  test.beforeEach(async ({ page }) => {
    await login(page, 'standard_user');
  });

  /**
   * Test pour vérifier qu'un article peut être ajouté au panier.
   */
  test('Ajouter un article au panier', async ({ page }) => {
    await addItemToCart(page, CartItems.BACKPACK);
    await page.goto('https://www.saucedemo.com/cart.html');
    const cartItem = page.locator('.cart_item', { hasText: CartItems.BACKPACK });
    await expect(cartItem).toBeVisible();
  });
});
