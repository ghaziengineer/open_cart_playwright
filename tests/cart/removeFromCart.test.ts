import { test, expect } from '@playwright/test';
import { login } from '../helpers/authHelper';
import { addItemToCart, removeItemFromCart, CartItems } from '../helpers/cartHelper';

test.describe('Panier - Suppression d\'article', () => {
  test.beforeEach(async ({ page }) => {
    // Connexion avant chaque test
    await login(page, 'standard_user');
  });

  test('Supprimer "Sauce Labs Backpack" du panier', async ({ page }) => {
    // Ajouter l'article au panier
    await addItemToCart(page, CartItems.BACKPACK);

    // Aller à la page du panier
    await page.click('.shopping_cart_link');

    // Vérifier que l'article est présent dans le panier
    await expect(page.locator('.cart_item')).toContainText(CartItems.BACKPACK);

    // Supprimer l'article du panier
    await removeItemFromCart(page, CartItems.BACKPACK);

    // Vérifier que le panier est vide
    await expect(page.locator('.cart_item')).toHaveCount(0);
  });
});
