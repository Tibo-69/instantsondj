// src/data/avis.ts — les avis clients et les listes affichées selon la page.
export type Avis = { nom: string; texte: string };

const A: Record<string, Avis> = {
  audrey: { nom: 'Audrey', texte: 'Super DJ, très à l’écoute et soucieux de bien faire son travail.' },
  victoria: { nom: 'Victoria', texte: 'Un super DJ qui sait mettre l’ambiance et de super mix !!! Merci de nous avoir fait danser !' },
  marielaure: { nom: 'Marie-Laure', texte: 'Les prestations de Tibo vont bien au-delà de la simple ambiance musicale ! Disponible, de très bon conseil et efficace, il nous a permis d’organiser toute la partie animation autour du mariage de nos amis. Présent lors de la cérémonie, il a assuré avec un parfait timing le lancement des sons en fonction des différents discours. Enfin, quelle superbe soirée dansante !! Il a su endiabler la piste en s’adaptant parfaitement au style de musique des mariés !! Je le recommande chaleureusement. Merci Tibo pour ta précieuse aide pour maintenir l’ambiance tout au long de la journée !!' },
  ophelie: { nom: 'Ophélie', texte: 'Super DJ, tant dans la préparation de l’événement (échanges, conseils…), où Thibaud a toujours été très pro, que dans la partie DJ/animation. Pour notre mariage, nous lui avions donné une playlist pour lui donner une idée de ce que nous aimons écouter et il a parfaitement su à la fois respecter nos envies et adapter les musiques en fonction de l’énergie sur la piste de danse. Beaucoup de retours positifs de la part de nos invités. Je ne peux que recommander DJ Tiako pour vos événements.' },
  ludivine: { nom: 'Ludivine', texte: 'Au top, je n’aurais pas pu rêver mieux pour mon mariage, ambiance jusqu’au bout de la nuit… ou plutôt petit matin !' },
  aymeric: { nom: 'Aymeric', texte: 'Excellente première collaboration avec DJ Tiako ! Thibaud est professionnel, sérieux, agréable et très autonome. Il a parfaitement su s’adapter à notre événement et surtout à un public de seniors, en créant du lien avec eux et en sachant les motiver tout au long de la prestation. Un prestataire fiable et professionnel avec qui nous retravaillerons avec grand plaisir.' },
};

export const listesAvis = {
  general: [A.audrey, A.victoria, A.marielaure],
  lyon: [A.ophelie, A.marielaure, A.audrey],
  besancon: [A.ludivine, A.aymeric, A.victoria],
};
