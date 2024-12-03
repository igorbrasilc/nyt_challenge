import { CircularProgress } from "@mui/material";
import styled from "styled-components";

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const Loading = () => {
  return (
    <LoadingContainer>
      <CircularProgress size={60} />
    </LoadingContainer>
  );
};

export default Loading;
