// tests/cart/removeFromCart.test.ts
import { test, expect } from '@playwright/test';
import { login } from '../helpers/authHelper';
import { addItemToCart, removeItemFromCart } from '../helpers/cartHelper';

test.describe('Panier - Suppression d\'article', () => {

  test.beforeEach(async ({ page }) => {
    await login(page, 'standard_user');
  });

  test('Supprimer "Sauce Labs Backpack" du panier', async ({ page }) => {
    await addItemToCart(page, 'Sauce Labs Backpack');
    await page.click('.shopping_cart_link');

    // Vérifie que l'article est bien ajouté
    await expect(page.locator('.cart_item')).toContainText('Sauce Labs Backpack');

    await removeItemFromCart(page, 'Sauce Labs Backpack');

    // Vérifie que le panier est vide
    await expect(page.locator('.cart_item')).toHaveCount(0);
  });

});
