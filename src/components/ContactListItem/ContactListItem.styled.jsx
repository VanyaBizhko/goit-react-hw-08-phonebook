import styled from '@emotion/styled';
import { Person2Outlined } from '@mui/icons-material';

export const Item = styled.li`
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 5px;

  :nth-of-type(2n + 1) {
    background-color: #dee2e3;
  }
`;

export const Text = styled.p`
  font-size: 17px;
  font-weight: 500;
  color: #212121;
`;

export const PersonIcon = styled(Person2Outlined)`
  color: #212121;
`;

export const Wrap = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;