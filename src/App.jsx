import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// style
import { GlobalStyle } from './GlobalStyle';

// components
import Header from './components/Header';
import Home from './components/Home';
import MovieResult from './components/MovieResult';
import NotFound from './components/NotFound';
import Login from './components/Login/Login';
import ActorResult from './components/ActorResult';

// context
import UserProvider from './context';

const App = () => {
  return (
    <Router>
      <UserProvider>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path='/login' exact element={<Login />} />
            <Route path="/:movieId" exact element={<MovieResult />} />
            <Route path="/actor/:actorId" exact element={<ActorResult /> } />
            <Route path="/*" exact element={<NotFound />} />
            {/* asterisk after the slash returns a not found ie a 404 page */}
          </Routes>
          <GlobalStyle />
        </div>
      </UserProvider>
    </Router>
  );
}

export default App;
