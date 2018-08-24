import React, {Component} from 'react';
import { NTEPVarietyInput, $Label, NTEPRatingInput, NTEPWrapper, DLF_Green} from './styled/styled'
import styled, {css} from 'styled-components'

export default class NTEProw extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checked: false,
        }
    }

    handleClick(){
        this.setState((prevState) => {
            var checked = prevState.checked
            return {
                checked: !checked
            }
        })
    }

    render(){
        return (
            <NTEPWrapper>
                <IsOurs checked={this.handleClick.bind(this)} isChecked={this.state.checked}/>
                {console.log(this.state.checked)}
                <$Label>Variety Name:</$Label>
                <NTEPVarietyInput type='text' data="variety_name"/>
                <$Label>Variety Rating:</$Label>
                <NTEPRatingInput type='text' data="ntep_rating"/>
            </NTEPWrapper>
        )
    }
}

const IsOurs = (props) => {

    return (
            <input type='radio'/>
    )
    
 }
     
    

