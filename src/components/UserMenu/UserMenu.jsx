import { useDispatch, useSelector } from 'react-redux';
import { clearUserAndToken } from 'redux/authSlice';


const UserMenu = () => {
   
    const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user); 

 const handleLogout = () => {
    
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