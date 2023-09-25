import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  color: #212121;
  font-size: 20px;

  &.active {
    color: #097600;
  }
`;