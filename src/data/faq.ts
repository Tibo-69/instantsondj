// src/data/faq.ts — les questions de la FAQ, par thème.
// Pour l'instant : la FAQ générale de l'Accueil. On ajoutera mariage, anniversaire, etc.
export type Question = { q: string; r: string[] };

export const faqGenerale: Question[] = [
  { q: 'Quels types d’événements animez-vous ?', r: ['Mariages, anniversaires, soirées d’entreprise, séminaires et fêtes privées. Chaque prestation a sa page dédiée : Mariage, Anniversaire et Événements.'] },
  { q: 'Dans quel secteur intervenez-vous ?', r: ['Basé à Villeurbanne, j’interviens dans toute la région lyonnaise (Rhône, Ain, Isère, Drôme, Loire et Ardèche) et autour de Besançon, dans le Doubs.', 'Le déplacement est inclus jusqu’à 70 km aller-retour.'] },
  { q: 'Le matériel est-il fourni ?', r: ['Oui. Sonorisation professionnelle, jeux de lumière et micros sans fil sont inclus, avec l’installation et les réglages sur place. Des options comme l’éclairage décoratif ou les jets d’étincelles froides peuvent s’ajouter.'] },
  { q: 'Le devis est-il gratuit ?', r: ['Oui, gratuit et sans engagement. Je vous réponds sous 24 h. Un acompte de 30 % est ensuite demandé à la signature pour bloquer votre date.'] },
  { q: 'Combien de temps à l’avance faut-il réserver ?', r: ['Le plus tôt possible : les samedis de mai à septembre partent vite. Vous pouvez réserver jusqu’à 24 mois à l’avance, et une demande de dernière minute reste possible selon mes disponibilités.'] },
];

// FAQ mariage : la même base pour les 3 pages mariage,
// seules les réponses « déplacement » et « secteur » changent selon la ville.
// Le texte peut contenir des liens <a> : ils sont affichés tels quels.
export type Ville = 'general' | 'lyon' | 'besancon';

export function faqMariagePour(ville: Ville): Question[] {
  const base = ville === 'besancon' ? 'Besançon' : ville === 'general' ? 'Villeurbanne ou de Besançon' : 'Villeurbanne';
  const secteur: Record<Ville, string[]> = {
    general: [
      'J’interviens dans toute la région lyonnaise (Rhône, Ain, Isère, Drôme, Loire et Ardèche) et autour de Besançon, dans le Doubs.',
      'Pour le détail, consultez les pages <a href="/dj-mariage-lyon">DJ mariage Lyon</a> et <a href="/dj-mariage-besancon">DJ mariage Besançon</a>.',
    ],
    lyon: [
      'J’interviens à Lyon, dans toute la métropole lyonnaise et dans le Rhône (69) : Villeurbanne, Vénissieux, Bron, Tassin-la-Demi-Lune, Caluire-et-Cuire, Écully, Oullins-Pierre-Bénite et les communes de l’ouest lyonnais.',
      'Je me déplace également dans les départements voisins : Ain (01), Isère (38), Drôme (26), Loire (42) et Ardèche (07).',
    ],
    besancon: [
      'J’interviens à Besançon, dans tout le Doubs (25) et dans les départements voisins, pour vos mariages et vos événements.',
    ],
  };
  return [
    { q: 'Combien de temps à l’avance dois-je réserver mon DJ de mariage ?', r: ['Vous pouvez réserver votre date jusqu’à 24 mois à l’avance. Une réservation de dernière minute reste possible selon mes disponibilités.', 'Pour les mariages entre mai et septembre, les samedis partent vite : mieux vaut s’y prendre tôt.'] },
    { q: 'Faut-il verser un acompte pour réserver la date ?', r: ['Oui. Un acompte de 30 % est demandé à la signature du devis : votre date est alors bloquée rien que pour vous.'] },
    { q: 'Peut-on personnaliser la musique de notre mariage ?', r: ['Oui, bien sûr. La programmation est construite avec vous en amont, lors de nos échanges de préparation. Vous me donnez les morceaux incontournables pour chaque temps fort : entrée des mariés, ouverture de bal, gâteau, fin de soirée…', 'Je tiens aussi compte de vos goûts, des artistes et styles que vous aimez, et de ceux à éviter absolument, pour une ambiance qui vous ressemble vraiment.'] },
    { q: 'À quelle heure se termine la soirée ?', r: ['L’heure de fin dépend des règles de votre lieu de réception. De mon côté, je propose une soirée dansante jusqu’à 4 h 30, avec la possibilité de prolonger en heures supplémentaires.'] },
    { q: 'Les discours et animations sont-ils gérés pendant la soirée ?', r: ['Oui. Les micros sans fil pour les discours et les animations de vos proches sont inclus, et le son est réglé selon la salle pour que chaque voix soit claire partout.', 'Je peux aussi animer moi-même les jeux et temps forts si vous le souhaitez.'] },
    { q: 'Peut-on se rencontrer avant le mariage ?', r: ['Oui. Le nombre de rendez-vous dépend de votre mariage : on se voit autant que nécessaire pour caler le déroulé, vos envies musicales et les détails techniques du lieu.'] },
    { q: 'Y a-t-il des frais de déplacement ?', r: [`Les déplacements sont inclus jusqu’à 70 km aller-retour depuis ${base}. Au-delà, des frais kilométriques s’appliquent : on en parle lors de notre rendez-vous, et ils sont toujours indiqués dans votre devis.`] },
    { q: 'Dans quel secteur intervenez-vous pour les mariages ?', r: secteur[ville] },
  ];
}

// FAQ de la page DJ Anniversaire
export const faqAnniversaire: Question[] = [
  { q: 'Pour quels anniversaires intervenez-vous ?', r: ['Tous les âges : 18 ans, 20 ans, 30 ans, 40 ans, 50 ans, 60 ans et plus. Chaque soirée est préparée selon la personne fêtée et ses invités.'] },
  { q: 'Peut-on personnaliser la musique ?', r: ['Oui. La playlist est construite avec vous en amont, selon l’âge de la personne fêtée, les générations présentes et les styles souhaités. Pendant la soirée, je m’adapte en temps réel à la piste de danse.'] },
  { q: 'Où pouvez-vous animer mon anniversaire ?', r: ['Là où vous le souhaitez : salle des fêtes, gîte, domaine ou chez vous. J’adapte le son et la lumière à la taille du lieu.'] },
  { q: 'Jusqu’à quelle heure restez-vous pour nous faire danser ?', r: ['L’heure de fin dépend des contraintes du lieu. Je propose une soirée dansante jusqu’à 4 h 30, et des heures supplémentaires sont possibles.'] },
  { q: 'Comment obtenir un devis pour mon anniversaire ?', r: ['Consultez la page <a href="/tarifs">Tarifs</a> pour un premier repère, puis faites votre <a href="/devis">demande de devis</a> en précisant la date, le lieu et le nombre d’invités. Je vous réponds sous 24 h.'] },
];

// FAQ de la page DJ Événements
export const faqEvenements: Question[] = [
  { q: 'Quels types d’événements animez-vous ?', r: ['Un peu de tout : soirées d’entreprise, séminaires, fêtes de fin d’année, inaugurations, mais aussi soirées privées entre amis ou en famille.'] },
  { q: 'Fournissez-vous des micros pour les discours et prises de parole ?', r: ['Oui. Des micros sans fil sont inclus, et le son est réglé selon la salle pour que chaque intervention soit claire, du discours d’accueil à la remise de prix.'] },
  { q: 'Pouvez-vous adapter la musique au public de l’entreprise ?', r: ['Oui. On définit ensemble l’ambiance : fond musical discret pendant le cocktail, puis soirée dansante si vous le souhaitez, avec une programmation adaptée à vos équipes.'] },
  { q: 'Combien de rendez-vous faut-il avant l’événement ?', r: ['Cela dépend de votre événement : on se voit autant que nécessaire pour caler le déroulé, l’ambiance souhaitée et les détails techniques du lieu.'] },
  { q: 'Établissez-vous une facture au nom de l’entreprise ?', r: ['Oui. Une facture est établie au nom de votre entreprise, avec toutes les mentions nécessaires à votre comptabilité.'] },
  { q: 'Intervenez-vous en semaine, et jusqu’à quelle heure ?', r: ['J’interviens aussi en semaine, par exemple pour un séminaire ou un afterwork. L’heure de fin dépend des contraintes du lieu : je propose une soirée jusqu’à 4 h 30, avec des heures supplémentaires possibles.'] },
];

// FAQ de la page Tarifs
export const faqTarifs: Question[] = [
  { q: 'Que comprennent les formules ?', r: ['Chaque formule comprend la prestation DJ, la sonorisation, l’éclairage et les micros sans fil, adaptés au nombre d’invités. Le détail de chaque pack est indiqué ci-dessus.'] },
  { q: 'Les prix sont-ils fixes ? La TVA est-elle comprise ?', r: ['Les prix indiqués sont tout compris, sans supplément : TVA non applicable (art. 293 B du CGI). Ce sont des tarifs de base : le devis final dépend de la date, du lieu, de la durée et des options choisies.'] },
  { q: 'Peut-on ajouter des options à une formule ?', r: ['Oui : jets d’étincelles froides (50 €), sonorisation du vin d’honneur (140 €), éclairage décoratif (150 €) ou sonorisation de la cérémonie laïque (180 €).'] },
  { q: 'Faut-il verser un acompte ?', r: ['Oui. Un acompte de 30 % est demandé à la signature du devis pour bloquer votre date.'] },
  { q: 'Y a-t-il des frais de déplacement ?', r: ['Les déplacements sont inclus jusqu’à 70 km aller-retour depuis Villeurbanne. Au-delà, des frais kilométriques s’appliquent : on en parle lors de notre rendez-vous, et ils sont toujours indiqués dans votre devis.'] },
];
