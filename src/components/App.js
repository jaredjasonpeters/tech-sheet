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


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }

  render() {
    return (
      <Fragment>

          <LoginProvider>
            <LoginContext.Consumer>
              {loginContext => {
                return (
                <Switch>
                  <Route
                    exact
                    path="/"
                    render={(props) =>
                      <Login props={props}/>
                    }
                  />

                  <Route
                    exact
                    path="/app"
                    render={(props) =>
                    <DataProvider>
                      <DataContext.Consumer>
                        {dataContext => {
                          return (
                          <div id="App"
                            className="App"
                            loginContext={loginContext}
                            dataContext={dataContext}
                            style={{
                              transition: 'background 500ms ease-in',
                              background: 'white',
                            }}>
                            <Header 
                              id="header" 
                              companyName='DLF Pickseed' 
                              loginContext={loginContext} 
                              dataContext={dataContext} 
                            />
                            <AppContent />
                          </div>
                        )}}
                      </DataContext.Consumer>
                    </DataProvider>
                   }/>
                </Switch>
              )}}
            </LoginContext.Consumer>
          </LoginProvider>
      </Fragment>
    );
  }
}

export default App