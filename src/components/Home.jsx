import React from 'react';

// config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';

// components
import Banner from './Banner';
import MovieGrid from './MovieGrid';
import ThumbNail from './ThumbNail';
import Loading from './Loading';
import SearchBar from './SearchBar';
import Button from './Button';

// hooks
import { useHomeFetch } from '../hooks/useHomeFetch';

// images
import NoImage from '../images/no_image.jpg';

const Home = () => {
  const { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore } = useHomeFetch();

  const movie = state.results[0];

  if (error) return <div>Something went wrong...</div>;

  return (
    <>
      {!searchTerm && movie &&
        <Banner
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.backdrop_path}`}
          title={movie.original_title}
          text={movie.overview}
        />
      }
      <SearchBar setSearchTerm={setSearchTerm} />
      <MovieGrid title={searchTerm ? 'Search Results' : 'Popular Movies'}>
        {state.results.map((movie) => (
          <ThumbNail
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
      {loading && <Loading />}
      {/* loading only shown if it is loading
      button is displayed only when not loading, when page is less than total pages */}
      {state.page < state.total_pages && !loading && (
        <Button text='Load More' onClick={() => setIsLoadingMore(true)} />
      )}
    </>
  );
};

export default Home;