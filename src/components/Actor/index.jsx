import React from 'react';
import PropTypes from 'prop-types';

// Styles
import { Wrapper } from './Actor.styles';

// Components
import ThumbNail from '../ThumbNail';

const Actor = ({ name, character, imageUrl, actorId }) => {
  // checks to see if the page is the actor's page, if so disable clickable below
  const actorPage = window.location.href.includes('actor');

  return (
    <Wrapper>
      <ThumbNail
        image={imageUrl}
        clickable={actorPage ? false : true}
        id={actorId}
        optionalPath="/actor"
      />
      <h3>{name}</h3>
      <p>{character}</p>
    </Wrapper>
  );
}

Actor.propTypes = {
  name: PropTypes.string,
  character: PropTypes.string,
  imageUrl: PropTypes.string
}

export default Actor;
