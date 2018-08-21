import React from 'react'
import styled, {css} from 'styled-components'
import ToleranceTable from './tolerance_table'

const DataEntry = (props) => {
    return (
        <Form>
            <SectionHeader> HEADER </SectionHeader>
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

            <Label>Variety Name: </Label>
            <Input type='text' data="variety_name"/>

            <SubmitButton name='save_button'> Save </SubmitButton>
            <SubmitButton reset='true' name='reset_button'> Reset </SubmitButton>
        </Form>
    )
}

const DLF_Green = '#00a651'
const DLF_Pink = '#ce1141'

const SectionHeader = styled.div`
width: 100%
height: 50px;
margin: 40px 0 40px 0
padding: 5px;
background-color: ${DLF_Green};
border-radius: 5px;


font-size: 40px;
font-weight: bold;
text-align: center;
color: white;
`


const Form = styled.form`
max-width: 800px;
margin: 50px auto 0px auto;
padding: 50px;
border: solid 3px black
`
const Label = styled.label`
display: block;
margin: 0px auto 0px 0px;
width: 200px;
font-size: 20px;
font-weight: bold;
text-align: left;
`
const Input = styled.input`
display: block;
margin: 20px auto 20px 10px;
height: 30px;
width: 50%;
border-radius: 5px;
`
const SubmitButton = styled.button`
display: inline-block;
margin: 20px auto 20px 10px;
height: 50px;
width: 150px
border-radius: 5px;
background: ${DLF_Green}
border: none;


font-size: 18px;
font-weight: bold;
color: white;

${props => props.reset && css`
    background: ${DLF_Pink};
    color: white;
`}
`
const TextArea = styled.textarea`
display: block;
margin: 20px auto 40px 10px;
height: 150px;
width: 500px;
border-radius: 5px;
`

export default DataEntry