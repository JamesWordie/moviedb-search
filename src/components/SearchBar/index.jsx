import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

// Images
import searchIcon from '../../images/search-icon.svg';

// Styles
import { Wrapper, Content } from '../SearchBar/SearchBar.styles';

const SearchBar = ({ setSearchTerm }) => {
  const [state, setState] = useState('');
  const initial = useRef(true); // creates a mutable value DOES NOT TRIGGER RE-RENDER

  useEffect(() => {
    // skips initial render of useEffect
    if (initial.current) {
      initial.current = false;
      return;
    }

    // sets up a timer to prevent it triggering immediately
    const timer = setTimeout(() => {
      setSearchTerm(state);
    }, 1000)

    return () => clearTimeout(timer)
  }, [setSearchTerm, state])

  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt="search-icon" />
        <input
          type='text'
          placeholder='Search...'
          onChange={e => setState(e.currentTarget.value)}
          value={state}
        />
      </Content>
    </Wrapper>
  )
};

SearchBar.propTypes = {
  setSearchTerm: PropTypes.func
}

export default SearchBar;
