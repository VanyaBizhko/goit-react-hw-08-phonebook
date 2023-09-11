
import { useSelector } from 'react-redux';

import {  getFilter } from 'redux/selectors';
import { useDeleteContactMutation, useFetchContactQuery } from 'redux/contactsApi';
import styles from './ContactList.module.css'

export default function ContactList() {
  const { data } = useFetchContactQuery();
  const[deleteContact, { isLoading}] = useDeleteContactMutation()
   const filter = useSelector(getFilter);
  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return data.filter((data) =>
      data.name.toLowerCase().includes(normalizedFilter)
    );
  };
   const filteredContacts = getFilteredContacts();
    return (
        <div>
            <ul>
        {filteredContacts.map((contact) => (
    <li className={styles.item} key={contact.id}>
            <p>{contact.name}: </p>
            <p>{contact.number}</p> <button
     className={styles.button} 
        onClick={() => deleteContact(contact.id)}
      >{isLoading ? 'Deleting...': 'Delete'}
       
      </button>
    </li>
  ))}
      </ul>
        </div>
    );
}
