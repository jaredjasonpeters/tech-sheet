import React, {Component} from 'react';
import styled, {css} from 'styled-components'

const Header = (props) => {
        return (
          <CompanyHeader className="App-header" style={{textAlign: 'Center'}}>
            <img src={props.companyLogo} className="App-logo" alt="logo" />
            <h1 className="App-title">{props.companyName} Tech Sheets</h1>
          </CompanyHeader>
        )
    }

    const CompanyHeader = styled.header`
        @import url('https://fonts.googleapis.com/css?family=Nunito:800');
        font-family: 'Nunito', sans-serif;
    `

    export default Header
