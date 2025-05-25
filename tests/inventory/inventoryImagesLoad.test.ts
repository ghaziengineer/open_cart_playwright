import { test } from '@playwright/test';
import { login } from '../helpers/authHelper';
import { goToInventoryPage, checkAllProductImagesLoaded } from '../helpers/inventoryHelper';

test('Inventory - Toutes les images des produits sont chargées', async ({ page }) => {
  await login(page, 'standard_user');
  await goToInventoryPage(page);

  await checkAllProductImagesLoaded(page);
});
