import React, { Component } from 'react';
import styled, { css } from 'styled-components'
import { Wrapper } from './styled/styled'
import { Context } from './contexts/contexts'
import UserPanel from './user_panel'
import StyleSwitcher from './style_switcher'
import { Colors } from '../utils/utils'

const Header = (props) => {
    return (
        <Context.Consumer>
            {context => (

                <Wrapper width="100%" row="row" bg-color="none">
                    <CompanyHeader className="App-header" theme={Colors[context.state.theme_style]}>
                        <img src={`/images/${context.state.theme_style}.png`} className="App-logo" alt="logo" />
                        <h1 className="App-title">TECH SHEETS APP</h1>
                    </CompanyHeader>
                    <StyleSwitcher />
                    <UserPanel />
                </Wrapper>
            )}
        </Context.Consumer>
    )
}

const CompanyHeader = styled.header`
        @import url('https://fonts.googleapis.com/css?family=Nunito:800');
        font-family: 'Nunito', sans-serif;
        font-size: 12px;
        line-height: 2em;
        text-align: left;
        flex-grow: 5;
        max-width: 22%;
        align-self: flex-start;
        background-color: ${props => props.theme || '#222'};
        height: 10%;
        padding: 20px 0 0px 50px;
        color: black;
        border-radius: 0px 0px 0px 0px;
    `

export default Header
