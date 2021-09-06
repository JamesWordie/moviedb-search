import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import API from '../../API';

// Styles
import { Wrapper, Content, Text } from './MovieInfo.styles';

// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';

// Components
import ThumbNail from '../ThumbNail';
import Rate from '../Rate';

// Images
import NoImage from '../../images/no_image.jpg';

// Context
import { Context } from '../../context';

const MovieInfo = ({ movie }) => {
  const [user] = useContext(Context);

  const handleRating = async value => {
    const rate = await API.rateMovie(
      user.sessionId,
      movie.id,
      value
    );
    return rate.success ? window.alert(`You rated the movie a ${value}/5.`) : null;
  }

  return (
    <Wrapper backdrop={movie.backdrop_path}>
      <Content>
        <ThumbNail
          image={movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
          : NoImage
          }
          clickable={false}
          alt='movie-thumbnail'
          optionalPath=""
        />
        <Text>
          <h1>{movie.title}</h1>
          <h3>PLOT</h3>
          <p>{movie.overview}</p>

          <div className="rating-director">
            <div>
              <h3>RATING</h3>
              <div className="score">{movie.vote_average}</div>
            </div>
            <div className="director">
              <h3>DIRECTOR{movie.directors.length > 1 ? 'S' : ''}</h3>
              {movie.directors.map((director) => (
                <p key={director.credit_id}>{director.name}</p>
              ))}
            </div>
            <div className="release-date">
              <h3>RELEASE DATE</h3>
              <p>{movie.release_date}</p>
            </div>
          </div>
          {user &&
          (<div>
            <h3>Rate the Movie</h3>
            <Rate onClick={handleRating} />
          </div>)}
        </Text>
      </Content>
    </Wrapper>
  );
}

MovieInfo.propTypes = {
  movie: PropTypes.object
}

export default MovieInfo;
