import React from 'react';

import AppLogo from '../../images/react-movie-logo.svg';
import MovieLogo from '../../images/tmdb_logo.svg';

import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.styles';

const Header = () => {
  return (
    <Wrapper>
      <Content>
        <LogoImg src={AppLogo} alt="app-logo" />
        <TMDBLogoImg src={MovieLogo} alt="moviedb-logo" />
      </Content>
    </Wrapper>
  )
};

export default Header;
