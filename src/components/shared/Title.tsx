import styled from "styled-components";
import { fadeIn } from "../../styles/StyleUtils";

interface TitleProps {
  title: string;
  subtitle: string;
}

export const Title = ({ title, subtitle }: TitleProps) => (
  <TitleContainer>
    <StyledTitle>{title}</StyledTitle>
    <Subtitle>{subtitle}</Subtitle>
  </TitleContainer>
);

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const StyledTitle = styled.h1`
  ${fadeIn}
  animation: fadeIn 1.2s ease forwards;
  opacity: 0;
`;

const Subtitle = styled.h4`
  ${fadeIn}
  animation: fadeIn 1.2s ease forwards;
  opacity: 0;
  animation-delay: 0.8s;
  padding: 0 2rem;
`;
