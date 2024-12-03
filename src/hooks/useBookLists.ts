import { useState, useEffect } from "react";
import { BookList, getNYTBestSellerLists } from "../services/nytimes";

export const useBookLists = () => {
  const [lists, setLists] = useState<BookList[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchLists = async () => {
      try {
        const data = await getNYTBestSellerLists();
        setLists(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error("An error occurred"));
      } finally {
        setLoading(false);
      }
    };

    fetchLists();
  }, []);

  return { lists, loading, error };
};
