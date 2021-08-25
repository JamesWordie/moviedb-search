import React from "react";
import { Link } from 'react-router-dom';

// styles
import { Image } from './Movie.styles';

const Movie = ({ image, movieId, clickable }) => {
  return (
    <div>
      {clickable ? (
        <Link to={`/${movieId}`} >
          <Image src={image} alt="movie thumbnail" />
        </Link>
      ) : (
        <Image src={image} alt="movie thumbnail" />
      )}
    </div>
  )
}

export default Movie;
