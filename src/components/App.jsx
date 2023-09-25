
import { Routes, Route } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';



import { useAuth } from 'hooks';
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
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
};
