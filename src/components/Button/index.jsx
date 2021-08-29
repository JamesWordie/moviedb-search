import React from 'react';
import PropTypes from 'prop-types';

// Styles
import { Wrapper } from './Button.styles';

const Button = ({ text, onClick }) => {
  return (
    <Wrapper type='button' onClick={onClick}>
      {text}
    </Wrapper>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func
}

export default Button;
