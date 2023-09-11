

import ContactForm from './ContactForm/ContactForm'
import Filter from './Filter/Filter'
import ContactList from './ContactList/ContactList'
import { useFetchContactQuery} from 'redux/contactsApi';






export default function App() {
    const { data } = useFetchContactQuery();
  
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm 
        />

        <h2>Contacts</h2>
        <Filter /> 
         {data && <ContactList /> }
      </div>
    )
};
  
