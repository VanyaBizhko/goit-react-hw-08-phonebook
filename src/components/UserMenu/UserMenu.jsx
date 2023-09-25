import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { Wrap } from './UserMenu.styled';
import { Button } from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrap>
      <p>Welcome, {user.name}</p>
      <Button
        type="button"
        onClick={() => dispatch(logOut())}
        variant="contained"
        color="error"
      >
        Logout
      </Button>
    </Wrap>
  );
};