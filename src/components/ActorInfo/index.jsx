import React from 'react';
import PropTypes from 'prop-types';

// Styles
import { Wrapper, Content, Text } from '../MovieInfo/MovieInfo.styles';

// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';

// Components
import ThumbNail from '../ThumbNail';
import Button from '../Button';

// Images
import NoImage from '../../images/no_image.jpg';

const ActorInfo = ({ actor }) => {
  const handleClick = () => {
    window.open(`https://www.imdb.com/name/${actor.imdb_id}`);
  }

  return (
    <Wrapper>
      <Content>
        <ThumbNail
          clickable={false}
          alt="actor-thumbnail"
          optionalPath=""
          image={actor.profile_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
          : NoImage
          }
        />
        <Text>
          <h1>{actor.name}</h1>
          <h3>OVERVIEW</h3>
          <p>{actor.biography}</p>
          <Button text="IMDB Profile" onClick={handleClick} />
        </Text>
      </Content>
    </Wrapper>
  );
}

ActorInfo.propTypes = {
  actor: PropTypes.object
}

export default ActorInfo;
