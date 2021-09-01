import React from 'react';

// Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';

// Components
import Banner from './Banner';
import MovieGrid from './MovieGrid';
import ThumbNail from './ThumbNail';
import Loading from './Loading';
import SearchBar from './SearchBar';
import Button from './Button';
import Alert from './Alert';
import ErrorDiv from './ErrorDiv';

// Hooks
import { useHomeFetch } from '../hooks/useHomeFetch';

// Images
import NoImage from '../images/no_image.jpg';
import BreadCrumb from './BreadCrumb';

const Home = () => {
  const { state, loading, error, searchTerm, visited, setSearchTerm, setIsLoadingMore, setVisited } = useHomeFetch();

  const movie = state.results[0];

  if (error) return <div>Something went wrong...</div>;

  return (
    <>
      {!visited && <Alert text="Login with a guest account to rate movies."
        onClick={() => setVisited(true)}
      />}

      {!searchTerm && movie &&
        <Banner
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.backdrop_path}`}
          title={movie.original_title}
          text={movie.overview}
        />
      }

      {searchTerm && state.results.length !== 0 &&
      <BreadCrumb title={searchTerm} />}

      <SearchBar setSearchTerm={setSearchTerm} />

      {state.results.length !== 0 &&
      <MovieGrid title={searchTerm ? 'Search Results' : 'Popular Movies'}>
        {state.results.map((movie) => (
          <ThumbNail
          key={Math.random() * movie.id}
          clickable
          image={
            movie.poster_path
            ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
            : NoImage
          }
          id={movie.id}
          optionalPath=""
          />
          ))}
      </MovieGrid>}

      {state.results.length === 0 && !loading &&
      <ErrorDiv text={`Your search for ${searchTerm} didn't return any results. Try again.`} />}

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
