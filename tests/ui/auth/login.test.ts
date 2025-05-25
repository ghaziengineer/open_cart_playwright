import { test, expect } from '@playwright/test';
import { login, USERS } from '../../helpers/authHelper';

// Récupération des listes d'utilisateurs à partir de l'objet USERS défini dans authHelper
// validUsers : utilisateurs dont la connexion doit réussir
const validUsers = Object.keys(USERS.valid) as (keyof typeof USERS.valid)[];
// lockedOutUsers : utilisateurs dont la connexion doit être refusée (bloqués)
const lockedOutUsers = Object.keys(USERS.lockedOut) as (keyof typeof USERS.lockedOut)[];

test.describe('Tests d\'authentification - Saucedemo', () => {

  // Pour chaque utilisateur valide, on crée un test qui vérifie :
  // - que la connexion aboutit bien à la page d'inventaire
  // - que la liste des produits est visible
  validUsers.forEach(username => {
    test(`Connexion réussie - ${username}`, async ({ page }) => {
      await login(page, username); // appelle la fonction de login avec le username
      await expect(page).toHaveURL(/inventory.html/); // vérifie que l'URL contient "inventory.html"
      await expect(page.locator('.inventory_list')).toBeVisible(); // vérifie que la liste des produits est visible
    });
  });

  // Pour chaque utilisateur bloqué, on crée un test qui vérifie que :
  // - un message d'erreur contenant "locked out" s'affiche
  lockedOutUsers.forEach(username => {
    test(`Connexion refusée - ${username}`, async ({ page }) => {
      await login(page, username); // tentative de login
      // vérifie que le message d'erreur approprié est affiché
      await expect(page.locator('[data-test="error"]')).toContainText('locked out');
    });
  });

});
