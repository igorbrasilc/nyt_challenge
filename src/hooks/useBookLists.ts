import { useQuery } from "@tanstack/react-query";
import { getNYTBestSellerLists } from "../services/nytimes";

export const useBookLists = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["booklists"],
    queryFn: getNYTBestSellerLists,
    staleTime: 5 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
    retry: 2,
  });

  return { lists: data ?? [], loading: isLoading, error };
};
