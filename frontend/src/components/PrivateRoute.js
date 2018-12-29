import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  console.log(rest)
  return (
  <Route {...rest}>
    {props =>
      console.log(props) || rest.isAuthenticated ? (
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
)};

export default PrivateRoute;
