import { useState, useEffect } from 'react';

// Api
import API from '../API';

// Helpers
import { isPersistedState } from '../helpers';

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0
};

export const useHomeFetch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [visited, setVisited] = useState(false);

  const fetchMovies = async (page, searchTerm = "") => {
    try {
      setError(false);
      setLoading(true);

      const movies = await API.fetchMovies(searchTerm, page);

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
    // if not in a search then search to sessionstorage
    if (!searchTerm) {
      const sessionState = isPersistedState('homeState');

      if (sessionState) {
        setState(sessionState);
        return;
      }
    }
    setState(initialState);
    fetchMovies(1, searchTerm);
  }, [searchTerm]) //dependency array trigger on home component mount and when searchTerm changes

  // load more movies
  useEffect(() => {
    if (!isLoadingMore) return;

    fetchMovies(state.page + 1, searchTerm);
    setIsLoadingMore(false);

  }, [isLoadingMore, state.page, searchTerm]);

  // write to sessionStorage
  useEffect(() => {
    if (!searchTerm) {
      sessionStorage.setItem('homeState', JSON.stringify(state));
    }
  }, [searchTerm, state]);

  // useEffect to deal with the information alert
  useEffect(() => {
    if (!visited) {
      const beenVisited = isPersistedState('visited');

      if (beenVisited) {
        setVisited(true);
      };
    }

    sessionStorage.setItem('visited', JSON.stringify(true));
  }, [visited]);

  return { state, loading, error, searchTerm, visited, setSearchTerm, setIsLoadingMore, setVisited };
};
