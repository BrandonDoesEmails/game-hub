import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";
import { Platform } from "./useGames";

interface FetchResponse<T> {
    count: number;
    results: T[];
}

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);


useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);
    apiClient
     .get<FetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })
     .then((res) => {
      setData(res.data.results);
      setIsLoading(false);
     })
     .catch((err) => {
        if(err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
     });

    return () => controller.abort();
}, deps ? [...deps] : []);

  return { data, error, isLoading }
  
}

export default useData
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform; }[];
  metacritic: number;
}
