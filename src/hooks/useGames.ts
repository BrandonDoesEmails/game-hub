import useData from "./useData";
import { Game } from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const useGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null) => 
  useData<Game>('/games', { 
    params: {
      genres: selectedGenre?.id, parent_platforms: selectedPlatform?.id
    }
  }, 
  [selectedGenre?.id, selectedPlatform?.id]
);

export default useGames