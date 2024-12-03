const API_KEY = import.meta.env.VITE_NYT_API_KEY;
const BASE_URL = "https://api.nytimes.com/svc/books/v3";

export interface BookList {
  list_name: string;
  display_name: string;
  list_name_encoded: string;
  updated: string;
}

export interface BookDetail {
  title: string;
  description: string;
  author: string;
  publisher: string;
}

export interface BestSellerBook {
  list_name: string;
  rank: number;
  weeks_on_list: number;
  amazon_product_url: string;
  book_details: BookDetail[];
}

interface NYTResponse {
  results: BestSellerBook[];
  copyright: string;
}

export const getNYTBestSellerLists = async (): Promise<BookList[]> => {
  try {
    const response = await fetch(
      `${BASE_URL}/lists/names.json?api-key=${API_KEY}`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching book lists:", error);
    throw new Error("An error occurred while fetching the book lists");
  }
};

export const getBestSellers = async (
  listName: string
): Promise<NYTResponse> => {
  try {
    const response = await fetch(
      `${BASE_URL}/lists.json?list=${listName}&api-key=${API_KEY}`
    );
    const data = await response.json();
    return {
      results: data.results,
      copyright: data.copyright,
    };
  } catch (error) {
    console.error("Error fetching bestsellers:", error);
    throw new Error("An error occurred while fetching the best sellers");
  }
};
