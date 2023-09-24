import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { Container } from './Contacts.styled';

export default function Contacts() {
  return (
    <Container>
      <ContactForm />
      <Filter />
      <ContactList />
    </Container>
  );
}