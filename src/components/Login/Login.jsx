import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// api
import API from '../../API';

// components
import Button from '../Button';

// style
import { Wrapper } from './Login.styles';

// context
import { Context } from '../../context';

const Login = () => {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const [user, setUser] = useContext(Context);
  const navigate = useNavigate();

  const query = window.location.search;

  const handleSessionId = async () => {
    const sessionId = await API.guestSessionId();

    if (sessionId.success) {
      setUser({ sessionId: sessionId.guest_session_id, username: 'Guest' });
    }

    navigate('/');
  }

  useEffect(() => {
    if (query !== '') {
      const requestToken = sessionStorage.getItem('requestToken');
      handleSessionId(requestToken);
    }
  }, [query, navigate, setUser])

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

      navigate('/');
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
      <Button text='Login' onClick={handleSubmit} />
    </Wrapper>
  );
}

export default Login;
