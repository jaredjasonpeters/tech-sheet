import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom'
import '../styles/App.css';
import Header from './Header/header';
import DataProvider from './Providers/data_provider'
import LoginProvider from './Providers/login_provider'
import { DataContext, LoginContext } from './Contexts/contexts';
import Login from './Login/login'
import AppContent from './AppContent/app_content'
import TechSheetList from './Example/TechsheetList'
import CreateUser from './Example/CreateUser'
import {AUTH_TOKEN} from '../constants'


class App extends Component {
  constructor(props) {
    super(props)
    this.state={
      loggedIn: false,
    }
    this.logIn = this.logIn.bind(this)
  }

  ComponentDidUpdate(){
    
  }
  
  logIn() {
    setTimeout(() => {
      this.setState({
        loggedIn: true
      })
    }, 1500)
    
  }

  render() {
    return (
      <Fragment>
      {!this.state.loggedIn &&
      <LoginProvider>
        <LoginContext.Consumer>
          {context => (
            <Switch>  
            <Route exact path="/" component={CreateUser} />
            <Route 
              exact 
              path="/login" 
              render={(props) => 
                <Login logIn={this.logIn} loginState={this.state.loggedIn}/>} 
                />
            </Switch>
          )}
        </LoginContext.Consumer>
      </LoginProvider>
      } 

      {this.state.loggedIn &&
      <DataProvider>
        <DataContext.Consumer>
          {context => (
            <div id="App"
            className="App"
            context={context}
            style={{
              transition: 'background 500ms ease-in',
              background: 'white',
            }}>
              <Header id="header" companyName='DLF Pickseed' context={context} />
              <AppContent/>
            </div>
          )}
        </DataContext.Consumer>
      </DataProvider>
      }
      </Fragment>
    );
  }
}

export default App;
