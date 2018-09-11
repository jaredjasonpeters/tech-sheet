import React, { Component } from 'react';
import styled, { css } from 'styled-components'
import { FlexOuterWrapper } from './styled/styled'
import { Context } from './contexts/contexts'
import UserPanel from './user_panel'
import StyleSwitcher from './style_switcher'
import { Colors } from '../utils/utils'

export default class Header extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){

        var headerWrapper = document.getElementById('header-wrapper');
        headerWrapper.style.transition = 'none'
        headerWrapper.style.opacity = 0;
        
        setTimeout(() => {
            headerWrapper.style.transition = 'opacity 750ms ease-in'
            headerWrapper.style.opacity = 1
        }, 750)
    
        
    }

    componentDidUpdate(){
        var image = document.getElementById('company-logo');
        image.style.transition = 'none'
        image.style.opacity = 0;
        var App = document.getElementById('App')
        var AppHeader = document.getElementById('App-header')
        var sectionHeaders = [...document.querySelectorAll('div.sh')]
        
       
        setTimeout(() => {
            image.style.transition = 'opacity 500ms ease-in'
            image.style.opacity = 1
            App.style.background = Colors[this.props.context.state.theme_style]
            AppHeader.style.background = Colors[this.props.context.state.theme_style]
            sectionHeaders.map(v=> {
                v.style.transition = 'background 500ms ease-in'
                v.style.background = Colors[this.props.context.state.theme_style]
            })
        }, 500)      
    }
    render(){

        return (
            <Context.Consumer>
            {context => (
                
                <FlexOuterWrapper id="header-wrapper" width="100%" bg-color="none">
                    <CompanyHeader 
                    id="App-header" 
                    className="App-header" 
                    style={{
                        transition: 'background 500ms ease-in'
                    }}>
                        <img id="company-logo" src={`/images/${context.state.theme_style}.png`} className="App-logo" alt="logo" />
                        <h1 className="App-title">TECH SHEETS APP</h1>
                    </CompanyHeader>
                    <StyleSwitcher />
                    <UserPanel />
                </FlexOuterWrapper>
            )}
        </Context.Consumer>
       )
    }   
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


