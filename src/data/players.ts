export type Player = {
  id: string;
  name: string;
  position: string;
  number: number;
  height: string;
  ppg: number;
  apg: number;
  rpg: number;
  image: string;
  bio?: string;
};

export const players: Player[] = [
  {
    id: "marcus-johnson",
    name: "Marcus Johnson",
    position: "Pivot",
    number: 1,
    height: "1,85 m",
    ppg: 18.5,
    apg: 7.2,
    rpg: 3.1,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
    bio: "Coordonatorul ofensiv al echipei, cu vedere excelentă a jocului și leadership în momentele cheie.",
  },
  {
    id: "devon-williams",
    name: "Devon Williams",
    position: "Aruncător",
    number: 3,
    height: "1,91 m",
    ppg: 15.8,
    apg: 3.4,
    rpg: 4.0,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    bio: "Specialist de la distanță, mereu pregătit să înscrie din spatele liniei de 3 puncte.",
  },
  {
    id: "jaylen-carter",
    name: "Jaylen Carter",
    position: "Aripă mică",
    number: 7,
    height: "1,96 m",
    ppg: 22.1,
    apg: 2.8,
    rpg: 6.5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    bio: "Scorer principal al echipei, combină forța fizică cu rapiditatea și creativitatea.",
  },
  {
    id: "isaiah-thompson",
    name: "Isaiah Thompson",
    position: "Aripă mare",
    number: 21,
    height: "2,01 m",
    ppg: 14.2,
    apg: 1.9,
    rpg: 8.3,
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop",
    bio: "Jucător versatil, puternic sub panou și periculos la semi-distanță.",
  },
  {
    id: "tyler-robinson",
    name: "Tyler Robinson",
    position: "Centru",
    number: 34,
    height: "2,06 m",
    ppg: 12.6,
    apg: 1.2,
    rpg: 10.1,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    bio: "Stâlpul apărării, domină recuperările și protejează inelul.",
  },
  {
    id: "andre-davis",
    name: "Andre Davis",
    position: "Pivot",
    number: 11,
    height: "1,80 m",
    ppg: 9.8,
    apg: 5.5,
    rpg: 2.4,
    image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=400&h=400&fit=crop",
    bio: "Energie pură pe teren, aduce ritm și intensitate în ambele faze ale jocului.",
  },
  {
    id: "chris-morgan",
    name: "Chris Morgan",
    position: "Aruncător",
    number: 15,
    height: "1,88 m",
    ppg: 11.3,
    apg: 2.1,
    rpg: 3.7,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    bio: "Shooter constant, cu un procentaj excelent la aruncările deschise.",
  },
  {
    id: "ryan-mitchell",
    name: "Ryan Mitchell",
    position: "Aripă mică",
    number: 22,
    height: "1,93 m",
    ppg: 10.5,
    apg: 2.6,
    rpg: 5.2,
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
    bio: "Apărător polivalent, capabil să marcheze atât în tranziție, cât și în jocul pozițional.",
  },
];

