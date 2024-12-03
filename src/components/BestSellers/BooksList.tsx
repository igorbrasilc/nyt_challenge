import styled from "styled-components";
import { BestSellerBook } from "../../services/nytimes";
import { StyledButton } from "../shared/StyledButton";

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
          <BookAuthor>by {book.book_details[0].author}</BookAuthor>
          <BookDescription>{book.book_details[0].description}</BookDescription>
          <BookInfo>Weeks on list: {book.weeks_on_list}</BookInfo>
          <BuyButton onClick={() => {}}>Buy on Amazon</BuyButton>
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
`;

const BookInfo = styled.p`
  margin: 0.5rem 0;
`;

const BookAuthor = styled(BookInfo)`
  font-size: 1rem;
  text-align: start;
  margin-bottom: 0.5rem;
`;

const BookDescription = styled(BookInfo)`
  font-style: italic;
  text-align: end;
`;

const BuyButton = styled(StyledButton)`
  margin-top: 1rem;
  text-align: center;
`;
