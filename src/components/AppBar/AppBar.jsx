import UserMenu from "components/UserMenu/UserMenu";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";




export default function AppBar() {
   
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    console.log(isLoggedIn);
    return (
         <header >
        <nav >
          <ul >
            <li >
              <NavLink to="/contacts" >
                Контакты
              </NavLink>
            </li>
            <li >
              <NavLink to="/login">
                Логин
              </NavLink>
            </li>
            <li >
              <NavLink to="/register" >
                Регистрация
              </NavLink>
                      </li>
                   </ul>
        </nav>   
              {isLoggedIn ? <UserMenu /> : 'не залогінений'}
           
         
      </header>
    )
}