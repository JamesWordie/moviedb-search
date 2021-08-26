import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

// images
import AppLogo from '../../images/react-movie-logo.svg';
import MovieLogo from '../../images/tmdb_logo.svg';

// style
import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.styles';

// context
import { Context } from '../../context';

const Header = () => {
  const [user] = useContext(Context);
  // console.log(user)

  return (
    <Wrapper>
      <Content>
        <Link to='/'>
          <LogoImg src={AppLogo} alt="app-logo" />
        </Link>
        <div className="group">
          {user ? (
            <span className="loggedin">Username: {user.username}</span>
            ) : (
            <Link to='/login'><span className="login">Log In</span></Link>
          )}
          <TMDBLogoImg src={MovieLogo} alt="moviedb-logo" />
        </div>
      </Content>
    </Wrapper>
  )
};

export default Header;
