import { useState, useEffect } from "react";
import { BestSellerBook, getBestSellers } from "../services/nytimes";

export const useBestSellers = (listName: string) => {
  const [books, setBooks] = useState<BestSellerBook[]>([]);
  const [copyright, setCopyright] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchBestSellers = async () => {
      try {
        const data = await getBestSellers(listName);
        setBooks(data.results);
        setCopyright(data.copyright);
      } catch (err) {
        setError(err instanceof Error ? err : new Error("An error occurred"));
      } finally {
        setLoading(false);
      }
    };

    fetchBestSellers();
  }, [listName]);

  return { books, copyright, loading, error };
};
