import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import { Form, Label } from './ContactForm.styled';
import { Button, TextField } from '@mui/material';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;

    const contact = {
      name: form.elements.name.value,
      number: form.elements.number.value,
    };

    if (
      contacts.find(
        ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      alert(`${contact.name} is already in contacts`);
      return;
    }

    dispatch(addContact(contact));
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        <TextField
          type="text"
          name="name"
          label="Name"
          variant="outlined"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id={nameInputId}
        />
      </Label>

      <Label>
        <TextField
          type="tel"
          name="number"
          label="Number"
          variant="outlined"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          id={numberInputId}
        />
      </Label>

      <Button type="submit" variant="contained">
        Add contact
      </Button>
    </Form>
  );
};