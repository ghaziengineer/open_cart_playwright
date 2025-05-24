import { Page } from '@playwright/test';

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

export type ValidUser = keyof typeof USERS.valid;
export type LockedOutUser = keyof typeof USERS.lockedOut;
export type Username = ValidUser | LockedOutUser;

export async function login(page: Page, username: Username) {
  let password: string | undefined;

  if (username in USERS.valid) {
    password = USERS.valid[username as ValidUser];
  } else if (username in USERS.lockedOut) {
    password = USERS.lockedOut[username as LockedOutUser];
  } else {
    throw new Error(`Utilisateur inconnu: ${username}`);
  }

  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', username);
  await page.fill('#password', password);

  // Attend que le bouton soit visible avec timeout 15s
  await page.waitForSelector('#login-button', { state: 'visible', timeout: 15000 });

  // Clique avec timeout allongé
  await page.click('#login-button', { timeout: 15000 });
}
