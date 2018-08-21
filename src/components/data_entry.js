import React from 'react'
import styled from 'styled-components'

const DataEntry = (props) => {
    return (
        <Form>
            <h1> Header </h1>
            <Label>Variety Name: </Label>
            <Input type='text' data="variety_name"/>

            <Label>Species Name: </Label>
            <Input type='text' data="variety_species"/>
            <br />

            <h1> Content </h1>

            <Label> Quick Facts: </Label>
            <TextArea name='quick_facts' />

            <Label>Variety Name: </Label>
            <Input type='text' data="variety_name"/>

            <Label>Variety Name: </Label>
            <Input type='text' data="variety_name"/>
        </Form>
    )
}

const Form = styled.form`
width: 800px;
margin: 50px auto 0px auto;
padding: 50px;
border: solid 3px black
`
const Label = styled.label`
display: block;
margin: 0px auto 0px 0px;
width: 200px;
font-size: 20px;
text-align: left;

`
const Input = styled.input`
display: block;
margin: 20px auto 40px 10px;
height: 30px;
width: 50%
border-radius: 5px;
`
const TextArea = styled.textarea`
display: block;
margin: 20px auto 40px 10px;
height: 150px;
width: 500px;
border-radius: 5px;
`

export default DataEntry