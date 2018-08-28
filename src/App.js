import React, { Component } from 'react';
import Header from './components/header';
import Techsheet from './components/techsheet';
import {TechSheetProvider} from './components/providers/providers'
import DataEntry from './components/data_entry';
import './App.css';







class App extends Component {
  render() {
    return (
      <TechSheetProvider>
      <div className="App">
        <Header companyName='DLF Pickseed' companyLogo='https://www.dlfpickseed.com/Files/Images/DLF_Pickseed_USA/Logos/DLF_Pickseed_Logo_230x93.png' />
        <DataEntry />
      </div>
      </TechSheetProvider>
    );
  }
}

export default App;
