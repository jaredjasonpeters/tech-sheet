import React, { Component } from 'react'
import { $Input, InputLabel, $Label, SectionHeader, $Form, SubmitButton, $TextArea, Wrapper } from './styled/styled'
import ToleranceTable from './tolerance_table'
import TableList from './TableList'


class DataEntry extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tolerance: {
                turf_quality: 1,
                shade_tolerance: 1,
                cold_tolerance: 1,
                drought_tolerance: 1,
                traffic_tolerance: 1,},
        }
    }

    handleSlide(e) {

        var {name, value} = e.target
    
        this.setState((prevState) => {
             var newState = Object.assign(prevState.tolerance)
             newState[name] = value
             return newState
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
                    <InputLabel>Variety Name: </InputLabel>
                    <$Input flex='1' maxW='200px' name="variety_name_input" placeholder="Leah's Awesome Blend" />
                    <InputLabel>Species Name: </InputLabel>
                    <$Input flex='6' name="variety_species_input" />
                </Wrapper>

                <SectionHeader className='tolerance_table'> TOLERANCE TABLE </SectionHeader>
                <ToleranceTable handleSlide={this.handleSlide.bind(this)} data={this.state.tolerance} />
                <SectionHeader> CONTENT </SectionHeader>

                <InputLabel> Quick Facts: </InputLabel>
                <$TextArea name='quick_facts' />

                <InputLabel> Adaptation: </InputLabel>
                <$TextArea name='adaptation' />

                <SectionHeader className='ntep_data_entry'>NTEP DATA ENTRY: </SectionHeader>

                <TableList></TableList>



                <SubmitButton name='save_button'> Save </SubmitButton>
                <SubmitButton reset name='reset_button'> Reset </SubmitButton>

            </$Form>
        )
    }

}

export default DataEntry