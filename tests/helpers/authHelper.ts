import { test, expect } from '@playwright/test';
import { login, USERS } from '../helpers/authHelper';

// Récupération dynamique des noms d'utilisateurs valides et bloqués
const validUsers = Object.keys(USERS.valid) as (keyof typeof USERS.valid)[];
const lockedOutUsers = Object.keys(USERS.lockedOut) as (keyof typeof USERS.lockedOut)[];

// Pour chaque utilisateur valide, on définit un test qui doit réussir la connexion
validUsers.forEach((username) => {
  test(`Connexion réussie pour ${username}`, async ({ page }) => {
    // Utilisation du helper login pour effectuer la connexion
    await login(page, username);

    // Vérification que l'URL correspond bien à la page d'inventaire
    await expect(page).toHaveURL(/inventory.html/);

    // Vérification que la liste des produits est visible
    await expect(page.locator('.inventory_list')).toBeVisible();
  });
});

// Pour chaque utilisateur bloqué, on définit un test qui doit refuser la connexion avec un message d'erreur
lockedOutUsers.forEach((username) => {
  test(`Connexion refusée pour ${username}`, async ({ page }) => {
    // Tentative de connexion
    await login(page, username);

    // Vérification que le message d'erreur contient "locked out"
    await expect(page.locator('[data-test="error"]')).toContainText('locked out');
  });
});
