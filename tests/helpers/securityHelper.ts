import { Page } from '@playwright/test';
import { login } from './authHelper';

export class SecurityHelper {
  /**
   * Efface le localStorage et les cookies après avoir chargé la page de login.
   */
  static async clearSession(page: Page): Promise<void> {
    await page.goto('https://www.saucedemo.com/');
    await page.evaluate(() => {
      localStorage.clear();
    });
    await page.context().clearCookies();
  }

  /**
   * Tente d’accéder à une page protégée sans être connecté.
   */
  static async accessProtectedPageWithoutLogin(page: Page, url: string): Promise<void> {
    await this.clearSession(page);
    await page.goto(url);
  }

  /**
   * Appelle la fonction login du helper d’authentification.
   */
  static async login(page: Page, username: string): Promise<void> {
    await login(page, username);
  }

  /**
   * Effectue une déconnexion de l’utilisateur.
   */
  static async logout(page: Page): Promise<void> {
    await page.click('#react-burger-menu-btn');
    await page.waitForSelector('#logout_sidebar_link', { state: 'visible' });
    await page.click('#logout_sidebar_link');
  }
}
