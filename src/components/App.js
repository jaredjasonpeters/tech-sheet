import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import "../styles/App.css";
import Header from "./Header/header";
import DataProvider from "./Providers/data_provider";
import LoginProvider from "./Providers/login_provider";
import { DataContext, LoginContext } from "./Contexts/contexts";
import Login from "./Login/login";
import AppContent from "./AppContent/app_content";
import TechSheetList from "./Example/TechsheetList";
import CreateUser from "./Example/CreateUser";
import SignUp from "./SignUp/signup";
import { AUTH_TOKEN } from "../constants";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    };
    this.logIn = this.logIn.bind(this);
  }

  ComponentDidUpdate() {}

  logIn() {
    setTimeout(() => {
      this.setState({
        loggedIn: true
      });
    }, 1500);
  }

  render() {
    return (
      <Fragment>
        <LoginProvider>
          <LoginContext.Consumer>
            {context => {
              return (
                <Switch>
                  <Route
                    exact
                    path="/"
                    render={context => (
                      <SignUp logIn={this.logIn} loginState={context.state} />
                    )}
                  />
                  <Route
                    exact
                    path="/login"
                    render={context => (
                      <Login logIn={this.logIn} loginState={context.state} />
                    )}
                  />
                  <Route
                    exact
                    path="/app"
                    render={() => (
                      <DataProvider>
                        <DataContext.Consumer>
                          {context => {
                            return (
                              <div
                                id="App"
                                className="App"
                                context={context}
                                style={{
                                  transition: "background 500ms ease-in",
                                  background: "white"
                                }}
                              >
                                <Header
                                  id="header"
                                  companyName="DLF Pickseed"
                                  context={context}
                                />
                                <AppContent />
                              </div>
                            );
                          }}
                        </DataContext.Consumer>
                      </DataProvider>
                    )}
                  />
                </Switch>
              );
            }}
          </LoginContext.Consumer>
        </LoginProvider>
      </Fragment>
    );
  }
}
