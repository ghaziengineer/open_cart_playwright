import { Page } from '@playwright/test';

/**
* Enumération des noms d'articles utilisés dans le panier.
*/
export enum CartItems {
BACKPACK = 'Sauce Labs Backpack',
BOLT_TSHIRT = 'Sauce Labs Bolt T-Shirt',
ONESIE = 'Sauce Labs Onesie'
}

/**
* Ajoute un article au panier sur la page d'inventaire.
* Si la page n'est pas l'inventaire, elle s'y rend.
* @param page - instance de la page Playwright
* @param itemName - nom exact de l'article à ajouter
*/
export async function addItemToCart(page: Page, itemName: CartItems | string) {
  // S'assurer d'être sur la page inventaire
  if (!page.url().includes('/inventory.html')) {
    await page.goto('https://www.saucedemo.com/inventory.html');
  }

  // Localiser un seul article par son texte exact, avec .first() pour éviter la violation du mode strict
  const item = page.locator('.inventory_item').filter({ hasText: itemName }).first();
  const addToCartButton = item.locator('button:has-text("Add to cart")');

  // Attendre que le bouton soit visible et cliquable
  await addToCartButton.waitFor({ state: 'visible', timeout: 30000 });
  await addToCartButton.click();
}

/**
 * Supprime un article du panier sur la page du panier.
 * Si la page n'est pas le panier, elle s'y rend.
 * @param page - instance de la page Playwright
 * @param itemName - nom exact de l'article à retirer
 */
export async function removeItemFromCart(page: Page, itemName: CartItems | string) {
  // S'assurer d'être sur la page panier
  if (!page.url().includes('/cart.html')) {
    await page.goto('https://www.saucedemo.com/cart.html');
  }

  // Cliquer sur le bouton Remove associé à l'article ciblé
  const item = page.locator('.cart_item').filter({ hasText: itemName });
  const removeButton = item.locator('button:text("Remove")');

  await removeButton.waitFor({ state: 'visible', timeout: 15000 });
  await removeButton.click();
}

/**
 * Vérifie si un article est présent dans le panier.
 * Si la page n'est pas le panier, elle s'y rend.
 * @param page - instance de la page Playwright
 * @param itemName - nom exact de l'article
 * @returns boolean - true si présent, false sinon
 */
export async function isItemInCart(page: Page, itemName: CartItems | string): Promise<boolean> {
  if (!page.url().includes('/cart.html')) {
    await page.goto('https://www.saucedemo.com/cart.html');
  }
  const item = page.locator('.cart_item').filter({ hasText: itemName });
  return await item.count() > 0;
}
