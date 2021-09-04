import React, { useState } from 'react';

export const SearchContext = React.createContext();

const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState('');

  return (
    <SearchContext.Provider value={[search, setSearch]} >{children}</SearchContext.Provider>
  )
}

export default SearchProvider;
