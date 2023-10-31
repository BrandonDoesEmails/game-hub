import { GameQuery } from "../App";
import useData from "./useData";
import { Game } from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const useGames = (gameQuery: GameQuery) => 
  useData<Game>('/games', { 
    params: {
      genres: gameQuery.genre?.id, parent_platforms: gameQuery.platform?.id
    }
  }, 
  [gameQuery]
);

export default useGames