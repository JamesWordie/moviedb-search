import React from 'react';

// Styles
import { Wrapper } from './ErrorDiv.styles';

const ErrorDiv = ({ text }) => {
  return (
    <Wrapper>
      {text}
    </Wrapper>
  )
}

export default ErrorDiv;
