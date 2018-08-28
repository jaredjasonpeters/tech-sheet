import React, { Component } from 'react'
import { $Input, InputLabel, $Label, SectionHeader, $Form, SubmitButton, $TextArea, Wrapper, Checkbox, BIinput } from './styled/styled'
import ToleranceTable from './tolerance_table'
import TableList from './TableList'
import styled, {css} from 'styled-components'
import ToleranceSelection from './toleranceSelection.js'


export default class DataEntry extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tables: [],            
            tolerance: {
                turf_quality: 1,
                shade_tolerance: 1,
                cold_tolerance: 1,
                drought_tolerance: 1,
                traffic_tolerance: 1,},
            isAlist: false,
            toleranceSelected: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(tables, e) {
        var count = 0;
        for(let table in tables) {
            if(tables[table]) {
                count++
            }
        }
        console.log(count)
        if(count >= 4) {
            this.setState({
                toleranceSelected : true
            })
        }
        console.log(this.state.toleranceSelected)
        //pass all selected to tolerance table to generate
        
        //set toleranceSelected to true

    }

    handleSlide(e) {

        var {name, value} = e.target
    
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

    createRow(e) {
        console.log(e)
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
                    <$Input flex='1' maxW='200px' name="variety_name_input" placeholder="Leah's Awesome Blend" />
                    <InputLabel>Species Name: </InputLabel>
                    <$Input flex='6' name="variety_species_input" />
                </Wrapper>

                <SectionHeader className='tolerance_table'> TOLERANCE TABLE </SectionHeader>
                    {this.state.toleranceSelected ? <ToleranceTable handleSlide={this.handleSlide.bind(this)} data={this.state.tolerance} />
                                                  : <ToleranceSelection handleSubmit={this.handleSubmit}/>
                    }

                <SectionHeader> CONTENT </SectionHeader>

                    <InputLabel> Quick Facts: </InputLabel>
                    <$TextArea name='quick_facts' />

                    <InputLabel> Adaptation: </InputLabel>
                    <$TextArea name='adaptation' />

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
                        <BIinput></BIinput>
                        <BIinput></BIinput>    
                        <BIinput></BIinput>    
                        <BIinput></BIinput>    
                        <BIinput></BIinput>                              
                    </Wrapper>

                         <br />
                         <br />

                    <SubmitButton submit name='save_button'> Save </SubmitButton>
                    <SubmitButton name='reset_button'> Reset </SubmitButton>

            </$Form>
        )
    }
}

