import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

// Images
import AppLogo from '../../images/react-movie-logo.svg';
import MovieLogo from '../../images/tmdb_logo.svg';

// Style
import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.styles';

// Context
import { Context } from '../../context';

const Header = () => {
  const [user, setUser] = useContext(Context);

  const handleClick = () => {
    setUser(undefined);
    console.log(user)
  }

  return (
    <Wrapper>
      <Content user={user}>
        <Link to='/'>
          <LogoImg src={AppLogo} alt="app-logo" />
        </Link>
        <div className="group">
          {user ? (
            <>
            <span className="loggedin">Username: {user.username}</span>
            <span onClick={handleClick} className="logout">Log Out</span>
            </>
            ) : (
            <Link to='/login'><span className="login">Log In</span></Link>
          )}
          {/* <TMDBLogoImg src={MovieLogo} alt="moviedb-logo" /> */}
        </div>
      </Content>
    </Wrapper>
  )
};

export default Header;
