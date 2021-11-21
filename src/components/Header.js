import classes from './Header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store/authSlice';

const Header = () => {

  const dispatch = useDispatch();

  const isAuth = useSelector((state)=>{
    
    return state.auth.isAuthenticated;
  
  });

  const logoutButtonHandler =()=>{
    dispatch(authActions.logout());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
           <li>
           { isAuth && <button onClick={logoutButtonHandler}>Logout</button> }
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
