import React, { Component, Fragment } from 'react';
import styled from 'styled-components'
import { Context } from './contexts/contexts'

export default class TechSheetSidebar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            techsheets: [
                'one',
                'two',
                'three',
                'four',
                'five',
                'six',
            ]
        }
    }
    render() {
        return (
            <Context.Consumer>
                {context => (
                    <SidebarContainer context={context.state.theme_style}>
                        {this.state.techsheets.map(v => <li key={`ts-${v}`}>{v}</li>)}
                    </SidebarContainer>
                )}

            </Context.Consumer>
        );
    }
}

const SidebarContainer = styled.ul`
    width: 20%;
    flex-grow: 1;
    color: ${props => props.context && 'white'}
`