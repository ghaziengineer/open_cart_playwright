import { test, expect } from '@playwright/test';
import { addItemToCart } from '../helpers/cartHelper';

test.describe('Panier - Ajout d\'articles', () => {
  /**
   * Test pour vérifier qu'un article peut être ajouté au panier.
   */
  test('Ajouter un article au panier', async ({ page }) => {
    // Ajoute l'article "Sauce Labs Backpack" au panier
    await addItemToCart(page, 'Sauce Labs Backpack');

    // Navigue vers la page du panier
    await page.goto('https://www.saucedemo.com/cart.html');

    // Vérifie que l'article est bien présent dans le panier
    await expect(page.locator('.cart_item')).toContainText('Sauce Labs Backpack');
  });
});
