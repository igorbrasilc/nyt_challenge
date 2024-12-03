import { useState, useCallback } from "react";
import styled from "styled-components";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { fadeIn } from "../../styles/StyleUtils";
import { useBookLists } from "../../hooks/useBookLists";
import { useNavigate } from "react-router-dom";

export const BestSellersListNames = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const { lists, loading, error } = useBookLists();

  const handleSearchClick = useCallback(() => {
    if (lists[currentIndex]) {
      navigate(`/best-sellers/${lists[currentIndex].list_name_encoded}`);
    }
  }, [lists, currentIndex, navigate]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % lists.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + lists.length) % lists?.length);
  };

  if (error) return <ErrorMessage>Failed to load book lists</ErrorMessage>;
  if (!lists?.length) return null;

  return (
    <Container $loading={loading}>
      <CarouselContainer>
        <CarouselButton onClick={prevSlide}>
          <ChevronLeft fontSize="large" />
        </CarouselButton>

        <ContentContainer>
          <ListName>{lists[currentIndex].display_name}</ListName>
          <UpdateFrequency>
            Updated {lists[currentIndex].updated.toLowerCase()}
          </UpdateFrequency>
        </ContentContainer>

        <CarouselButton onClick={nextSlide}>
          <ChevronRight fontSize="large" />
        </CarouselButton>
      </CarouselContainer>

      <SearchButton onClick={handleSearchClick} disabled={loading}>
        Search NYT Best Sellers
      </SearchButton>
    </Container>
  );
};

const Container = styled.div<{ $loading: boolean }>`
  display: ${({ $loading: isloading }) => (isloading ? "none" : "flex")};
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const SearchButton = styled.button`
  ${fadeIn}
  animation: fadeIn 1.2s ease forwards;
  opacity: 0;
  animation-delay: 3s;

  padding: 0.8rem 1.5rem;
  border: 1px solid currentColor;
  background: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const CarouselContainer = styled.div`
  margin-top: 2rem;
  ${fadeIn}
  animation: fadeIn 1.2s ease forwards;
  opacity: 0;
  animation-delay: 2.5s;

  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 300px;
  text-align: center;
`;

const ListName = styled.h3`
  margin: 0;
  font-size: 1.2rem;
`;

const UpdateFrequency = styled.p`
  margin: 0.5rem 0 0;
  font-size: 0.9rem;
  opacity: 0.7;
`;

const CarouselButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.6;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 1;
  }
`;

const ErrorMessage = styled.div`
  color: #ff6b6b;
  text-align: center;
  padding: 1rem;
`;
