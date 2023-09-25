import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Form, Label } from './LoginForm.styled';
import { Button, TextField } from '@mui/material';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        <TextField
          type="email"
          name="email"
          label="Email"
          id="email-login"
          variant="outlined"
          required
        />
      </Label>
      <Label>
        <TextField
          type="password"
          name="password"
          label="Password"
          id="password-login"
          variant="outlined"
          required
        />
      </Label>
      <Button variant="contained" type="submit">
        Log In
      </Button>
    </Form>
  );
};