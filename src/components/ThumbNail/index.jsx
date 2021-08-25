import React from "react";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// styles
import { Image } from './ThumbNail.styles';

const ThumbNail = ({ image, movieId, clickable }) => {
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

ThumbNail.propTypes = {
  image: PropTypes.string,
  movieId: PropTypes.number,
  clickable: PropTypes.bool
}

export default ThumbNail;
