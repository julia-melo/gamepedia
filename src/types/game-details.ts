interface Rating {
  score: number;
  author: string;
  review: string;
}

interface AverageRatings {
  average: number;
  list: Rating[];
}

export interface IGameDetails {
  id: string;
  title: string;
  slug: string;
  description: string;
  img: string;
  ratings: AverageRatings;
  tips: string[];
}

export interface IGameMission {
  id: string;
  order: 5;
  title: string;
  img: string;
}
