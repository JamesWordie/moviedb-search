import React from 'react';
import PropTypes from 'prop-types';

// style
import { Wrapper, Content, Text } from '../MovieInfo/MovieInfo.styles';

// config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';

// components
import ThumbNail from '../ThumbNail';
import Button from '../Button';

// image
import NoImage from '../../images/no_image.jpg';

const ActorInfo = ({ actor }) => {
  console.log(actor)

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

export default ActorInfo;
