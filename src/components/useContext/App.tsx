import React, { useState, createContext } from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import LoginForm from './LoginForm';
import DefaultLayout from './DefaultLayout';

interface AuthContextInterface {
  [0]: boolean;
  [1]: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AuthContext = createContext<AuthContextInterface | null>(null);

export default function App(): JSX.Element {
  const [authState, setAuthState] = useState(false);

  let routeTarget;

  if (!authState) {
    routeTarget = <Route path='/app' name="Login" component={LoginForm} />;
  } else {
    routeTarget = <Route path='/app' name="Home" component={DefaultLayout} />;
  }

  return (
    <AuthContext.Provider value={[authState, setAuthState]}>
      <HashRouter>
        <Switch>
          {routeTarget}
        </Switch>
      </HashRouter>
    </AuthContext.Provider>
  );
}
