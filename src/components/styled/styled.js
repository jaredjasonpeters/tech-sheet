import styled, { css } from 'styled-components'

const DLF_Green = '#00a651'
const DLF_Pink = '#ce1141'
const ALIST_Blue = '#00aeef'

const SectionHeader = styled.div`
flex-grow: 1
align-self: center
width: 100%
height: 30px;
margin: 10px 0 10px 0
padding: 5px;
background-color: ${DLF_Green};
border-radius: 5px;


font-size: 20px;
font-weight: bold;
text-align: center;
color: white;
@import url('https://fonts.googleapis.com/css?family=Nunito:800');
font-family: 'Nunito', sans-serif;
`

const $Form = styled.div`
display: flex;
flex-direction: column
max-width: 800px;
margin: 50px auto 0px auto;
padding: 50px;
border: solid 3px black
`
const $Label = styled.label`
flex-grow: 1
width: ${props => props.width || '30px'}
max-width: ${props => props.width || '30px'}
align-self: flex-start;
margin: ${props => props.margin || '0px 25px 0px 10px'}

font-size: 13px;
font-weight: bold;
font-family: 'Nunito', sans-serif;
text-align: ${props => { if (props.center) return 'center' || 'left' }}

${props => props.checked && css`
color: ${DLF_Green}
`
    }
`
const $Input = styled.input.attrs({ type: 'text', })`
flex-grow: ${props => props.flex || 6};
margin: 10px 10px; 10px 10px;
height: 10px;
width: 95%;
max-width: ${props => props.maxW || '100%'}
border-radius: 5px;
padding: 5px;
`

const Select = styled.select`
flex-grow: ${props => props.flex || 6};
margin: 10px 10px; 10px 10px;
height: 30px;
width: 95%;
max-width: ${props => props.maxW || '100%'}
border-radius: 5px;
padding: 5px;

font-family: Nunito, sans-serif
`

const BIinput = styled.input.attrs({ type: 'text', })`
    flex-grow: 1
    width: 20%
    height: 20px
    margin: 5px
    border-radius: 5px
`

const Wrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: ${props => props.justify || 'flex-start'};
align-items: flex-start;
margin-bottom: 10px;
width: ${props => props.width || '100%'};
height: auto;
`
const NTEPVarietyInput = styled.input`
flex-grow: 2
height: 10px;
max-width: 100px;
border-radius: 5px;
`
const NTEPRatingInput = styled.input`
flex-grow: 1
height: 10px;
max-width: 30px;


border-radius: 5px;
`
const SubmitButton = styled.button`
flex-grow: 1;
width: ${props => props.width || '300px'};
max-width: ${props => props.max || '300px'};
align-self: center
margin: 20px 20px ${props => props.bottom || '0px'} 0 ;
height: ${props => props.height || '75px'};
border-radius: 5px;
background: ${props => (props.submit) ? DLF_Green : DLF_Pink};
border: none;


font-size: ${props => props.fSize || '18px'};
font-weight: bold;
text-align: center;
color: white;
`
const $TextArea = styled.textarea`
flex-grow: 1
margin: 20px auto 20px 10px;
height: 100px;
width: 100%;
border-radius: 5px;
font-size: 13px;
`

const Value = styled.h1`
flex-grow: 1;
width: 30px;
max-width: 30px;
align-self: flex-start;
margin-left: 50px;
border-radius: 5px;

@import url('https://fonts.googleapis.com/css?family=Nunito:800');
font-family: 'Nunito', sans-serif;
font-size: 15px;
color: white;
text-align: center;

${(props) => {
        var value = props.value;
        if (value >= 4 && value < 7) {
            return css`
        background-color: black;
        `
        }
        if (value >= 7) {
            return css`
      background-color: ${DLF_Green}
    `
        }
        else return css`
    background-color: ${DLF_Pink}
    `
    }}
`
const InputWrapper = styled.div`
display: flex;
flex-direction: row;
flex-flow: row;
align-content: space-between;
height: auto;
width: 100%

`
const InputLabel = styled.h2`
flex-grow: 1
align-self: flex-start;
margin-top: 0;
font-family: 'Nunito', sans-serif;
font-size: 13px;
text-align: left;
`
const AddTableButton = styled.button`
display: inline-block;
height: 30px;
width: 70px;
border-radius: 5px;
background: ${DLF_Green}
border: none;
margin-bottom: 0;


font-size: 25px;
font-weight: bold;
color: white;
`
const ResetButton = styled.button`
display: inline-block;
height: 30px;
width: 70px;
border-radius: 5px;
background: ${DLF_Pink}
border: none;
margin-bottom: 0;


font-size: 25px;
font-weight: bold;
color: white;
`

const Checkbox = styled.div`
    flex-grow: 1
    max-width: 10px
    width: 10px
    height: 10px
    border: 1px solid black
    border-radius: 90px
    margin: 4px 10px

    ${props => props.checked && css`
    background-color: ${(props.blue) ? ALIST_Blue : DLF_Green}
    max-width: 10px
    width:  10px
    height: 10px
    border: 1px solid black
    border-radius: 90px
    margin: 4px 10px
    `}
`

export {
    Wrapper,
    NTEPRatingInput,
    NTEPVarietyInput,
    InputWrapper,
    InputLabel,
    Value,
    $Input,
    $Form,
    $Label,
    SubmitButton,
    $TextArea,
    SectionHeader,
    AddTableButton,
    ResetButton,
    DLF_Green,
    DLF_Pink,
    ALIST_Blue,
    Checkbox,
    BIinput,
    Select
}