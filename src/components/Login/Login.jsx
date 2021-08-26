import React, { useState, useContext } from 'react';
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
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const [setUser] = useContext(Context);
  const navigate = useNavigate();

  const handleInput = (e) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;

    if (name === 'username') setUsername(value);
    if (name === 'password') setPassword(value);
  };

  const handleSubmit = async () => {
    setError(false);
    try {
      const requestToken = await API.getRequestToken();
      const sessionId = await API.authenticate(
        requestToken,
        username,
        password
      );

      console.log(sessionId)
      setUser({ sessionId: sessionId.session_id, username, });

      navigate('/');
    } catch {
      setError(true);
    }
  };

  return (
    <Wrapper>
      {error && <div className="error">Error, invalid username or password!</div>}
      <label>Username:</label>
      <input
        type='text'
        value={username}
        name='username'
        onChange={handleInput}
      />
      <label>Password:</label>
      <input
        type='password'
        value={password}
        name='password'
        onChange={handleInput}
      />
      <Button text='Login' onClick={handleSubmit} />
    </Wrapper>
  );
}

export default Login;
