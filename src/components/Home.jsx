import React from 'react';

// config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';

// components
import Banner from './Banner';
import MovieGrid from './MovieGrid';
import Movie from './Movie';
import Loading from './Loading';
import SearchBar from './SearchBar';

// hooks
import { useHomeFetch } from '../hooks/useHomeFetch';

// images
import NoImage from '../images/no_image.jpg';

const Home = () => {
  const { state, loading, error, setSearchTerm } = useHomeFetch();

  const movie = state.results[0];

  return (
    <>
      {movie &&
        <Banner
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.backdrop_path}`}
          title={movie.original_title}
          text={movie.overview}
        />
      }
      <SearchBar setSearchTerm={setSearchTerm} />
      <MovieGrid title={'Popular Movies'}>
        {state.results.map((movie) => (
          <Movie
            key={movie.id}
            clickable
            image={
              movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : NoImage
            }
            movieId={movie.id}
          />
        ))}
      </MovieGrid>
      {/* <Loading /> */}
    </>
  );
};

export default Home;
