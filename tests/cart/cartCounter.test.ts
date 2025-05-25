import { test, expect } from '@playwright/test';
import { login } from '../helpers/authHelper';
import { addItemToCart, CartItems } from '../helpers/cartHelper';

test.describe('Panier - Badge compteur', () => {
  // Se connecter avant chaque test
  test.beforeEach(async ({ page }) => {
    await login(page, 'standard_user');
  });

  test('Badge du panier reflète correctement le nombre d’articles', async ({ page }) => {
    // Ajouter le premier article et vérifier le compteur à 1
    await addItemToCart(page, CartItems.BACKPACK);
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

    // Ajouter un second article et vérifier le compteur à 2
    await addItemToCart(page, CartItems.BIKE_LIGHT);
    await expect(page.locator('.shopping_cart_badge')).toHaveText('2');
  });
});
