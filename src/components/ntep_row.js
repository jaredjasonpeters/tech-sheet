import React, { Component } from 'react';
import {Context} from './contexts/contexts'
import { NTEPVarietyInput, $Label, NTEPRatingInput, Wrapper, DLF_Green, Checkbox } from './styled/styled'
import styled, { css } from 'styled-components'

const NTEProw = (props) => (
 
            <Wrapper>              
                {!props.label && 
                <Checkbox onClick={props.handleCheck} checked={props.checked} data-row={props.name} data-table={props['data-table']} />}
                <$Label>
                    {props.label || 'Variety Name:'}</$Label>
                {!props.label && 
                <NTEPVarietyInput type='text' name="variety_name" onChange={props.handleInput} value={props['data-row']['variety_name'].value || ''} data-row={props.name} data-table={props['data-table']} data-is-filled={props['data-row']['variety_name'] !== ''}/>}
                <$Label>Variety Rating:</$Label>
                <NTEPRatingInput type='text' name="ntep_rating" onChange={props.handleInput} value={props['data-row']['ntep_rating'].value || ''} data-row={props.name} data-table={props['data-table']} data-is-filled={props['data-row']['ntep_rating'] !== ''}/>
            </Wrapper>
        )

    
export default NTEProw
 


