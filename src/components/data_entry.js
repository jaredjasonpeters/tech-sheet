import React, { Component } from 'react'
import { $Input, InputLabel, $Label, SectionHeader, $Form, SubmitButton, $TextArea } from './styled/styled'
import ToleranceTable from './tolerance_table'
import TableList from './TableList'


class DataEntry extends Component {
    constructor(props) {
        super(props)
    }

    createRow(e) {
        console.log(e)
    }

    render() {
        return (
            <$Form>
                <SectionHeader className='header'> HEADER </SectionHeader>
                <InputLabel>Variety Name: </InputLabel>
                <$Input name="variety_name_input" placeholder="Leah's Awesome Blend" />

                <InputLabel>Species Name: </InputLabel>
                <$Input name="variety_species_input" />

                <SectionHeader className='tolerance_table'> TOLERANCE TABLE </SectionHeader>
                <ToleranceTable />
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