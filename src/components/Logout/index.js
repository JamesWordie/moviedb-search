import React from 'react';

// Style
import { Wrapper } from './Logout.styles';

// Components
import Button from '../Button';

const Logout = () => {
  const handleClick = () => {
    console.log('clicked')
  }

  return (
    <Wrapper>
      <button onClick={handleClick}>LogOut</button>
    </Wrapper>
  )
}

export default Logout;
