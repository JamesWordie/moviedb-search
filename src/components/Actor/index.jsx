import React from 'react';
import PropTypes from 'prop-types';

// Styles
import { Wrapper } from './Actor.styles';

// Components
import ThumbNail from '../ThumbNail';

const Actor = ({ name, character, imageUrl, actorId, movieId }) => {
  // checks to see if the page is the actor's page, if so disable clickable below
  const actorPage = window.location.href.includes('actor');

  return (
    <Wrapper>
      <ThumbNail
        image={imageUrl}
        clickable
        id={actorPage ? movieId : actorId}
        optionalPath={actorPage ? "" : "/actor"}
      />
      <h3>{name}</h3>
      <p>{character}</p>
    </Wrapper>
  );
}

Actor.propTypes = {
  name: PropTypes.string,
  character: PropTypes.string,
  imageUrl: PropTypes.string,
  actorId: PropTypes.number,
  movieId: PropTypes.number
}

export default Actor;
