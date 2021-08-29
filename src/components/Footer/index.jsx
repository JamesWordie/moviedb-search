import React from 'react';

// Styles
import { Wrapper, Content, TMDBLogoImg, GitHub } from './Footer.styles';

// Images
import MovieLogo from '../../images/tmdb_logo.svg';
import GitHubLogo from '../../images/github_logo_light.png';


const Footer = () => {
  return (
    <Wrapper>
      <Content>
        <TMDBLogoImg src={MovieLogo} alt="moviedb-logo" />
        <span>
          <h3>Created by
            <a href="https://www.jameswordie.com" target="_blank" rel="noreferrer"> James Wordie</a>
          </h3>
          <a href="https://github.com/JamesWordie/moviedb-search" target="_blank" rel="noreferrer">
            <GitHub src={GitHubLogo} alt="github-logo" />
          </a>
        </span>
      </Content>
    </Wrapper>
  );
}

export default Footer;
