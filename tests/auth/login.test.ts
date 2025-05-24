import { test, expect } from '@playwright/test';
import { login, USERS } from '../helpers/authHelper';

const validUsers = Object.keys(USERS.valid) as (keyof typeof USERS.valid)[];
const lockedOutUsers = Object.keys(USERS.lockedOut) as (keyof typeof USERS.lockedOut)[];

validUsers.forEach((username) => {
  test(`Connexion réussie pour ${username}`, async ({ page }) => {
    await login(page, username);
    await expect(page).toHaveURL(/inventory.html/);
    await expect(page.locator('.inventory_list')).toBeVisible();
  });
});

lockedOutUsers.forEach((username) => {
  test(`Connexion refusée pour ${username}`, async ({ page }) => {
    await login(page, username);
    await expect(page.locator('[data-test="error"]')).toContainText('locked out');
  });
});
