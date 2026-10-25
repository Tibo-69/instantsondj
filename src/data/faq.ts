// src/data/faq.ts — les questions de la FAQ, par thème.
// Pour l'instant : la FAQ générale de l'Accueil. On ajoutera mariage, anniversaire, etc.
export type Question = { q: string; r: string[] };

export const faqGenerale: Question[] = [
  { q: 'Quels types d’événements animez-vous ?', r: ['Mariages, anniversaires, soirées d’entreprise, séminaires et fêtes privées. Chaque prestation a sa page dédiée : Mariage, Anniversaire et Événements.'] },
  { q: 'Dans quel secteur intervenez-vous ?', r: ['Basé à Villeurbanne, j’interviens dans toute la région lyonnaise (Rhône, Ain, Isère, Drôme, Loire et Ardèche) et autour de Besançon, dans le Doubs.', 'Le déplacement est inclus jusqu’à 70 km aller-retour.'] },
  { q: 'Le matériel est-il fourni ?', r: ['Oui. Sonorisation professionnelle, jeux de lumière et micros sans fil sont inclus, avec l’installation et les réglages sur place. Des options comme l’éclairage décoratif ou les jets d’étincelles froides peuvent s’ajouter.'] },
  { q: 'Le devis est-il gratuit ?', r: ['Oui, gratuit et sans engagement. Je vous réponds sous 24 h. Un acompte de 30 % est ensuite demandé à la signature pour bloquer votre date.'] },
  { q: 'Combien de temps à l’avance faut-il réserver ?', r: ['Le plus tôt possible : les samedis de mai à septembre partent vite. Vous pouvez réserver jusqu’à 24 mois à l’avance, et une demande de dernière minute reste possible selon mes disponibilités.'] },
];
