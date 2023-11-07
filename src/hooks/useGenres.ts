import { useQuery } from "@tanstack/react-query";
import ms from 'ms';
import APIClient from "../services/api-client";
import genres from "../data/genres";
import Genre from "../entities/Genre";

const genresAPI = new APIClient<Genre>('/genres');

const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn: genresAPI.getAll,
    staleTime: ms('24h'),
    initialData: { count: genres.length, results: genres }
});

export default useGenres