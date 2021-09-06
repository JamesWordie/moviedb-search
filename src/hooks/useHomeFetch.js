import { useState, useEffect, useContext } from 'react';

// Api
import API from '../API';

// Helpers
import { isEmptyObject } from '../helpers';

// Context
import { SearchContext } from '../searchContext';

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0
};

export const useHomeFetch = () => {
  const [searchTerm, setSearchTerm] = useState(''); //searchTerm
  const [state, setState] = useState(initialState); // movies
  const [loading, setLoading] = useState(false); // loading
  const [error, setError] = useState(false); // errors
  const [isLoadingMore, setIsLoadingMore] = useState(false); // loading more

  const { homeState, setHomeState } = useContext(SearchContext);

  const fetchMovies = async (page, searchTerm = "") => {
    try {
      setError(false);
      setLoading(true);

      const movies = await API.fetchMovies(searchTerm, page);

      // revert to popular movies if no results
      if (movies.results.length === 0) {
        setTimeout(() => {
          setSearchTerm('');
        }, 5000)
      }

      setState(previous => ({
        ...movies,
        results:
          page > 1 ? [...previous.results, ...movies.results] : [...movies.results]
      }));
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  // initial render and search
  useEffect(() => {
    // if not in a search, then check homestate context
    if (!searchTerm) {
      const home = isEmptyObject(homeState);

      if (!home) {
        setState(homeState);
        return;
      }
    }
    setState(initialState);
    fetchMovies(1, searchTerm);
  }, [searchTerm]) //dependency array trigger on home component mount and when searchTerm changes // ignore movies dependancy, goes into infinite loop if included

  // load more movies
  useEffect(() => {
    if (!isLoadingMore) return;

    fetchMovies(state.page + 1, searchTerm);
    setIsLoadingMore(false);

  }, [isLoadingMore, state.page, searchTerm]);

  // use effect to write to set home state
  useEffect(() => {
    if (!searchTerm) {
      setHomeState(state);
    }
  }, [state]) // ignore searchTerm and setHomeState dependancy, goes into infinite loop if included

  return { state, loading, error, searchTerm, setState, setSearchTerm, setIsLoadingMore };
};
