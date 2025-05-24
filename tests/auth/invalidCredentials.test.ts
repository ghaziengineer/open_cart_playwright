import { test, expect, Page } from '@playwright/test';

/**
* Tente une connexion avec les identifiants fournis.
* @param page L'instance de page Playwright
* @param username Le nom d'utilisateur à utiliser
* @param password Le mot de passe à utiliser
*/
async function loginAttempt(page: Page, username: string, password: string) {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', username);
  await page.fill('#password', password);
  await page.click('#login-button');
}

test.describe('Authentification - Informations invalides', () => {

  test('Échec de connexion avec un utilisateur inconnu', async ({ page }) => {
    await loginAttempt(page, 'unknown_user', 'wrong_password');

    await expect(page.locator('[data-test="error"]')).toHaveText(
      'Epic sadface: Username and password do not match any user in this service'
    );
  });

  test('Échec de connexion avec un mot de passe incorrect', async ({ page }) => {
    await loginAttempt(page, 'standard_user', 'wrong_password');

    await expect(page.locator('[data-test="error"]')).toHaveText(
      'Epic sadface: Username and password do not match any user in this service'
    );
  });

});
