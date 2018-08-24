import React, { Component } from 'react';
import { NTEPVarietyInput, $Label, NTEPRatingInput, Wrapper, DLF_Green } from './styled/styled'
import styled, { css } from 'styled-components'

export default class NTEProw extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checked: false,
        }
    }

    handleClick() {
        this.setState((prevState) => {
            var checked = prevState.checked
            return {
                checked: !checked
            }
        })
    }

    render() {
        return (
            <Wrapper>
                <Checkbox onClick={this.handleClick.bind(this)} checked={this.state.checked} />
                <$Label checked={this.state.checked}>{this.props.label || 'Variety Name:'}</$Label>
                <NTEPVarietyInput checked={this.state.checked} type='text' data="variety_name" />
                <$Label checked={this.state.checked}>Variety Rating:</$Label>
                <NTEPRatingInput checked={this.state.checked} type='text' data="ntep_rating" />
            </Wrapper>
        )
    }
}


const Checkbox = styled.div`
    max-width: 30px
    width: 30px
    height: 15px
    border: 1px solid black
    border-radius: 90px
    margin: 4px 10px

    ${props => props.checked && css`
    background-color: ${DLF_Green}
    max-width: 30px
    width:  30px
    height: 15px
    border: 1px solid black
    border-radius: 90px
    margin: 4px 10px
    `}
`