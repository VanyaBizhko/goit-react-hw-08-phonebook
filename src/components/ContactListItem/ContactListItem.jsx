import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { Item, Text, PersonIcon, Wrap } from './ContactListItem.styled';
import { Button } from '@mui/material';

export const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <Item>
      <Wrap>
        <PersonIcon />
        <Text>
          {name}: <span>{number}</span>
        </Text>
      </Wrap>
      <Button type="button" onClick={handleDelete} variant="contained" color="error">
        Delete
      </Button>
    </Item>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};