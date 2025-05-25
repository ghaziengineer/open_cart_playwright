import { test, expect } from '@playwright/test';
import { addItemToCart, removeItemFromCart } from '../helpers/cartHelper';

test.describe('Panier - Suppression d\'articles', () => {
  /**
   * Test pour vérifier qu'un article peut être retiré du panier.
   */
  test('Supprimer un article du panier', async ({ page }) => {
    // Ajoute l'article d'abord pour pouvoir le retirer ensuite
    await addItemToCart(page, 'Sauce Labs Backpack');

    // Supprime l'article ajouté précédemment
    await removeItemFromCart(page, 'Sauce Labs Backpack');

    // Navigue vers la page du panier
    await page.goto('https://www.saucedemo.com/cart.html');

    // Vérifie que l'article n'est plus présent dans le panier
    await expect(page.locator('.cart_item')).not.toContainText('Sauce Labs Backpack');
  });
});
