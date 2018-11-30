import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import "../styles/App.css";
import LoginProvider from "./Providers/login_provider";
import { LoginContext } from "./Contexts/";
import Login from "./Login/login";
import FourOFour from "./404";
import PrivateRoute from "./PrivateRoute";
import ProtectedApplication from "./ProtectedApplication";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <LoginProvider>
        <LoginContext.Consumer>
          {loginContext => {
            return (
              <Switch>
                <Route exact path="/">
                  {props => (
                    <Login
                      isAuthenticated={loginContext.state.isAuthenticated}
                      loginContext={loginContext}
                    />
                  )}
                </Route>
                <PrivateRoute
                  path="/app"
                  component={ProtectedApplication}
                  loginContext={loginContext}
                />
              </Switch>
            );
          }}
        </LoginContext.Consumer>
      </LoginProvider>
    );
  }
}

export default App;
