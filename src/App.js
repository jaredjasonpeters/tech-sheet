import React, { Component, Fragment } from 'react';
import Header from './components/Header/header';
import { TechSheetProvider } from './components/Providers/providers'
import './App.css';
import { Context } from './components/Contexts/contexts';
import LogInScreen from './components/Login/log_in_screen'
import AppContent from './components/AppContent/app_content'




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
      <LogInScreen logIn={this.logIn}></LogInScreen>
      } 

      {this.state.loggedIn &&
      <TechSheetProvider>
        <Context.Consumer>
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
        </Context.Consumer>
      </TechSheetProvider>
      }

      </Fragment>
    );
  }
}

export default App;
