
import { useAddContactMutation} from 'redux/contactsApi';



import styles from './ContactForm.module.css'

export default function ContactForm() {

  const [addContact, {isLoading}] = useAddContactMutation();

  const handleSubmit = async (event) => {
    event.preventDefault();
      const name = event.currentTarget.elements.name.value;
  const number = event.currentTarget.elements.number.value;
    event.currentTarget.reset();
    
    addContact({ name,  number });
    
   console.log(addContact);
  };

    return (
        
     <div className={styles.section}>
       <form  onSubmit={handleSubmit}>
         <label className={styles.title}>Name</label>
         <input
           type="text"
           name="name"
           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
           required
         />
      
         <label className={styles.title}>Number</label>
         <input
           type="tel"
           name="number"
           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
           required
         />
      
         <button className={styles.button} type="submit" disabled={isLoading}>
          {isLoading ? 'Loading...': 'Add Contact'}
         </button>
       </form>
     </div>
    
    )
}
