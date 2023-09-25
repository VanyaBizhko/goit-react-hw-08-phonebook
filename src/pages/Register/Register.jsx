import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Container, Title } from './Register.styled';

export default function Register() {
  return (
    <Container>
      <Title>Registration</Title>
      <RegisterForm />
    </Container>
  );
}