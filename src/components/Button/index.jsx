import React from 'react';

// style
import { Wrapper } from './Button.styles';

const Button = ({ text, onClick }) => {
  return (
    <Wrapper type='button' onClick={onClick}>
      {text}
    </Wrapper>
  )
};

export default Button;
