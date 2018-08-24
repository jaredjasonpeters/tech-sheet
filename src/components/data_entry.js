import React, {Component} from 'react'
import {$Input, $Label, SectionHeader, $Form, SubmitButton, $TextArea} from './styled/styled'
import ToleranceTable from './tolerance_table'
import TableList from './TableList'


class DataEntry extends Component {
    constructor(props) {
        super(props)
    }

    createRow(e){
        console.log(e)
     }

    render() {
        return (
            <$Form>
                <SectionHeader className='header'> HEADER </SectionHeader>
                <$Label>Variety Name: </$Label>
                    <$Input type='text' name="variety_name_input"/>
    
                <$Label>Species Name: </$Label>
                    <$Input type='text' name= "variety_species_input" />
                
                <SectionHeader className='tolerance_table'> TOLERANCE TABLE </SectionHeader>
                    <ToleranceTable/>
                <SectionHeader> CONTENT </SectionHeader>
    
                <$Label> Quick Facts: </$Label>
                    <$TextArea name='quick_facts' />
    
                <$Label> Adaptation: </$Label>
                    <$TextArea name='adaptation' />
    
                <SectionHeader className='ntep_data_entry'>NTEP DATA ENTRY: </SectionHeader>

                <TableList></TableList>
              
                   
    
                <SubmitButton name='save_button'> Save </SubmitButton>
                <SubmitButton reset='true' name='reset_button'> Reset </SubmitButton>
            </$Form>
        )
    }
   
}

export default DataEntry