import styled from "styled-components";
import { BestSellerBook } from "../../services/nytimes";

interface BooksListProps {
  books: BestSellerBook[];
}

const BooksList = ({ books }: BooksListProps) => {
  return (
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
  );
};

export default BooksList;

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
