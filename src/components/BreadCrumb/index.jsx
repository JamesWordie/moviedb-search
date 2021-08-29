import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Styles
import { Wrapper, Content  } from '../BreadCrumb/BreadCrumb.styles';

const BreadCrumb = ({ title }) => {
  return (
    <Wrapper>
      <Content>
        <Link to='/'>
          <span>Home</span>
        </Link>
        <span>|</span>
        <span>{title}</span>
      </Content>
    </Wrapper>
  );
}

BreadCrumb.propTypes = {
  movieTitle: PropTypes.string
}

export default BreadCrumb;
