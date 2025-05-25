import { test, expect } from '@playwright/test';
import { login } from '../../helpers/authHelper';

test('Product List - Chaque produit affiche nom, description et prix', async ({ page }) => {
  await login(page, 'standard_user');
  await page.goto('https://www.saucedemo.com/inventory.html');

  const products = page.locator('.inventory_item');
  const count = await products.count();

  for (let i = 0; i < count; i++) {
    const product = products.nth(i);
    const name = await product.locator('.inventory_item_name').textContent();
    const desc = await product.locator('.inventory_item_desc').textContent();
    const price = await product.locator('.inventory_item_price').textContent();

    expect(name && name.trim().length).toBeGreaterThan(0);
    expect(desc && desc.trim().length).toBeGreaterThan(0);
    expect(price && price.trim().length).toBeGreaterThan(0);
  }
});
