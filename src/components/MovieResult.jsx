import React from 'react';
import { useParams } from 'react-router-dom';

// config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';

// components
import MovieGrid from './MovieGrid';
import Loading from './Loading';
import BreadCrumb from './BreadCrumb';
import MovieInfo from './MovieInfo';
import MovieInfoBar from './MovieInfoBar';

// hooks
import { useMovieFetch } from '../hooks/useMovieFetch';

// image
import NoImage from '../images/no_image.jpg';

const MovieResult = () => {
  const { movieId } = useParams();
  const { state: movie, loading, error } = useMovieFetch(movieId);

  if (loading) return <Loading />;

  if (error) return <div>Something went wrong...</div>;

  console.log(movie)

  return (
    <>
      <BreadCrumb movieTitle={movie.original_title} />
      <MovieInfo movie={movie} />
      <MovieInfoBar
        time={movie.runtime}
        budget={movie.budget}
        revenue={movie.revenue}
      />
    </>
  );
}

export default MovieResult;
