import styled from "styled-components";
import { fadeIn } from "../../styles/StyleUtils";

export const Input = styled.input`
  ${fadeIn}
  animation: fadeIn 1.2s ease forwards;
  opacity: 0;
  animation-delay: 2s;

  border: none;
  border-bottom: 1px solid currentColor;
  background: inherit;
  padding: 0.5rem 0;
  outline: none;
  font-size: 1.5rem;

  &:focus {
    border-bottom: 2px solid currentColor;
  }
`;
