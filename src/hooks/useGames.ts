import ms from 'ms';
import APIClient, { FetchResponse } from "../services/api-client";
import { useInfiniteQuery } from "@tanstack/react-query";
import useGameQueryStore from '../store';
import { Game } from '../entities/Game';

const gameAPI = new APIClient<Game>('/games')

const useGames = () => {
  const gameQuery = useGameQueryStore(s => s.gameQuery);

  return useInfiniteQuery<FetchResponse<Game>, Error>({ 
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
    staleTime: ms('24h')
  });
}

export default useGames
function allPages(lastPage: FetchResponse<Game>, allPages: FetchResponse<Game>[]): unknown {
  throw new Error("Function not implemented.");
}

