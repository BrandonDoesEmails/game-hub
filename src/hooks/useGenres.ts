import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import genres from "../data/genres";

const genresAPI = new APIClient<Genre>('/genres');

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn: genresAPI.getAll,
    staleTime: 24 * 60 * 60 * 100, // 24 hours
    initialData: { count: genres.length, results: genres }
});

export default useGenres