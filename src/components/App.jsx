
import { Routes, Route } from 'react-router-dom';




// import Filter from './Filter/Filter';
import Layout from './Layout/Layout';
import Login from 'pages/Login/Login';
import Register from 'pages/Register/Register';
// import UserMenu from './UserMenu/UserMenu';
// import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import { useGetContactByNameQuery } from 'redux/contactsApi';

// import UserMenu from './UserMenu/UserMenu';


const App = () => {
  const { data } = useGetContactByNameQuery();


  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="contacts" element={<ContactForm data={ data} />}>
         {/* <Route path='list' element={<ContactList />} />
         <Route path="filter" element={<Filter />} /> */}
        </Route> 
        {/* <Route path='menu'element={<UserMenu/>}></Route> */}
        
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default App;