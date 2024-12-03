import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BestSellerBook } from "../services/nytimes";
import { Title } from "./shared/Title";
import { ArrowBack } from "@mui/icons-material";

interface BestSellersProps {
  books: BestSellerBook[];
  copyright: string;
}

const BestSellers = ({ books, copyright }: BestSellersProps) => {
  const navigate = useNavigate();
  const booksCategoryName = books[0].list_name;

  return (
    <Container>
      <HeaderContainer>
        <BackButton onClick={() => navigate("/")}>
          <ArrowBack fontSize="large" />
        </BackButton>
        <Title title="NYT Best Sellers" subtitle={booksCategoryName} />
      </HeaderContainer>
      <BooksGrid>
        {books.map((book) => (
          <BookCard key={book.rank}>
            <BookTitle>
              #{book.rank} - {book.book_details[0].title}
            </BookTitle>
            <BookInfo>Author: {book.book_details[0].author}</BookInfo>
            <BookInfo>Publisher: {book.book_details[0].publisher}</BookInfo>
            <BookInfo>{book.book_details[0].description}</BookInfo>
            <BookInfo>Weeks on list: {book.weeks_on_list}</BookInfo>
            <BuyLink
              href={book.amazon_product_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy on Amazon
            </BuyLink>
          </BookCard>
        ))}
      </BooksGrid>
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

const BooksGrid = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const BookCard = styled.div`
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
  }
`;

const BookTitle = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 1rem;
`;

const BookInfo = styled.p`
  margin: 0.5rem 0;
`;

const BuyLink = styled.a`
  display: inline-block;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background 0.2s;

  &:hover {
  }
`;

const Copyright = styled.div`
  opacity: 0.7;
  text-align: center;
  padding: 2rem 0;
  font-size: 0.875rem;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  margin-bottom: 2rem;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;
