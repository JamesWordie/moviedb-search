import React from 'react';

// Styles
import { Wrapper, Content, Button } from './Alert.styles';

const Alert = ({ text, onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <Content>
        <p>{text}</p>
        <Button>X</Button>
      </Content>
    </Wrapper>
  );
}

export default Alert;
