import React, {Component} from 'react'
import {Input, Label, SectionHeader, Form, SubmitButton, TextArea} from './styled-components/styled-components'
import ToleranceTable from './tolerance_table'
import NTEPEntry from './ntep_entry'

class DataEntry extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Form>
                <SectionHeader className='header'> HEADER </SectionHeader>
                <Label>Variety Name: </Label>
                    <Input type='text' name="variety_name_input"/>
    
                <Label>Species Name: </Label>
                    <Input type='text' name= "variety_species_input" />
                
                <SectionHeader> TOLERANCE TABLE </SectionHeader>
                    <ToleranceTable/>
                <SectionHeader> CONTENT </SectionHeader>
    
                <Label> Quick Facts: </Label>
                    <TextArea name='quick_facts' />
    
                <Label> Adaptation: </Label>
                    <TextArea name='adaptation' />
    
                <Label>NTEP Data Entry: </Label>
                    <NTEPEntry/>
                   
    
                <SubmitButton name='save_button'> Save </SubmitButton>
                <SubmitButton reset='true' name='reset_button'> Reset </SubmitButton>
            </Form>
        )
    }
   
}

export default DataEntry