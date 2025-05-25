import { test, expect } from '@playwright/test';
import { login } from '../helpers/authHelper';
import { addItemToCart } from '../helpers/cartHelper';

test.describe('Panier - Bouton Continue Shopping', () => {
  test.beforeEach(async ({ page }) => {
    await login(page, 'standard_user');
    await addItemToCart(page, 'Sauce Labs Backpack');
    await page.goto('https://www.saucedemo.com/cart.html');
  });

  test('Le bouton "Continue Shopping" ramène vers l’inventaire', async ({ page }) => {
    await page.click('[data-test="continue-shopping"]');
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  });
});
