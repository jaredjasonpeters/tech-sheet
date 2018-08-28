import React, { Component } from 'react'
import { $Input, InputLabel, $Label, SectionHeader, $Form, SubmitButton, $TextArea, Wrapper, Checkbox, BIinput, InputWrapper, Value, DLF_Pink, Select } from './styled/styled'
import ToleranceTable from './tolerance_table'
import TableList from './TableList'
import { formatName } from '../utils/utils'
import styled, { css } from 'styled-components'
import ToleranceSelection from './toleranceSelection.js'


export default class DataEntry extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isAlist: false,
            variety_name: '',
            species_name: '',
            sliders: [],
            tolerance: {
                turf_quality: null,
                shade_tolerance: null,
                cold_tolerance: null,
                drought_tolerance: null,
                traffic_tolerance: null,
            },
            quick_facts: '',
            adaptation: '',
            seeding_rate: '',
            establishment_rate: '',
            mowing_frequency: '',
            nitrogen_required: '',
            endophyte_enhanced: '',
            toleranceSelected: false,
            error_message: null,
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleSlide = this.handleSlide.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.reset = this.reset.bind(this)
        this.updateVariety = this.updateVariety.bind(this)
        this.updateSpecies = this.updateSpecies.bind(this)
    }

    handleSubmit(options, e) {
        var count = 0;
        var inputs = [];
        for (let option in options) {
            if (options[option] === true) {
                inputs.push(option)
                count++
            }
        }

        if (count >= 4) {
            this.setState({
                sliders: inputs,
                toleranceSelected: true,
                error_message: null,
            })
        } else {
            this.setState({
                error_message: '----You have to select at least (4) tolerance ratings----'
            })
        }

    }

    handleSlide(e) {

        var { name, value } = e.target

        this.setState((prevState) => {
            var newState = Object.assign(prevState)
            var tolerance = newState.tolerance
            tolerance[name] = value
            return newState
        })
    }

    handleCheck() {
        this.setState((prevState) => {
            var newState = Object.assign(prevState)
            var checked = newState.isAlist
            return {
                isAlist: !checked
            }
        })
    }

    reset(e) {
        e.preventDefault()

        this.setState({
            isAlist: false,
            variety_name: '',
            species_name: '',
            sliders: [],
            tolerance: {
                turf_quality: null,
                shade_tolerance: null,
                cold_tolerance: null,
                drought_tolerance: null,
                traffic_tolerance: null,
            },
            quick_facts: '',
            adaptation: '',
            seeding_rate: '',
            establishment_rate: '',
            mowing_frequency: '',
            nitrogen_required: '',
            endophyte_enhanced: '',
            toleranceSelected: false,
            error_message: null
        })
    }

    updateVariety(e) {
        var { name, value } = e.target
        this.setState({
            variety_name: value
        })

    }

    updateSpecies(e) {
        var { name, value } = e.target
        this.setState({
            species_name: value
        })

    }

    handleChange(e) {
        var { name, value } = e.target
        if (value === "--Select an Option--") return
        this.setState((prevState) => {
            var newState = Object.assign(prevState)
            newState[name] = value
            return newState
        })
    }

    render() {
        return (
            <$Form>
                <SectionHeader className='header'> HEADER </SectionHeader>
                <Wrapper>
                    <img src="http://a-listturf.org/wp-content/uploads/2016/12/ALIST-Logo-Small.png"
                        style={{
                            height: '70px',
                            width: '70px'
                        }}>
                    </img>
                    <Checkbox blue onClick={this.handleCheck.bind(this)} checked={this.state.isAlist} />
                </Wrapper>
                <Wrapper>
                    <InputLabel>Variety Name: </InputLabel>
                    <$Input flex='1' maxW='200px' name="variety_name" placeholder="Leah's Awesome Blend" onChange={this.updateVariety} value={this.state.variety_name.toUpperCase()} />
                    <InputLabel>Species Name: </InputLabel>
                    <Select id="species_name" flex='6' name="species_name" placeholder="Select a Species" onChange={this.handleChange} >
                        <option>--Select an Option--</option>
                        <option value="Turf Type Tall Fescue">Turf Type Tall Fescue</option>
                        <option value="Perennial Ryegrass">Perennial Ryegrass</option>
                        <option value="Annual Ryegrass">Annual Ryegrass</option>
                        <option value="Festulolium">Festulolium</option>
                    </Select>
                </Wrapper>

                <SectionHeader className='tolerance_table'> TOLERANCE TABLE </SectionHeader>
                {this.state.toleranceSelected ? <ToleranceTable>
                    {this.state.sliders.map(v => {
                        return (
                            <InputWrapper>
                                <InputLabel>{formatName(v)}</InputLabel>
                                <$Input type='range' name={v} value={this.state.tolerance[v]} min='1' max='9' step='1' onChange={this.handleSlide} />
                                <Value value={this.state.tolerance[v]}>{this.state.tolerance[v]}</Value>
                            </InputWrapper>
                        )
                    })}
                </ToleranceTable>
                    : <ToleranceSelection handleSubmit={this.handleSubmit} />
                }

                {this.state.error_message && <span style={{ width: '100%', textAlign: 'center', color: DLF_Pink, fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: '20px' }}>{this.state.error_message}</span>}

                <SectionHeader> CONTENT </SectionHeader>

                <InputLabel> Quick Facts: </InputLabel>
                <$TextArea name='quick_facts' onChange={this.handleChange} value={this.state.quick_facts} />

                <InputLabel> Adaptation: </InputLabel>
                <$TextArea name='adaptation' onChange={this.handleChange} value={this.state.adaptation} />

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
                    <BIinput name="seeding_rate" onChange={this.handleChange} value={this.state.seeding_rate}></BIinput>
                    <BIinput name="establishment_rate" onChange={this.handleChange} value={this.state.establishment_rate}></BIinput>
                    <BIinput name="mowing_frequency" onChange={this.handleChange} value={this.state.mowing_frequency}></BIinput>
                    <BIinput name="nitrogen_required" onChange={this.handleChange} value={this.state.nitrogen_required}></BIinput>
                    <BIinput name="endophyte_enhanced" onChange={this.handleChange} value={this.state.endophyte_enhanced}></BIinput>
                </Wrapper>

                <br />
                <br />

                <SubmitButton submit name='save_button'> Save </SubmitButton>
                <SubmitButton name='reset_button' onClick={this.reset}> Reset </SubmitButton>

            </$Form>
        )
    }
}

