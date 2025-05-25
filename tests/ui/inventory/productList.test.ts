import { test, expect } from '@playwright/test';
import { login } from '../../helpers/authHelper';

test('Liste des produits - tous les produits doivent être visibles après connexion', async ({ page }) => {
  await login(page, 'standard_user');

  // Vérifie que la redirection mène bien à l'inventaire
  await expect(page).toHaveURL(/.*inventory.html/);

  const products = page.locator('.inventory_item');
  await expect(products).toHaveCount(6); // Il y a 6 articles sur SauceDemo
});
