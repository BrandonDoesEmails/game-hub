import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import platforms from "../data/platforms";
import ms from 'ms';

const platFormsAPI = new APIClient<Platform>('/platforms/lists/parents');

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: platFormsAPI.getAll,
    staleTime: ms('24h'),
    initialData: { count: platforms.length, results: platforms}
});

export default usePlatforms;