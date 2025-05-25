import { test, expect } from '@playwright/test';
import { login } from '../helpers/authHelper';
import { goToInventoryPage } from '../helpers/inventoryHelper';

test('Inventory - La page d’inventaire charge correctement avec les produits visibles', async ({ page }) => {
  await login(page, 'standard_user');
  await goToInventoryPage(page);

  // Vérifie que la liste des produits est présente
  const products = page.locator('.inventory_item');
  const count = await products.count();
  expect(count).toBeGreaterThan(0);

  // Vérifie qu’un nom de produit est visible
  const firstProductName = page.locator('.inventory_item_name').first();
  await expect(firstProductName).toBeVisible();
});
