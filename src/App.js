import React, { Component } from 'react';
import Header from './components/header';
import Techsheet from './components/techsheet';
import {TechSheetProvider} from './components/providers/providers'
import DataEntry from './components/data_entry';
import './App.css';
import { Context } from './components/contexts/contexts';
import { SubmitButton, Wrapper } from './components/styled/styled'







class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      display_form: false,
    }
    this.showForm = this.showForm.bind(this)
  }
    
    showForm() {
      this.setState((prevState) => {
        var newState = Object.assign(prevState)
        newState['display_form'] = !prevState['display_form']
        return newState
      })
    }
  
  render() {
    return (
      <TechSheetProvider>
      <div className="App">
        <Header companyName='DLF Pickseed' companyLogo='https://www.dlfpickseed.com/Files/Images/DLF_Pickseed_USA/Logos/DLF_Pickseed_Logo_230x93.png' />
        {!this.state.display_form && 
          <Wrapper justify="center">
            <SubmitButton submit onClick={this.showForm}>Create New Techsheet</SubmitButton>
          </Wrapper>
        }
        {this.state.display_form && <DataEntry />}
        {/* <Techsheet /> */}
        <Context.Consumer>
        {(context)=> (console.log(context.state.form_data))}
        </Context.Consumer>
      
      </div>
      </TechSheetProvider>
    );
  }
}

export default App;
