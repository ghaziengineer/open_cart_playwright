import { test, expect } from '@playwright/test';
import { login } from '../helpers/authHelper';
import { addItemToCart } from '../helpers/cartHelper';

test.describe('Panier - Badge compteur', () => {
  test.beforeEach(async ({ page }) => {
    await login(page, 'standard_user');
  });

  test('Badge du panier reflète correctement le nombre d’articles', async ({ page }) => {
    await addItemToCart(page, 'Sauce Labs Backpack');
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

    await addItemToCart(page, 'Sauce Labs Bike Light');
    await expect(page.locator('.shopping_cart_badge')).toHaveText('2');
  });
});
