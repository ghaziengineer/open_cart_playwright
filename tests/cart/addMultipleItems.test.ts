import { test, expect } from '@playwright/test';
import { login } from '../helpers/authHelper';
import { addItemToCart, CartItems } from '../helpers/cartHelper';

test.describe('Panier - Ajout de plusieurs articles', () => {
  test.beforeEach(async ({ page }) => {
    await login(page, 'standard_user');
  });

  test('Ajouter plusieurs articles au panier', async ({ page }) => {
    const items = [
      CartItems.BACKPACK,
      CartItems.BOLT_TSHIRT,
      CartItems.ONESIE
    ];

    for (const item of items) {
      await addItemToCart(page, item);
    }

    await page.goto('https://www.saucedemo.com/cart.html');

    for (const item of items) {
      const cartItem = page.locator('.cart_item', { hasText: item });
      await expect(cartItem).toBeVisible();
    }
});
});
