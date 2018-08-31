import React, { Component } from 'react';
import Header from './components/header';
import Techsheet from './components/techsheet';
import { TechSheetProvider } from './components/providers/providers'
import DataEntryForm from './components/data_entry_form';
import './App.css';
import { Context } from './components/contexts/contexts';
import { SubmitButton, Wrapper } from './components/styled/styled'
import { Colors } from './utils/utils'



class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <TechSheetProvider>
        <Context.Consumer>
          {context => (
            <div className="App"
              style={{
                transition: 'background 1000',
                background: Colors[context.state.theme_style]
              }}>
              <Header companyName='DLF Pickseed' companyLogo='https://www.dlfpickseed.com/Files/Images/DLF_Pickseed_USA/Logos/DLF_Pickseed_Logo_230x93.png' />
              {context.state.display_form && <DataEntryForm />}
            </div>
          )}
        </Context.Consumer>
      </TechSheetProvider>
    );
  }
}

export default App;
