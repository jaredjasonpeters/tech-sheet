import React, { Component } from 'react';
import {Context} from './contexts/contexts'
import { NTEPVarietyInput, $Label, NTEPRatingInput, Wrapper, DLF_Green, Checkbox } from './styled/styled'
import styled, { css } from 'styled-components'

export default class NTEProw extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checked: false,
            variety_name: '',
            ntep_rating: '',
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
                {!this.props.label && <Checkbox onClick={this.handleCheck.bind(this)} checked={this.state.checked} />}
                <$Label checked={this.state.checked}>{this.props.label || 'Variety Name:'}</$Label>
                {!this.props.label && <NTEPVarietyInput checked={this.state.checked} type='text' name="variety_name" onChange={this.props.handleInput} value={this.props['data-row']['variety_name']} data-row={this.props.name} data-table={this.props['data-table']}/>}
                <$Label checked={this.state.checked}>Variety Rating:</$Label>
                <NTEPRatingInput checked={this.state.checked} type='text' name="ntep_rating" onChange={this.props.handleInput} value={this.props['data-row']['ntep_rating']} data-row={this.props.name} data-table={this.props['data-table']}/>
            </Wrapper>
        )
    }
}


