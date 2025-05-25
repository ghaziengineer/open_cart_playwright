import { Page } from '@playwright/test';

/**
 * Navigue vers la page Inventory, en se connectant si nécessaire.
 * @param page - instance Playwright
 */
export async function goToInventoryPage(page: Page) {
  if (!page.url().includes('/inventory.html')) {
    await page.goto('https://www.saucedemo.com/');
    await page.goto('https://www.saucedemo.com/inventory.html', { waitUntil: 'domcontentloaded' });
  }

  // S'assurer que la page est bien prête
  await page.locator('[data-test="product-sort-container"]').waitFor({ state: 'visible', timeout: 10000 });
}

/**
 * Trie la liste des produits par la valeur du dropdown (ex: 'lohi', 'hilo', etc.)
 * @param page - instance Playwright
 * @param sortValue - valeur du tri (ex: 'lohi' = prix du plus bas au plus élevé)
 */
export async function sortInventory(page: Page, sortValue: string) {
  const dropdown = page.locator('[data-test="product-sort-container"]');

  const count = await dropdown.count();
  console.log('Dropdown count:', count);

  if (count === 0) {
    throw new Error('Dropdown de tri introuvable sur la page');
  }

  await dropdown.waitFor({ state: 'visible', timeout: 15000 });
  await dropdown.selectOption(sortValue);
}

/**
 * Récupère les prix des produits actuellement affichés.
 * @param page - instance Playwright
 * @returns liste de prix (float)
 */
export async function getProductPrices(page: Page): Promise<number[]> {
  const pricesText = await page.locator('.inventory_item_price').allTextContents();
  return pricesText.map(price => parseFloat(price.replace('$', '')));
}

/**
 * Clique sur le premier produit de la liste et retourne son nom.
 * @param page - instance Playwright
 * @returns nom du produit cliqué
 */
export async function openFirstProductDetails(page: Page): Promise<string> {
  const firstItem = page.locator('.inventory_item').first();
  const itemName = await firstItem.locator('.inventory_item_name').textContent();

  const titleLink = firstItem.locator('a[data-test$="-title-link"]');
  await titleLink.click();

  return itemName ?? '';
}

/**
 * Vérifie que toutes les images des produits ont une source définie.
 * @param page - instance Playwright
 */
export async function checkAllProductImagesLoaded(page: Page) {
  const images = page.locator('.inventory_item_img img');
  const count = await images.count();

  for (let i = 0; i < count; i++) {
    const src = await images.nth(i).getAttribute('src');
    if (!src) {
      throw new Error(`Image non chargée à l'index ${i}`);
    }
  }
}
