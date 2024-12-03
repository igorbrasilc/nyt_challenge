import { BestSellerBook } from "../../services/nytimes";
import BooksList from "./BooksList";
import Header from "./Header";
import styled from "styled-components";

interface BestSellersProps {
  books: BestSellerBook[];
  copyright: string;
  error?: Error | null;
}

const BestSellers = ({ books, copyright, error }: BestSellersProps) => {
  if (error || !books) return <div>{error?.message}</div>;

  const booksCategoryName = books[0]?.list_name;

  return (
    <Container>
      <Header categoryName={booksCategoryName} />
      <BooksList books={books} />
      <Copyright>{copyright}</Copyright>
    </Container>
  );
};

export default BestSellers;

const Container = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Copyright = styled.div`
  opacity: 0.7;
  text-align: center;
  padding: 2rem 0;
  font-size: 0.875rem;
`;
