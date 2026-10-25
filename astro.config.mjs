// astro.config.mjs — configuration d'Astro
// "site" sert à générer les URL complètes (balises de partage, sitemap).
// Remplace-le par le vrai nom de domaine quand il sera choisi.
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://djtiako.fr',
});
