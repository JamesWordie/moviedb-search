import { useState, useEffect, useContext } from "react";
import API from '../API';

// Context
import { SearchContext } from "../searchContext";

export const useMovieFetch = movieId => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { movies, setMovies } = useContext(SearchContext);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        setError(false);

        const movie = await API.fetchMovie(movieId);
        const credits = await API.fetchCredits(movieId);

        //get director only
        const directors = credits.crew.filter(
          member => member.job === 'Director'
        );

        setState({
          ...movie,
          actors: credits.cast,
          directors
        })

        setLoading(false);
      } catch (error) {
        setError(true);
      }

    }

    const movieContext = Object.keys(movies).find(movie => movie === movieId);

    // if not undefined or if movie exists, pick from movies Context, setState
    if (movieContext) {
      setState(movies[movieContext]);
      setLoading(false); // so doesn't display loading
      return;
    }

    fetchMovie();
  }, [movieId]) // ignore movies dependancy, goes into infinite loop if included

  // add each movie to the movies Context, to allow easy reload once fetched from API
  useEffect(() => {
    setMovies({
      ...movies,
      [movieId]: state
    })
  }, [movieId, state, setMovies]) // ignore movies dependancy, goes into infinite loop if included

  return { state, loading, error };
};
