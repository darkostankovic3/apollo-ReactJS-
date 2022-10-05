/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  HashRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

// components
import Layout from './Layout/Layout';

// pages
import Error from '../pages/error/Error';
import Login from '../pages/login/Login';

// context
import { useUserState } from '../context/UserContext';

import { dashboardRoutes } from '../App.routes';

export default function App() {
  // global
  const { isAuthenticated } = useUserState();
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" render={() => <Redirect to={dashboardRoutes.dashboard.path} />} />
        <Route
          exact
          path="/app"
          render={() => <Redirect to={dashboardRoutes.dashboard.path} />}
        />
        <PrivateRoute path="/app" component={Layout} />
        <PublicRoute path="/login" component={Login} />
        <Route component={Error} />
      </Switch>
    </HashRouter>
  );

  // #######################################################################

  function PrivateRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={(props) => (isAuthenticated ? (
          React.createElement(component, props)
        ) : (
          <Redirect to="/login" />
        ))}
      />
    );
  }

  function PublicRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={(props) => (isAuthenticated ? (
          <Redirect
            to={{
              pathname: '/',
            }}
          />
        ) : (
          React.createElement(component, props)
        ))}
      />
    );
  }
}
