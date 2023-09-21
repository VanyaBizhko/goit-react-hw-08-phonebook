
import { useDispatch } from "react-redux";
import { setUserAndToken } from "redux/authSlice";
import { useLoginMutation } from "redux/contactsApi";




 const Login = () => {
      const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();

  const handleLogin = async (e) => {
    e.preventDefault();

    const email = e.currentTarget.elements.login.value;
    const password = e.currentTarget.elements.password.value;

    try {
   
      const response = await login({ email, password });

      if (response.data) {
        const { user, token } = response.data;

        dispatch(setUserAndToken({ user, token }));
      } else {
       
      }
    } catch (error) {
      console.error(error);
    }
  };
    return (
      <form onSubmit={handleLogin}>
        <label>
          Email
          <input name="login" type='email'></input>
        </label>
        <label>
          Password
          <input name="password" type='password'></input>
        </label>
        <button  disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Login'}
        </button>
      </form>
    );
  };

  export default Login;