import React, { Component, Fragment } from 'react';
import Header from './components/header';
import Techsheet from './components/techsheet';
import TechsheetSidebar from './components/tech_sheet_sidebar'
import { TechSheetProvider } from './components/providers/providers'
import DataEntryForm from './components/data_entry_form';
import './App.css';
import { Context } from './components/contexts/contexts';
import LogInScreen from './components/log_in_screen'
import { SubmitButton, Wrapper } from './components/styled/styled'
import { Colors } from './utils/utils'
import {DLF_Green} from './components/styled/styled'



class App extends Component {
  constructor(props) {
    super(props)
    this.state={
      loggedIn: false,
    }
    this.logIn = this.logIn.bind(this)
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
            <div className="App"
            style={{
              transition: 'background 1000',
              background: Colors[context.state.theme_style] || 'white'
            }}>
              <Header companyName='DLF Pickseed' />
              {context.state.display_form && <DataEntryForm />}
              <TechsheetSidebar/>
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
