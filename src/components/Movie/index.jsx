import React from "react";

// styles
import { Image } from './Movie.styles';

const Movie = ({ image, movieId, clickable }) => {
  return (
    <div>
      <Image src={image} alt="movie thumbnail" />
    </div>
  )
}

export default Movie;
