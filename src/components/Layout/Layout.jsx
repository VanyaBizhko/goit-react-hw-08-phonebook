import { NavLink, Outlet} from 'react-router-dom';

const Layout = () => {

  
  return (
     <div>
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
                      <li >
              <NavLink to="/menu" >
                Меню користувача
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main >
        <Outlet />
      </main>
    </div>
  );
};
export default Layout;