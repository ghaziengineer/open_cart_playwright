import { test, expect } from '@playwright/test';
import { login } from '../../helpers/authHelper';
import { goToInventoryPage, openFirstProductDetails } from '../../helpers/inventoryHelper';

test('Inventory - Détails du premier produit affiché', async ({ page }) => {
  await login(page, 'standard_user');
  await goToInventoryPage(page);

  const productName = await openFirstProductDetails(page);
  await expect(page).toHaveURL(/inventory-item.html|inventory-item/); // URL peut varier

  // Vérifie que le nom du produit dans la page détails correspond
  const detailName = page.locator('.inventory_details_name');
  await expect(detailName).toHaveText(productName);
});
