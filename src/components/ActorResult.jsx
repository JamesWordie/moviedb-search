import React from 'react';
import { useParams } from 'react-router-dom';

// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';

// Components
import MovieGrid from './MovieGrid';
import Loading from './Loading';
import BreadCrumb from './BreadCrumb';
import ActorInfo from './ActorInfo';
import Actor from './Actor';

// Hooks
import { useActorFetch } from '../hooks/useActorFetch';

// Images
import NoImage from '../images/no_image.jpg';

const ActorResult = () => {
  const { actorId } = useParams();
  const { state: actor, loading, error } = useActorFetch(actorId);

  if (loading) return <Loading />;

  if (error) return <div>Something went wrong...</div>;

  return (
    <>
      <BreadCrumb title={actor.name} />
      <ActorInfo actor={actor} />
      <MovieGrid title="Top Rated Movies">
        {actor.movies.map((movie) => (
          <Actor
            key={movie.id}
            name={movie.title}
            character={movie.character}
            imageUrl={movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
            : NoImage
            }
          />
        ))}
      </MovieGrid>
    </>
  );
}

export default ActorResult;
