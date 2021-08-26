import React, { useState } from 'react';

export const Context = React.createContext();

// setting up a global context and state that the application can access
const UserProvider = ({ children }) => {
  const [state, setState] = useState(undefined);

  return (
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
  );
};

export default UserProvider;
