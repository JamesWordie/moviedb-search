import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Styles
import { GlobalStyle } from './GlobalStyle';

// Components
import Header from './components/Header';
import Home from './components/Home';
import MovieResult from './components/MovieResult';
import NotFound from './components/NotFound';
import Login from './components/Login/Login';
import ActorResult from './components/ActorResult';
import Footer from './components/Footer';

// Context
import UserProvider from './context';
import SearchProvider from './searchContext';

const App = () => {
  return (
    <Router>
      <SearchProvider>
        <UserProvider>
          <div className="App">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path="/:movieId" element={<MovieResult />} />
              <Route path="/actor/:actorId" element={<ActorResult />} />
              <Route path="/*" element={<NotFound />} />
              {/* asterisk after the slash returns a not found ie a 404 page */}
            </Routes>
            <Footer />
            <GlobalStyle />
          </div>
        </UserProvider>
      </SearchProvider>
    </Router>
  );
}

export default App;
