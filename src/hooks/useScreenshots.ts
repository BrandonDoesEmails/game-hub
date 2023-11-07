import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import Screenshot from "../entities/Screenshot";

const useScreenshots = (gameId: number) => {
  const screenshots = new APIClient<Screenshot>(`/games/${gameId}/screenshots`);

  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: screenshots.getAll
  });
};

export default useScreenshots;