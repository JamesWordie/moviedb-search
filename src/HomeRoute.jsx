import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const HomeRoute = ({ element: Component, path, ...rest }) => {
  return (
    <Route
      path={path}
      {...rest}
      render={(props) => {
        // return (<Redirect to="/" />)
        return (<Component {...props} />)
      }}
    >
    </Route>
  );
}

export default HomeRoute;
