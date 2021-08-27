import React from 'react';
import PropTypes from 'prop-types';

// style
import { Wrapper, Image } from './Actor.styles';

// component
import ThumbNail from '../ThumbNail';

const Actor = ({ name, character, imageUrl, actorId }) => {
  return (
    <Wrapper>
      {/* <Image src={imageUrl} alt='actor-thumbnail' /> */}
      <ThumbNail
        image={imageUrl}
        clickable={true}
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
