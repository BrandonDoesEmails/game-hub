import { GameQuery } from "../App";
import APIClient, { FetchResponse } from "../services/api-client";
import { Platform } from "./usePlatforms";
import { useInfiniteQuery } from "@tanstack/react-query";

const gameAPI = new APIClient<Game>('/games')

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform; }[];
  metacritic: number;
  rating_top: number;
}


const useGames = (gameQuery: GameQuery) => 
  useInfiniteQuery<FetchResponse<Game>, Error>({ 
    queryKey: ['games', gameQuery],
    queryFn: ({ pageParam = 1}) => gameAPI.getAll({
      params: {
        genres: gameQuery.genreId, 
        parent_platforms: gameQuery.platformId,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
        page: pageParam
      }
    }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: 24 * 60 * 60 * 1000 // 24 hours
  });


export default useGames
function allPages(lastPage: FetchResponse<Game>, allPages: FetchResponse<Game>[]): unknown {
  throw new Error("Function not implemented.");
}

