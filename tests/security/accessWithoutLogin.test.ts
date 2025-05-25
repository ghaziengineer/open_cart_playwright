import { test, expect } from '@playwright/test';
import { SecurityHelper } from '../helpers/securityHelper';

test('Accès sans login redirige vers login', async ({ page }) => {
  await SecurityHelper.accessProtectedPageWithoutLogin(page, 'https://www.saucedemo.com/inventory.html');

  // Vérifie qu’on reste sur la page de login
  await expect(page).toHaveURL('https://www.saucedemo.com/');
});
