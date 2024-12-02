import { SubdirectoryArrowRight } from "@mui/icons-material";
import { useState } from "react";
import styled from "styled-components";
import { useAuth } from "../../hooks/useAuth";
import { fadeIn } from "../../styles/StyleUtils";
import { Input } from "../shared/Input";

export const LoginForm = () => {
  const [name, setName] = useState("");
  const { login } = useAuth();

  return (
    <LoginComponent>
      <LoginSubtitle>What's your name?</LoginSubtitle>
      <Input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <IconButton onClick={() => login(name)} disabled={!name.length}>
        <SubdirectoryArrowRight fontSize="large" />
      </IconButton>
    </LoginComponent>
  );
};

const LoginComponent = styled.div`
  margin-top: 10rem;
  gap: 1rem;
  display: flex;
`;

const LoginSubtitle = styled.h4`
  ${fadeIn}
  animation: fadeIn 1.2s ease forwards;
  opacity: 0;
  animation-delay: 2s;
`;

const IconButton = styled.button`
  ${fadeIn}
  animation: fadeIn 1.2s ease forwards;
  opacity: 0;
  animation-delay: 2s;

  background: none;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 1;
  }

  &:focus {
    outline: none;
  }
`;
