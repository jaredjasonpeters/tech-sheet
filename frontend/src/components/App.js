import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import "../styles/App.css";
import {LoginProvider, LoginConsumer} from "./Providers/login_provider";
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
        <LoginConsumer>
          {({isAuthenticated}) => {
            return (
              <Switch>
                <Route exact path="/">
                  {props => (
                    <Login
                      isAuthenticated={isAuthenticated}
                    />
                  )}
                </Route>
                <PrivateRoute
                  path="/app"
                  component={ProtectedApplication}
                  isAuthenticated={isAuthenticated}
                />
              </Switch>
            );
          }}
        </LoginConsumer>
      </LoginProvider>
    );
  }
}

export default App;
