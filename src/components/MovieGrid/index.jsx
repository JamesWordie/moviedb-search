import React from 'react';

// styles
import { Wrapper, Content } from './MovieGrid.styles';

const MovieGrid = ({ title, children }) => {
  return (
    <Wrapper>
      <h1>{title}</h1>
      <Content>{children}</Content>
    </Wrapper>
  );
}

export default MovieGrid;
