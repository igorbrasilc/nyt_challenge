import { useAuth } from "../../hooks/useAuth";
import { Container } from "../../styles/BodyContainer";
import { LoginForm } from "./LoginForm";
import { Title } from "../shared/Title";
import { BestSellersListNames } from "./BestSellersListNames";

const Welcome = () => {
  const { user, isAuthenticated } = useAuth();

  return (
    <Container>
      <Title
        title={isAuthenticated ? `Welcome, ${user?.name}` : "Welcome!"}
        subtitle="This is a simple space to find the NYT Best Sellers on your favorite category."
      />
      {isAuthenticated ? <BestSellersListNames /> : <LoginForm />}
    </Container>
  );
};

export default Welcome;
