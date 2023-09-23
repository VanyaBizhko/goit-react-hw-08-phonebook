import { useDispatch, useSelector } from 'react-redux';
import { clearUserAndToken } from 'redux/authSlice';


const UserMenu = () => {
   
    const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user); 

  const handleLogout = () => {
    // При виході з системи очищаємо токен із сторінки Redux і локального сховища
    dispatch(clearUserAndToken());

  };

  return (
    <div>
      {user && <p>{user.name}</p>} 
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;