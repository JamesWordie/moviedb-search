import React from 'react';
import PropTypes from 'prop-types';

// styles
import { Wrapper, Content, Text } from '../Banner/Banner.styles';

const Banner = ({ image, title, text }) => {
  return (
    <Wrapper image={image}>
      <Content>
        <Text>
          <h1>{title}</h1>
          <p>{text}</p>
        </Text>
      </Content>
    </Wrapper>
  );
};

Banner.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string
}

export default Banner;