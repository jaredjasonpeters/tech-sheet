import React, {Component} from 'react';

const Header = (props) => {
        return (
          <header className="App-header">
            <img src={props.companyLogo} className="App-logo" alt="logo" />
            <h1 className="App-title">{props.companyName} Tech Sheets</h1>
          </header>
        )
    }

    export default Header
