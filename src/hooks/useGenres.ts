import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

const genresAPI = new APIClient<Genre>('/genres');

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn: genresAPI.getAll
});

export default useGenres