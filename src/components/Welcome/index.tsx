import { useAuth } from "../../hooks/useAuth";
import { Container } from "../../styles/BodyContainer";
import { LoginForm } from "./LoginForm";
import { Title } from "./Title";

const Welcome = () => {
  const { user, isAuthenticated } = useAuth();

  return (
    <Container>
      <Title
        title={isAuthenticated ? `Welcome, ${user?.name}` : "Welcome!"}
        subtitle="This is a simple space to find your favorite books."
      />
      {isAuthenticated ? <div>Olá</div> : <LoginForm />}
    </Container>
  );
};

export default Welcome;
