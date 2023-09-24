
import { useSelector } from 'react-redux';

import {  getFilter } from 'redux/auth/selectors';
import { useDeleteContactMutation, useGetContactByNameQuery } from 'redux/contacts/contactsSlice';
import styles from './ContactList.module.css'

export default function ContactList() {
  const { data } = useGetContactByNameQuery();
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  const filter = useSelector(getFilter);

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return data ? data.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    ) : [];
  };

  const filteredContacts = getFilteredContacts();

    return (
        <div>
            <ul>
        {data && filteredContacts.map((contact) => (
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
