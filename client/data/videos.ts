export interface Video {
  id: string;
  title: string;
  thumbnail: string;
  category: string;
  views: number;
  duration: string;
  videoUrl: string;
  description: string;
  comedian: string;
  uploadDate: string;
}

const BASE = "https://api.ameora.fun/content/GalaxiWebsite/COMEDY-50";

const baseVideos = [
  { id: "1",  title: "Les Chroniques du Café",              category: "Observation",    views: 2500000, duration: "8:45",  description: "Un regard hilarant sur la culture des cafés et les gens qu'on y rencontre.", comedian: "Alex Rivers",       uploadDate: "2024-01-15" },
  { id: "2",  title: "Les Applis de Rencontre Sont Cassées", category: "Relations",      views: 3200000, duration: "10:30", description: "Le voyage d'un comédien dans le monde bizarre des rencontres en ligne.",      comedian: "Jordan Blake",      uploadDate: "2024-01-14" },
  { id: "3",  title: "Galères des Transports en Commun",    category: "Observation",    views: 2100000, duration: "7:20",  description: "Histoires drôles de trajets quotidiens en ville.",                            comedian: "Casey Morgan",      uploadDate: "2024-01-13" },
  { id: "4",  title: "Être Adulte C'est une Arnaque",       category: "Vie",            views: 4100000, duration: "12:15", description: "Pourquoi personne ne vous dit la vérité sur la vie d'adulte.",                comedian: "Sam Patterson",     uploadDate: "2024-01-12" },
  { id: "5",  title: "Cauchemars de Fast-Food",             category: "Observation",    views: 1900000, duration: "6:50",  description: "Pourquoi commander de la nourriture est toujours une comédie d'erreurs.",     comedian: "Tyler Anderson",    uploadDate: "2024-01-11" },
  { id: "6",  title: "La Salle de Sport, la Salle de Sport", category: "Fitness",       views: 3500000, duration: "9:40",  description: "Pourquoi les salles de sport sont les espaces sociaux les plus étranges.",    comedian: "Emma Stone",        uploadDate: "2024-01-10" },
  { id: "7",  title: "Catastrophes du Dîner en Famille",   category: "Famille",        views: 2800000, duration: "11:05", description: "Histoires de réunions familiales qui ont mal tourné de façon hilarante.",     comedian: "Chris Wood",        uploadDate: "2024-01-09" },
  { id: "8",  title: "La Vie en Appartement 101",           category: "Observation",    views: 2200000, duration: "8:20",  description: "Gérer les voisins et les murs trop minces.",                                  comedian: "Lisa Chen",         uploadDate: "2024-01-08" },
  { id: "9",  title: "Cauchemars du Support Technique",     category: "Technologie",    views: 2600000, duration: "9:15",  description: "Rencontres hilarantes avec le support informatique.",                         comedian: "Marcus Davis",      uploadDate: "2024-01-07" },
  { id: "10", title: "La Réalité du Cours de Yoga",         category: "Fitness",        views: 1800000, duration: "7:45",  description: "Ce qui se passe vraiment dans un cours de yoga.",                             comedian: "Nina Patel",        uploadDate: "2024-01-06" },
  { id: "11", title: "Mes Bêtes Noires",                    category: "Observation",    views: 3300000, duration: "10:00", description: "Toutes ces petites choses qui nous rendent fous.",                            comedian: "Ryan Lopez",        uploadDate: "2024-01-05" },
  { id: "12", title: "Histoires de Sécurité Aéroportuaire", category: "Voyage",        views: 2400000, duration: "8:50",  description: "Moments drôles et gênants à la sécurité de l'aéroport.",                     comedian: "Jordan Taylor",     uploadDate: "2024-01-04" },
  { id: "13", title: "La Folie des Réseaux Sociaux",        category: "Social",         views: 3900000, duration: "11:30", description: "L'absurdité de la vie sur les réseaux sociaux.",                              comedian: "Alex Kumar",        uploadDate: "2024-01-03" },
  { id: "14", title: "Ratés et Succès en Cuisine",          category: "Vie",            views: 2700000, duration: "9:35",  description: "Catastrophes en cuisine et succès inattendus.",                               comedian: "Sophie Martinez",   uploadDate: "2024-01-02" },
  { id: "15", title: "L'Étiquette au Cinéma",               category: "Observation",    views: 2100000, duration: "7:55",  description: "Pourquoi les gens gâchent les films pour tout le monde.",                     comedian: "Chris Johnson",     uploadDate: "2023-12-31" },
  { id: "16", title: "Aventures du Caddie",                 category: "Observation",    views: 1700000, duration: "6:40",  description: "La psychologie des courses au supermarché.",                                  comedian: "Maya Gupta",        uploadDate: "2023-12-30" },
  { id: "17", title: "Le Chaos des Horaires de Sommeil",    category: "Vie",            views: 2900000, duration: "10:15", description: "Pourquoi le sommeil est un luxe qu'on ne peut pas se permettre.",             comedian: "David Kelly",       uploadDate: "2023-12-29" },
  { id: "18", title: "Histoires de Serveurs",               category: "Travail",        views: 2500000, duration: "9:20",  description: "Dans les coulisses du chaos des restaurants.",                                comedian: "Sarah Wilson",      uploadDate: "2023-12-28" },
  { id: "19", title: "Le Comportement des Animaux Expliqué", category: "Animaux",       views: 3100000, duration: "8:45",  description: "Pourquoi nos animaux sont de petits seigneurs poilus.",                       comedian: "Tom Bradley",       uploadDate: "2023-12-27" },
  { id: "20", title: "Folies des Festivals de Musique",     category: "Divertissement", views: 2300000, duration: "7:50",  description: "Le côté bizarre des festivals de musique.",                                   comedian: "Lisa Anderson",     uploadDate: "2023-12-26" },
  { id: "21", title: "Politique de Bureau 101",             category: "Travail",        views: 3600000, duration: "11:00", description: "Naviguer dans la comédie corporative.",                                       comedian: "Kevin White",       uploadDate: "2023-12-25" },
  { id: "22", title: "Plaintes Météo",                      category: "Observation",    views: 1600000, duration: "6:30",  description: "Pourquoi on se plaint tous de la météo.",                                     comedian: "Emma Foster",       uploadDate: "2023-12-24" },
  { id: "23", title: "Catastrophes Coiffure et Maquillage", category: "Vie",            views: 2800000, duration: "9:05",  description: "Histoires de salon que vous ne croirez pas.",                                 comedian: "Jessica Stone",     uploadDate: "2023-12-23" },
  { id: "24", title: "Les Mensonges de la Motivation Fitness", category: "Fitness",     views: 3200000, duration: "8:40",  description: "La vérité sur la motivation sportive.",                                       comedian: "Nathan Cross",      uploadDate: "2023-12-22" },
  { id: "25", title: "L'Enfer de l'Achat de Voiture",       category: "Shopping",       views: 2400000, duration: "10:30", description: "La pire expérience connue de l'humanité.",                                    comedian: "Rachel Green",      uploadDate: "2023-12-21" },
  { id: "26", title: "La Gêne des Appels Téléphoniques",    category: "Observation",    views: 2700000, duration: "7:25",  description: "Pourquoi parler au téléphone est terrifiant.",                                comedian: "Brandon Hayes",     uploadDate: "2023-12-20" },
  { id: "27", title: "Histoires de Caissiers de Banque",    category: "Travail",        views: 1900000, duration: "6:50",  description: "Histoires étranges de clients en banque.",                                    comedian: "Olivia Scott",      uploadDate: "2023-12-19" },
  { id: "28", title: "Problèmes d'Invités de Mariage",      category: "Social",         views: 3300000, duration: "10:50", description: "Pourquoi être invité à un mariage est compliqué.",                            comedian: "Michael Evans",     uploadDate: "2023-12-18" },
  { id: "29", title: "La Rage de la Connexion Internet",    category: "Technologie",    views: 2200000, duration: "7:35",  description: "Quand votre wifi vous trahit.",                                               comedian: "Nicole Park",       uploadDate: "2023-12-17" },
  { id: "30", title: "Procrastination du Ménage",           category: "Vie",            views: 3000000, duration: "9:10",  description: "L'art d'éviter les corvées.",                                                 comedian: "Victor Gray",       uploadDate: "2023-12-16" },
  { id: "31", title: "Le Chaos du Cabinet Médical",         category: "Santé",          views: 2600000, duration: "8:25",  description: "Pourquoi les cabinets médicaux sont des mines d'or comiques.",                comedian: "Amber Turner",      uploadDate: "2023-12-15" },
  { id: "32", title: "La Gêne des Réunions Scolaires",      category: "Social",         views: 2900000, duration: "10:05", description: "Assister aux réunions d'anciens élèves est toujours un désastre.",           comedian: "Patrick Moore",     uploadDate: "2023-12-14" },
  { id: "33", title: "Faux Pas de Mode",                    category: "Mode",           views: 2100000, duration: "7:40",  description: "Les tendances mode qui n'ont aucun sens.",                                    comedian: "Isabella Rose",     uploadDate: "2023-12-13" },
  { id: "34", title: "Procrastination du Jour Paresseux",   category: "Vie",            views: 3400000, duration: "9:50",  description: "La philosophie de ne rien faire.",                                            comedian: "Lucas Anderson",    uploadDate: "2023-12-12" },
  { id: "35", title: "L'Horreur des Sites Touristiques",    category: "Voyage",         views: 2400000, duration: "8:15",  description: "Quand les destinations de vacances déçoivent.",                               comedian: "Sophia Rivera",     uploadDate: "2023-12-11" },
  { id: "36", title: "Ratés d'Étiquette par Email",         category: "Travail",        views: 2700000, duration: "7:20",  description: "Catastrophes de communication professionnelle.",                              comedian: "Derek Sanders",     uploadDate: "2023-12-10" },
  { id: "37", title: "Le Voisin de l'Enfer",                category: "Vie",            views: 3100000, duration: "10:40", description: "Vivre à côté de personnes impossibles.",                                     comedian: "Victoria Hayes",    uploadDate: "2023-12-09" },
  { id: "38", title: "Catastrophes de Livraison de Nourriture", category: "Nourriture", views: 2500000, duration: "8:05",  description: "Quand la livraison de repas tourne mal.",                                     comedian: "Aaron Bell",        uploadDate: "2023-12-08" },
  { id: "39", title: "La Folie des Embouteillages",         category: "Observation",    views: 2800000, duration: "9:30",  description: "Rage au volant et mystères de l'autoroute.",                                 comedian: "Megan Fox",         uploadDate: "2023-12-07" },
  { id: "40", title: "Souvenirs du Cours de Gym",           category: "École",          views: 3200000, duration: "10:20", description: "Le traumatisme du cours d'EPS au lycée.",                                     comedian: "Connor Wright",     uploadDate: "2023-12-06" },
  { id: "41", title: "Les Guerres du Silence en Bibliothèque", category: "Observation", views: 1900000, duration: "6:45",  description: "L'application du silence en bibliothèque qui tourne mal.",                    comedian: "Natalie Long",      uploadDate: "2023-12-05" },
  { id: "42", title: "Confusion Cryptomonnaie",             category: "Technologie",    views: 2600000, duration: "8:35",  description: "Comprendre la crypto comme une personne normale.",                            comedian: "Felix Hunt",        uploadDate: "2023-12-04" },
  { id: "43", title: "Cauchemars de Baby-Sitting",          category: "Vie",            views: 2400000, duration: "9:15",  description: "Quand le baby-sitting tourne très mal.",                                      comedian: "Grace Mitchell",    uploadDate: "2023-12-03" },
  { id: "44", title: "L'Enfer du Montage de Meubles",       category: "Vie",            views: 3300000, duration: "7:50",  description: "Pourquoi les meubles en kit ruinent des vies.",                               comedian: "Marcus Lee",        uploadDate: "2023-12-02" },
  { id: "45", title: "L'Horreur du Check-Out d'Hôtel",      category: "Voyage",         views: 2200000, duration: "6:55",  description: "Négociations de départ tardif.",                                              comedian: "Ruby Chen",         uploadDate: "2023-12-01" },
  { id: "46", title: "Le Chaos des Réunions Zoom",          category: "Travail",        views: 3600000, duration: "10:10", description: "Ratés de visioconférence et moments gênants.",                                comedian: "Trevor Stone",      uploadDate: "2023-11-30" },
  { id: "47", title: "Les Guerres des Caisses Automatiques", category: "Observation",   views: 2900000, duration: "7:40",  description: "La machine de caisse automatique inutile.",                                   comedian: "Harper Davis",      uploadDate: "2023-11-29" },
  { id: "48", title: "Commérages à la Machine à Eau",       category: "Travail",        views: 2500000, duration: "8:20",  description: "Rumeurs de bureau et drames au travail.",                                     comedian: "Chase Murphy",      uploadDate: "2023-11-28" },
  { id: "49", title: "Mensonges de Réservation au Restaurant", category: "Nourriture",  views: 2300000, duration: "6:30",  description: "Quand les promesses du restaurant ne correspondent pas à la réalité.",       comedian: "Diana Santos",      uploadDate: "2023-11-27" },
  { id: "50", title: "Le Grand Final Comique",              category: "One-Man-Show",   views: 4500000, duration: "45:00", description: "Le spectacle comique ultime qui résume tout.",                                comedian: "Divers Comédiens",  uploadDate: "2023-11-26" },
];

export const videos: Video[] = baseVideos.map((v) => ({
  ...v,
  thumbnail: `${BASE}/i${v.id}.jpg`,
  videoUrl: `${BASE}/v${v.id}.mp4`,
}));
