import React, { Component } from 'react';
import {Context} from '../../Contexts/contexts'
import { FlexOuterWrapper, FlexInnerWrapper, $Input, NTEPVarietyInput, $Label, NTEPRatingInput, Wrapper, DLF_Green, Checkbox } from '../../Styled/styled'
import styled, { css } from 'styled-components'

const NTEProw = (props) => (
 
            <FlexOuterWrapper bg-color={props.tableConfirmed ? DLF_Green : "#e0e0e0"} pad="3px" br="15px" width="100%">              
                {!props.lsd && 
                    <Checkbox 
                    onClick={props.handleCheck} 
                    checked={props.checked} 
                    data-row={props.name} 
                    data-table={props['data-table']} 
                    width="10%" />
                }
                <FlexInnerWrapper width='35%'>
                    <$Label margin="0">
                    {props.lsd || 'Variety Name:'}</$Label>
                  
                {!props.lsd && 
                    <$Input
                    type='text' 
                    name="variety_name" 
                    onChange={props.handleInput} 
                    value={props['data-row']['variety_name'].value || ''} 
                    data-row={props.name} 
                    data-table={props['data-table']} 
                    />
                }
                </FlexInnerWrapper>
                <FlexInnerWrapper width='35%'>
                    <$Label margin="0">Variety Rating:</$Label>
                    <$Input 
                    type='text'
                    placeholder= "Ex. 4.6" 
                    name="ntep_rating" 
                    onChange={props.handleInput} 
                    value={props['data-row']['ntep_rating'].value || ''} 
                    data-row={props.name} 
                    data-table={props['data-table']} 
                    />
                </FlexInnerWrapper>
            </FlexOuterWrapper>
        )

    
export default NTEProw
 


