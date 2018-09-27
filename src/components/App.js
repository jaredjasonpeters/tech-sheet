import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom'
import '../styles/App.css';
import Header from './Header/header';
import DataProvider from './Providers/data_provider'
import LoginProvider from './Providers/login_provider'
import { DataContext, LoginContext } from './Contexts/contexts';
import Login from './Login/login'
import AppContent from './AppContent/app_content'
import { AUTH_TOKEN } from '../constants'
import FourOFour from './404'
import PrivateRoute from './PrivateRoute'
import ProtectedApplication from './ProtectedApplication'
import { Redirect } from 'react-router-dom'


class App extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <LoginProvider>
        <LoginContext.Consumer>
          {loginContext => {
            return (
              <Switch>
                <Route
                  exact
                  path="/"
                  render={(props) =>
                    <Login isAuthenticated={loginContext.state.isAuthenticated} loginContext={loginContext} />
                  }
                />

                <PrivateRoute path="/app" component={ProtectedApplication} loginContext={loginContext} />

              </Switch>
            )
          }}
        </LoginContext.Consumer>
      </LoginProvider>
    );
  }
}

export default App