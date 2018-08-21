import React, { Component } from 'react';
import Header from './components/header';
import Techsheet from './components/techsheet';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header companyName='DLF Pickseed' companyLogo='https://www.dlfpickseed.com/Files/Images/DLF_Pickseed_USA/Logos/DLF_Pickseed_Logo_230x93.png'/>
        <Techsheet/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
