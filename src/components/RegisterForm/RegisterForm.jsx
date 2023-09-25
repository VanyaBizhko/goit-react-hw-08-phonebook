import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Form, Label } from './RegisterForm.styled';
import { Button, TextField } from '@mui/material';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
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
          type="text"
          name="name"
          label="Name"
          id="name-register"
          variant="outlined"
          required
        />
      </Label>
      <Label>
        <TextField
          type="email"
          name="email"
          label="Email"
          id="email-register"
          variant="outlined"
          required
        />
      </Label>
      <Label>
        <TextField
          type="password"
          name="password"
          label="Password"
          id="password-register"
          variant="outlined"
          required
        />
      </Label>
      <Button variant="contained" type="submit">
        Register
      </Button>
    </Form>
  );
};