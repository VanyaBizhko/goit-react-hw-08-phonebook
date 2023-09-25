import { LoginForm } from 'components/LoginForm/LoginForm';
import { Container, Title } from './Login.styled';

export default function Login() {
  return (
    <Container>
      <Title>Log in</Title>
      <LoginForm />
    </Container>
  );
}