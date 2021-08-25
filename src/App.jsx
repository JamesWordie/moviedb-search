import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// style
import { GlobalStyle } from './GlobalStyle';

// components
import Header from './components/Header';
import Home from './components/Home';
import MovieResult from './components/MovieResult';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <Router>
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/:movieId" exact component={MovieResult} />
        <Route path="/*" exact component={NotFound} />
        {/* asterisk after the slash returns a not found ie a 404 page */}
      </Switch>
      <GlobalStyle />
    </div>
    </Router>
  );
}

export default App;
