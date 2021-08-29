import React from 'react';
import { useParams } from 'react-router-dom';

// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';

// Components
import MovieGrid from './MovieGrid';
import Loading from './Loading';
import BreadCrumb from './BreadCrumb';
import MovieInfo from './MovieInfo';
import MovieInfoBar from './MovieInfoBar';
import Actor from './Actor';

// Hooks
import { useMovieFetch } from '../hooks/useMovieFetch';

// Images
import NoImage from '../images/no_image.jpg';

const MovieResult = () => {
  const { movieId } = useParams();
  const { state: movie, loading, error } = useMovieFetch(movieId);

  if (loading) return <Loading />;

  if (error) return <div>Something went wrong...</div>;

  return (
    <>
      <BreadCrumb title={movie.original_title} />
      <MovieInfo movie={movie} />
      <MovieInfoBar
        time={movie.runtime}
        budget={movie.budget}
        revenue={movie.revenue}
      />
      <MovieGrid title="Actors">
        {movie.actors.map((actor) => (
          <Actor
            key={actor.credit_id}
            name={actor.name}
            character={actor.character}
            actorId={actor.id}
            imageUrl={
              actor.profile_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
              : NoImage
            }
          />
        ))}
      </MovieGrid>
    </>
  );
}

export default MovieResult;
