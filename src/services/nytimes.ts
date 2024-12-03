const API_KEY = import.meta.env.VITE_NYT_API_KEY;
const BASE_URL = "https://api.nytimes.com/svc/books/v3";

export interface BookList {
  list_name: string;
  display_name: string;
  list_name_encoded: string;
  updated: string;
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
    throw error;
  }
};
