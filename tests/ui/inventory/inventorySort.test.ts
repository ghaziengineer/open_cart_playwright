import { test, expect } from '@playwright/test';
import { login } from '../../helpers/authHelper';
import { goToInventoryPage, sortInventory, getProductPrices } from '../../helpers/inventoryHelper';

test('Inventory - Tri des produits par prix (bas vers haut)', async ({ page }) => {
  await login(page, 'standard_user');
  await goToInventoryPage(page); // garantit que le dropdown est prêt

  await sortInventory(page, 'lohi'); // low to high

  const prices = await getProductPrices(page);
  const sortedPrices = [...prices].sort((a, b) => a - b);
  expect(prices).toEqual(sortedPrices);
});

test('Inventory - Tri des produits par prix (haut vers bas)', async ({ page }) => {
  await login(page, 'standard_user');
  await goToInventoryPage(page); // garantit que le dropdown est prêt

  await sortInventory(page, 'hilo'); // high to low

  const prices = await getProductPrices(page);
  const sortedPrices = [...prices].sort((a, b) => b - a);
  expect(prices).toEqual(sortedPrices);
});
