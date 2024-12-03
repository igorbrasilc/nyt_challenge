import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ArrowBack } from "@mui/icons-material";
import { Title } from "../shared/Title";

interface HeaderProps {
  categoryName?: string;
}

const Header = ({ categoryName }: HeaderProps) => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <BackButtonContainer>
        <BackButton onClick={() => navigate("/")}>
          <ArrowBack fontSize="large" />
        </BackButton>
        <ButtonLabel>Go back</ButtonLabel>
      </BackButtonContainer>
      <Title title="NYT Best Sellers" subtitle={categoryName ?? ""} />
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const BackButtonContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
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

  &:hover + span {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ButtonLabel = styled.span`
  position: absolute;
  top: 100%;
  font-size: 0.75rem;
  opacity: 0;
  transform: translateY(-4px);
  transition: all 0.2s ease;
  white-space: nowrap;
  pointer-events: none;
`;
