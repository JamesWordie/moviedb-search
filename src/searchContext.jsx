import React, { useState } from 'react';

export const SearchContext = React.createContext();

const SearchProvider = ({ children }) => {
  const [movies, setMovies] = useState({});
  const [actors, setActors] = useState({});
  const homeState = {};

  const contextValues = {
    movies,
    setMovies,
    actors,
    setActors,
    homeState
  }

  return (
    <SearchContext.Provider value={contextValues} >{children}</SearchContext.Provider>
  )
}

export default SearchProvider;
