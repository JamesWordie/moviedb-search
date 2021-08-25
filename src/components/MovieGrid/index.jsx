import React from 'react';
import PropTypes from 'prop-types';

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

MovieGrid.propTypes = {
  title: PropTypes.string
}

export default MovieGrid;
