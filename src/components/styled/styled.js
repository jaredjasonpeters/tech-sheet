import styled, {css} from 'styled-components'

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
@import url('https://fonts.googleapis.com/css?family=Nunito:800');
font-family: 'Nunito', sans-serif;
`

const $Form = styled.form`
max-width: 800px;
margin: 50px auto 0px auto;
padding: 50px;
border: solid 3px black
`
const $Label = styled.label`
flex-grow: 1
align-self: flex-start;
margin: 0px auto 0px 0px;

font-size: 20px;
font-weight: bold;
font-family: 'Nunito', sans-serif;
`
const $Input = styled.input`
display: block;
margin: 20px auto 20px 10px;
height: 30px;
width: 50%;
border-radius: 5px;
`
const NTEPWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start
align-items: flex-start;
margin-bottom: 20px;
width: 100%;
height: auto;
`
const NTEPVarietyInput = styled.input`
flex-grow: 9
height: 30px;
margin: 0 30px 0 10px;
border-radius: 5px;
`
const NTEPRatingInput = styled.input`
flex-grow: 1
height: 30px;
max-width: 100px;
margin: 0 10px 0 10px;
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
const $TextArea = styled.textarea`
display: block;
margin: 20px auto 40px 10px;
height: 150px;
width: 500px;
border-radius: 5px;
`

const Value = styled.h1`
flex-grow: .5;
align-self: flex-start;
margin-left: 50px;
border-radius: 5px;

@import url('https://fonts.googleapis.com/css?family=Nunito:800');
font-family: 'Nunito', sans-serif;
font-size: 25px;
color: white;
text-align: center;

${(props) => {
    var value = props.value;
    if(value >= 4 && value < 7) {
        return css`
        background-color: black;
        `
    }
    if(value >= 7) {
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
font-family: 'Nunito', sans-serif;
font-size: 20px;
text-align: left;
`
const AddTableButton = styled.button`
display: inline-block;
margin: 20px auto 20px 10px;
height: 50px;
width: 100px
border-radius: 5px;
background: ${DLF_Green}
border: none;


font-size: 30px;
font-weight: bold;
color: white;
`

export {
    NTEPWrapper,
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
    DLF_Green,
    DLF_Pink
}