import React, { useState } from 'react';

// Styles
import { Wrapper, Content, Button } from './Alert.styles';

const Alert = ({ text }) => {
  const [visited, setVisited] = useState(false);

  const handleClick = () => {
    setVisited(true);
  }

  return (
    <Wrapper visible={visited}>
      <Content>
        <p>{text}</p>
        <Button onClick={handleClick}>X</Button>
      </Content>
    </Wrapper>
  );
}

export default Alert;
