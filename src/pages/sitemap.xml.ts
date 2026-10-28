// src/pages/sitemap.xml.ts — plan du site pour Google (adresse : /sitemap.xml).
// Ajoute ici une nouvelle page quand tu en crées une.
import type { APIRoute } from 'astro';

const pages = [
  '/', '/dj-mariage', '/dj-mariage-lyon', '/dj-mariage-besancon', '/dj-mariage-ain',
  '/dj-anniversaire', '/dj-evenementiel', '/tarifs', '/a-propos', '/devis',
  '/mentions-legales', '/confidentialite',
];

export const GET: APIRoute = ({ site }) => {
  const base = (site?.href ?? 'https://instantsondj.fr/').replace(/\/$/, '');
  // même format que les liens « canonical » des pages (avec / à la fin)
  const urls = pages.map((p) => `  <url><loc>${base}${p === '/' ? '/' : p + '/'}</loc></url>`).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
