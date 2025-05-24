import { Page } from '@playwright/test';

/**
* Utilisateurs disponibles pour les tests d'authentification sur Saucedemo.
* - `valid` : utilisateurs autorisés à se connecter.
* - `lockedOut` : utilisateur bloqué qui ne peut pas se connecter.
*/
export const USERS = {
valid: {
standard_user: 'secret_sauce',
problem_user: 'secret_sauce',
performance_glitch_user: 'secret_sauce',
error_user: 'secret_sauce',
visual_user: 'secret_sauce',
},
lockedOut: {
locked_out_user: 'secret_sauce',
},
} as const;

// Types pour sécuriser les appels à la fonction login
export type ValidUser = keyof typeof USERS.valid;
export type LockedOutUser = keyof typeof USERS.lockedOut;
export type Username = ValidUser | LockedOutUser;

/**
* Fonction pour effectuer une tentative de connexion sur le site Saucedemo.
*
* @param page - L'instance de la page Playwright.
* @param username - Le nom d'utilisateur à tester (valide ou bloqué).
*/
export async function login(page: Page, username: Username) {
  let password: string | undefined;

  // Récupération du mot de passe selon la catégorie de l'utilisateur
  if (username in USERS.valid) {
    password = USERS.valid[username as ValidUser];
  } else if (username in USERS.lockedOut) {
    password = USERS.lockedOut[username as LockedOutUser];
  } else {
    throw new Error(`Utilisateur inconnu: ${username}`);
  }

  // Navigation vers la page de login
  await page.goto('https://www.saucedemo.com/');

  // Remplir les champs du formulaire
  await page.fill('#user-name', username);
  await page.fill('#password', password);

  // Attendre que le bouton soit visible avant de cliquer
  await page.waitForSelector('#login-button', {
    state: 'visible',
    timeout: 15000
  });

  // Cliquer sur le bouton de login avec timeout augmenté
  await page.click('#login-button', { timeout: 15000 });
}
