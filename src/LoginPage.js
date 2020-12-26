import { useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import './loginPage.css';
import Otp from './Otp';

const LoginPage = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleEmailSubmit = e => {
    e.preventDefault();
    setSent(true);
  };

  const handleChange = e => {
    setEmail(e.target.value);
  };

  return (
    <div className='card'>
      <Route exact path='/login'>
        {loggedIn ? (
          <Redirect to='/' />
        ) : (
          <div className='container'>
            {!sent ? (
              <form onSubmit={handleEmailSubmit}>
                <input
                  autoFocus
                  className='form__input'
                  placeholder='email*'
                  type='text'
                  value={email}
                  onChange={handleChange}
                />
                <button className='form__btn' type='submit'>
                  Get your code
                </button>
              </form>
            ) : (
              <Otp loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
            )}
          </div>
        )}
      </Route>
    </div>
  );
};

export default LoginPage;
