import { test, expect } from '@playwright/test';

/**
* Suite de tests pour valider les erreurs d'authentification
* lorsque les champs du formulaire de connexion sont vides.
*/
test.describe('Authentification - Champs vides', () => {

  /**
   * Test 1 : Vérifie que l'application affiche une erreur
   * lorsque l'utilisateur tente de se connecter sans renseigner
   * ni le nom d'utilisateur ni le mot de passe.
   */
  test('Connexion échoue avec champs vides', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/'); // Accède à la page de login
    await page.click('#login-button'); // Clique sans remplir les champs
    await expect(page.locator('[data-test="error"]'))
      .toHaveText('Epic sadface: Username is required'); // Vérifie l'erreur affichée
  });

  /**
   * Test 2 : Vérifie que l'application affiche une erreur
   * lorsque l'utilisateur saisit le nom d'utilisateur mais
   * laisse le mot de passe vide.
   */
  test('Connexion échoue avec mot de passe vide', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user'); // Remplit le champ utilisateur
    await page.click('#login-button'); // Ne remplit pas le mot de passe
    await expect(page.locator('[data-test="error"]'))
      .toHaveText('Epic sadface: Password is required'); // Vérifie l'erreur affichée
  });

  /**
   * Test 3 : Vérifie que l'application affiche une erreur
   * lorsque l'utilisateur saisit uniquement le mot de passe.
   */
  test('Connexion échoue avec utilisateur vide', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#password', 'secret_sauce'); // Remplit uniquement le mot de passe
    await page.click('#login-button');
    await expect(page.locator('[data-test="error"]'))
      .toHaveText('Epic sadface: Username is required'); // Vérifie l'erreur affichée
  });

});
