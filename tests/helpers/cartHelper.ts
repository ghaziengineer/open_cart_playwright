import { Page } from '@playwright/test';

/**
* Ajoute un article au panier sur la page d'inventaire.
* @param page - instance de la page Playwright
* @param itemName - nom exact de l'article à ajouter
*/
export async function addItemToCart(page: Page, itemName: string) {
  await page.goto('https://www.saucedemo.com/inventory.html');

  // Attendre l'élément du produit
  const item = page.locator('.inventory_item').filter({ hasText: itemName });
  const button = item.locator('button');

  await button.waitFor({ state: 'visible', timeout: 15000 });
  await button.click();
}

/**
 * Supprime un article du panier sur la page du panier.
 * @param page - instance de la page Playwright
 * @param itemName - nom exact de l'article à retirer
 */
export async function removeItemFromCart(page: Page, itemName: string) {
  await page.goto('https://www.saucedemo.com/cart.html');
  // Clique sur le bouton "Remove" associé à l'article ciblé
  await page.click(`text=${itemName} >> xpath=../.. >> button`);
}
