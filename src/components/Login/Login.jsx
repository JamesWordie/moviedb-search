import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Api
import API from '../../API';

// Components
import Button from '../Button';
import Authenticate from '../Authenticate';

// Style
import { Wrapper } from './Login.styles';

// Context
import { Context } from '../../context';

const Login = () => {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [authenticateGuest, setAuthenticateGuest] = useState(false);
  const [_user, setUser] = useContext(Context);
  const navigate = useNavigate();

  const url = window.location.search;

  const handleSessionId = async () => {
    const sessionId = await API.guestSessionId();

    if (sessionId.success) {
      setAuthenticateGuest(true);
      setUser({ sessionId: sessionId.guest_session_id, username: 'Guest' });
      console.log('session in if')
    }
    console.log('session out if')

    // setAuthenticateGuest(false);
    navigate('/');
  }

  useEffect(() => {
    if (url !== '') {
      setAuthenticateGuest(true);
      const requestToken = sessionStorage.getItem('requestToken');
      handleSessionId(requestToken);
      console.log('UE in if')
    }
    console.log('UE in if')
    // setAuthenticateGuest(false);
  }, [url])

  // const handleInput = (e) => {
  //   const name = e.currentTarget.name;
  //   const value = e.currentTarget.value;

  //   if (name === 'username') setUsername(value);
  //   if (name === 'password') setPassword(value);
  // };

  const handleSubmit = async () => {
    setError(false);
    try {
      const requestToken = await API.getRequestToken();
      await API.authenticateGuest(
        requestToken
      );

      sessionStorage.setItem('requestToken', requestToken);

      setAuthenticateGuest(true);
    } catch {
      setError(true);
    }
  };

  // old code remains for user login when its for my own account
  return (
    <Wrapper>
      {error && <div className="error">Error, invalid username or password!</div>}
      {/* <form>
        <label>Username:</label>
        <input
          type='text'
          value={username}
          name='username'
          onChange={handleInput}
          // autoComplete='off'
        />
        <label>Password:</label>
        <input
          type='password'
          value={password}
          name='password'
          onChange={handleInput}
          autoComplete='off'
        />
      </form> */}
      {!authenticateGuest ?
      <Button text='Login' onClick={handleSubmit} />
      : <Authenticate />}
    </Wrapper>
  );
}

export default Login;
