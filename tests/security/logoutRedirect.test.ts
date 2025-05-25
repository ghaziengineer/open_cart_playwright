import { test, expect } from '@playwright/test';
import { SecurityHelper } from '../helpers/securityHelper';

test('Déconnexion redirige vers login', async ({ page }) => {
  await SecurityHelper.login(page, 'standard_user');

  // S’assurer qu’on est bien sur la page d’inventaire
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

  await SecurityHelper.logout(page);

  // Vérifier la redirection vers la page de login
  await expect(page).toHaveURL('https://www.saucedemo.com/');
});
