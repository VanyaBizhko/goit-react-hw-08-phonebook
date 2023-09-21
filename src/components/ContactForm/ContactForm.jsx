
// import { useAddContactMutation} from 'redux/contactsApi';



import { useCreateContactMutation } from 'redux/contactsApi';
import {  useSelector } from 'react-redux';
import styles from './ContactForm.module.css'




export default function ContactForm (){
     const token = useSelector(state => state.auth.token);
  const [newContact, { isLoading }] = useCreateContactMutation();

  const handleSubmit = async (e) => {
  e.preventDefault();
  const name = e.currentTarget.elements.name.value;
  const number = e.currentTarget.elements.number.value;

  e.currentTarget.reset();
  try {
    const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    };

    await newContact({ name, number }, { headers });
  } catch (error) {
    console.log(error);
  }
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
