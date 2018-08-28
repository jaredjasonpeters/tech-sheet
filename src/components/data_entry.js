import React, { Component } from 'react'
import { $Input, InputLabel, $Label, SectionHeader, $Form, SubmitButton, $TextArea, Wrapper, Checkbox, BIinput, InputWrapper, Value, DLF_Pink, Select } from './styled/styled'
import ToleranceTable from './tolerance_table'
import TableList from './TableList'
import { formatName } from '../utils/utils'
import styled, { css } from 'styled-components'
import ToleranceSelection from './toleranceSelection'
import {Context} from './contexts/contexts'


export default class DataEntry extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Context.Consumer>
            {(context) => (
            <$Form>
                <SectionHeader className='header'> HEADER </SectionHeader>
                <Wrapper>
                    <img src="http://a-listturf.org/wp-content/uploads/2016/12/ALIST-Logo-Small.png"
                        style={{
                            height: '70px',
                            width: '70px'
                        }}>
                    </img>
                    <Checkbox blue onClick={context.state.handleCheck} checked={context.state.isAlist} />
                </Wrapper>
                <Wrapper>
                    <InputLabel>Variety Name: </InputLabel>
                    <$Input flex='1' maxW='200px' name="variety_name" placeholder="Leah's Awesome Blend" onChange={context.state.handleChange} value={context.state.variety_name.toUpperCase()} />
                    <InputLabel>Species Name: </InputLabel>
                    <Select id="species_name" flex='6' name="species_name" placeholder="Select a Species" onChange={context.state.handleChange} >
                        <option>--Select an Option--</option>
                        <option value="Turf Type Tall Fescue">Turf Type Tall Fescue</option>
                        <option value="Perennial Ryegrass">Perennial Ryegrass</option>
                        <option value="Annual Ryegrass">Annual Ryegrass</option>
                        <option value="Festulolium">Festulolium</option>
                    </Select>
                </Wrapper>

                <SectionHeader className='tolerance_table'> TOLERANCE TABLE </SectionHeader>
                {context.state.toleranceSelected ? <ToleranceTable>
                    {context.state.sliders.map(v => {
                        return (
                            <InputWrapper key={v}>
                                <InputLabel>{formatName(v)}</InputLabel>
                                <$Input type='range' name={v} value={context.state[v] || 1} min='1' max='9' step='1' onChange={context.state.handleChange} />
                                <Value value={context.state[v]}>{context.state[v]}</Value>
                            </InputWrapper>
                        )
                    })}
                </ToleranceTable>
                    : <ToleranceSelection/>
                }

                {context.state.error_message && <span style={{ width: '100%', textAlign: 'center', color: DLF_Pink, fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: '20px' }}>{context.state.error_message}</span>}

                <SectionHeader> CONTENT </SectionHeader>

                <InputLabel> Quick Facts: </InputLabel>
                <$TextArea name='quick_facts' onChange={context.state.handleChange} value={context.state.quick_facts} />

                <InputLabel> Adaptation: </InputLabel>
                <$TextArea name='adaptation' onChange={context.state.handleChange} value={context.state.adaptation} />

                <SectionHeader className='ntep_data_entry'>NTEP DATA ENTRY: </SectionHeader>

                <TableList></TableList>

                <SectionHeader className='bottom_info'>BOTTOM INFO: </SectionHeader>
                <Wrapper>
                    <$Label width="20%" center> Seeding Rate: </$Label>
                    <$Label width="20%" center> Establishment Rate: </$Label>
                    <$Label width="20%" center> Mowing Frequency: </$Label>
                    <$Label width="20%" center> Nitrogen Required: </$Label>
                    <$Label width="20%" center> Endophyte +: </$Label>
                </Wrapper>
                <Wrapper>
                    <BIinput name="seeding_rate" onChange={context.state.handleChange} value={context.state.seeding_rate}></BIinput>
                    <BIinput name="establishment_rate" onChange={context.state.handleChange} value={context.state.establishment_rate}></BIinput>
                    <BIinput name="mowing_frequency" onChange={context.state.handleChange} value={context.state.mowing_frequency}></BIinput>
                    <BIinput name="nitrogen_required" onChange={context.state.handleChange} value={context.state.nitrogen_required}></BIinput>
                    <BIinput name="endophyte_enhanced" onChange={context.state.handleChange} value={context.state.endophyte_enhanced}></BIinput>
                </Wrapper>

                <br />
                <br />

                <SubmitButton submit name='save_button'> Save </SubmitButton>
                <SubmitButton name='reset_button' onClick={context.state.reset}> Reset </SubmitButton>

            </$Form>
            )}
            </Context.Consumer>
        )
    }
}

