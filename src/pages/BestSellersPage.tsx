import { useParams } from "react-router-dom";
import { useBestSellers } from "../hooks/useBestSellers";
import BestSellers from "../components/BestSellers";
import { CircularProgress } from "@mui/material";
import styled from "styled-components";

const BestSellersPage = () => {
  const { category } = useParams();
  const { books, copyright, loading, error } = useBestSellers(category ?? "");

  if (loading) {
    return (
      <LoadingContainer>
        <CircularProgress size={60} />
      </LoadingContainer>
    );
  }
  if (error) return <div>{error.message}</div>;

  return <BestSellers books={books} copyright={copyright} />;
};

export default BestSellersPage;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;
