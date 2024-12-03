import { useQuery } from "@tanstack/react-query";
import { getBestSellers } from "../services/nytimes";

export const useBestSellers = (listName: string) => {
  const {
    data,
    isLoading: loading,
    error,
  } = useQuery({
    queryKey: ["bestsellers", listName],
    queryFn: () => getBestSellers(listName),
    staleTime: 5 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
    retry: 2,
  });

  return {
    books: data?.results ?? [],
    copyright: data?.copyright ?? "",
    loading,
    error: error as Error | null,
  };
};
