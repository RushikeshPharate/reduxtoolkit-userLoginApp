import classes from './Auth.module.css';
import { useDispatch, useSelector } from 'react-redux';

import { authActions } from '../store/authSlice';


const Auth = () => {

  // const isLoggedin = useSelector((state)=>{
  //   console.log(state.isAutheticated);
  //   return state.isAutheticated;
  // });

  const dispatch = useDispatch();

  const logInButtonHandler = (event)=>{
    event.preventDefault();
    dispatch(authActions.login());

  };

  return (
    <main className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button onClick={logInButtonHandler}>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
