import React, { Component, Fragment } from 'react';
import styled from 'styled-components'

export default class TechSheetSidebar  extends Component {
    constructor(props){
        super(props)
        this.state = {
            techsheets: [
                'one',
                'tow',
                'three',
                'four',
                'five',
                'six'
            ]
        }
    }
    render() {
        return (
            <Fragment>
                <SidebarContainer>
                    {this.state.techsheets.map(v => <li key={`ts-${v}`}>{v}</li>)}
                </SidebarContainer>
            </Fragment>
        );
    }
}

const SidebarContainer = styled.ul`
    width: 20%;
`