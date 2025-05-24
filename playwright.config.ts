import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,       // Timeout global des tests (30 secondes)
  retries: 0,           // Pas de retry par défaut (tu peux mettre 1 si besoin)
  use: {
    headless: true,     // Exécute les tests en mode headless (sans interface graphique)
    viewport: { width: 1280, height: 720 },
    actionTimeout: 15000, // Timeout par action (clic, fill...) augmenté à 15s pour éviter les erreurs sur des actions lentes
    baseURL: 'https://demo.opencart.com',
    screenshot: 'only-on-failure', // Capture écran uniquement en cas d’échec
    video: 'retain-on-failure',    // Vidéo conservée uniquement en cas d’échec
  },
});