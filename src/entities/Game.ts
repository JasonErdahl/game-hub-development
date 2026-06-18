import Platform from "./Platform";
import Genre from "./Genre";

export interface Publisher {
  id: number;
  name: string;
}

export default interface Game {
  id: number;
  slug: string;
  name: string;
  description_raw?: string;
  background_image: string;
  parent_platforms?: { platform: Platform }[];
  metacritic?: number;
  rating_top: number;
  genres?: Genre[];
  publishers?: Publisher[];
  esrb_rating?: {
    id: number;
    name: string;
    slug: string;
  };
  reddit_url?: string;
  website?: string;
}
