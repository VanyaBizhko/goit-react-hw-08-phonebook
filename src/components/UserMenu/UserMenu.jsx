import { useLogoutMutation } from "redux/contactsApi";


const UserMenu = () => {
  const [logout] = useLogoutMutation();

  const handleLogout = () => {

    logout();
  };

  return (
    <div>
      <p>mango@mail.com</p>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;