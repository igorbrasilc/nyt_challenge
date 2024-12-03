import styled from "styled-components";
import { fadeIn } from "../../styles/StyleUtils";

export const StyledButton = styled.button`
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
