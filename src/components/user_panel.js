import React, {Component, Fragment} from 'react'
import {Wrapper} from './styled/styled'
import styled, {css} from 'styled-components'


export default class UserPanel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Jeff',
        }
    }

    render() {
        return (
                <Fragment>
                    <PanelBox>
                    </PanelBox>
                </Fragment>
        )
    }
}

const PanelBox = styled.div`
 height: 150px;
 width: 30%;
 background: rgba(0,50,25,0.15);
 border-radius: 0px 0px 0px 15px;
 flex-grow: 1;
 align-self: flex-start;
 padding: 20px 0 0px 50px;
`
