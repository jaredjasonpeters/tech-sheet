import React, { Component } from 'react';
import {Context} from './contexts/contexts'
import { NTEPVarietyInput, $Label, NTEPRatingInput, Wrapper, DLF_Green, Checkbox } from './styled/styled'
import styled, { css } from 'styled-components'

export default class NTEProw extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checked: false,
        }
    }

    handleCheck() {
        this.setState((prevState) => {
            var newState = Object.assign(prevState)
            var checked = newState.checked
            return {
                checked: !checked
            }
        })
    }
    

    render() {
        return (
            <Wrapper>               
                <Checkbox onClick={this.handleCheck.bind(this)} checked={this.state.checked} />
                <$Label checked={this.state.checked}>{this.props.label || 'Variety Name:'}</$Label>
                <NTEPVarietyInput checked={this.state.checked} type='text' data="variety_name" />
                <$Label checked={this.state.checked}>Variety Rating:</$Label>
                <NTEPRatingInput checked={this.state.checked} type='text' data="ntep_rating" />
            </Wrapper>
        )
    }
}


