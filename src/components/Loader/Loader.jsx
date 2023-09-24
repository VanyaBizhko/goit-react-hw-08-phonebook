import CircularProgress from '@mui/material/CircularProgress';
import { Wrap } from './Loader.styled';

export const Spinner = () => (
  <Wrap role="alert">
    <CircularProgress />
  </Wrap>
);