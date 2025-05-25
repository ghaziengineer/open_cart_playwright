import { test, expect } from '@playwright/test';
import { addItemToCart, CartItems } from '../helpers/cartHelper';
import { login, ValidUser } from '../helpers/authHelper';

test('Panier - Badge compteur reflète correctement le nombre d’articles', async ({ page }) => {
  // Se connecter avec un utilisateur valide
  await login(page, 'standard_user' as ValidUser);

  // Ajouter un article au panier
  await addItemToCart(page, CartItems.BACKPACK);

  // Vérifier que le badge du panier affiche "1"
  const badge = page.locator('.shopping_cart_badge');
  await expect(badge).toHaveText('1');
});
