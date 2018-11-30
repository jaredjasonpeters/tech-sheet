import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest}>
    {props =>
      console.log(props) || rest.loginContext.state.isAuthenticated ? (
        <Component {...rest} />
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location }
          }}
        />
      )
    }
  </Route>
);

export default PrivateRoute;
