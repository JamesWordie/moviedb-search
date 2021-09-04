import React, { useState } from 'react';

export const SearchContext = React.createContext();

const SearchProvider = ({ children }) => {
  const [movies, setMovies] = useState({});
  const [actors, setActors] = useState({});
  const [visited, setVisited] = useState(false);
  const homeState = {};

  const contextValues = {
    movies,
    setMovies,
    actors,
    setActors,
    visited,
    setVisited,
    homeState
  }

  return (
    <SearchContext.Provider value={contextValues} >{children}</SearchContext.Provider>
  )
}

export default SearchProvider;
