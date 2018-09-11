import React, { Component, Fragment } from 'react';
import Header from './components/header';
import { TechSheetProvider } from './components/providers/providers'
import DataEntryForm from './components/data_entry_form';
import './App.css';
import { Context } from './components/contexts/contexts';
import LogInScreen from './components/log_in_screen'
import { SubmitButton, Wrapper } from './components/styled/styled'
import { Colors } from './utils/utils'
import {DLF_Green} from './components/styled/styled'
import AppContent from './components/app_content'




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
