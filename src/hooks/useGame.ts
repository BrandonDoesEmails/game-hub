import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Game } from "./useGames";

const game = new APIClient<Game>('/games');

const useGame = (slug: string) => useQuery({
    queryKey: ['games', slug],
    queryFn:  () => game.get(slug)
})

export default useGame