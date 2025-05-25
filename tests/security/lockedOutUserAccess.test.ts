import { test, expect } from '@playwright/test';
import { SecurityHelper } from '../helpers/securityHelper';

test('Utilisateur bloqué ne peut pas se connecter', async ({ page }) => {
  await SecurityHelper.login(page, 'locked_out_user');

  // On attend un message d’erreur visible
  const errorMessage = page.locator('[data-test="error"]');
  await expect(errorMessage).toBeVisible();
  await expect(errorMessage).toContainText('Epic sadface: Sorry, this user has been locked out.');
  
  // Vérifier qu'on reste sur la page de login
  await expect(page).toHaveURL('https://www.saucedemo.com/');
});
