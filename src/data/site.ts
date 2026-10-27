// src/data/site.ts — toutes les infos de contact au même endroit.
// Change une valeur ici, elle change sur tout le site.
export const site = {
  nom: 'DJ Tiako',
  telAffiche: '06 19 84 59 26',
  telLien: 'tel:0619845926',
  email: 'tibobermude@gmail.com',
  instagram: 'https://www.instagram.com/dj_tiako/',
  whatsapp: 'https://wa.me/33619845926',
  zones: ['Lyon', 'Villeurbanne', 'Rhône (69)', 'Ain (01)', 'Isère (38)', 'Drôme (26)', 'Loire (42)', 'Ardèche (07)', 'Besançon', 'Doubs (25)'],
};

// Menu principal (header, menu mobile, footer)
export const menu = [
  { label: 'Mariage', href: '/dj-mariage', enfants: [
    { label: 'Tous les mariages', href: '/dj-mariage' },
    { label: 'DJ mariage Lyon', href: '/dj-mariage-lyon' },
    { label: 'DJ mariage Besançon', href: '/dj-mariage-besancon' },
    { label: 'DJ mariage Ain', href: '/dj-mariage-ain' },
  ] },
  { label: 'Anniversaire', href: '/dj-anniversaire' },
  { label: 'Événements', href: '/dj-evenementiel' },
  { label: 'Tarifs', href: '/tarifs' },
  { label: 'À propos', href: '/a-propos' },
];
