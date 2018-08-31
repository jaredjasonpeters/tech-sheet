import React, {Component} from 'react';
import styled, {css} from 'styled-components'
import {Wrapper}  from './styled/styled'
import UserPanel from './user_panel'

const Header = (props) => {
        return (
          <Wrapper width="100%" row="row">
          <CompanyHeader className="App-header">
            <img src={props.companyLogo} className="App-logo" alt="logo" />
            <h1 className="App-title">{props.companyName} Tech Sheets</h1>
          </CompanyHeader>
          <Spacer/>
          <UserPanel/>
          </Wrapper>
        )
    }

    const CompanyHeader = styled.header`
        @import url('https://fonts.googleapis.com/css?family=Nunito:800');
        font-family: 'Nunito', sans-serif;
        text-align: left;
        flex-grow: 5;
        max-width: 30%;
        align-self: flex-start;
        background-color: #222;
        height: 10%;
        padding: 20px 0 0px 50px;
        color: white;
        border-radius: 0px 0px 15px 0px;
    `

    
const Spacer = styled.div`
flex-grow: 7 
width: 30%;
align-self: flex-start
padding: 20px 0 0px 50px;
`

    export default Header
