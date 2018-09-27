import styled, { css } from 'styled-components'
import { Colors } from '../../utils/utils'

const DLF_Green = '#00a651',
    DLF_ProTurf = '#80bc00',
    DLF_Pink = '#ce1141',
    ALIST_Blue = '#00aeef'

const SectionHeader = styled.div`
flex-grow: 1
align-self: center
width: 100%
height: 30px;
margin: 10px 0 10px 0
padding: 5px;
background: ${props => Colors[props.theme] || 'black'};
border-radius: 5px;


font-size: 1em;
font-weight: bold;
text-align: center;
color: white;
font-family: 'Michroma', sans-serif;
letter-spacing: 4px;
`

const $Form = styled.div`
display: flex;
flex-direction: ${props => props['flex-dir'] || 'column'}
width: 50%;
max-width: 800px;
margin: 50px auto 0px auto;
padding: 50px;
border: solid 3px white;
border-radius: 15px
opacity: 0;
box-shadow: 15px 15px 5px 2px rgba(0, 0, 0, .2);
transition: opacity 2s
background: rgb(240, 240, 240)

`
const $Label = styled.label`
flex-grow: 1
width: ${props => props.width || 'auto'}
height: ${props => props.height || 'auto'}
max-width: ${props => props.width || 'auto'}
align-self: ${props => props['align-self'] || 'flex-start'};
margin: ${props => props.margin || '0px 25px 0px 10px'}

font-size: ${props => props['font-size'] || '13px'};
font-weight: bold;
font-family: 'Nunito', sans-serif;
text-align: ${props => props.center || 'left'}
color: ${props => props.color || 'black'}


${props => props.checked && css`
color: ${DLF_Green}
`
    }
`
const $Input = styled.input.attrs({ type: 'text', })`
flex-grow: ${props => props.flex || '6'};
margin: ${props => props.margin || '10px 10px 10px 10px'};
height: ${props => props.height || '10px'};
max-width: ${props => props.maxW};
width: ${props => props.width};
border-radius: ${props => props['border-rad'] || '0px'};
padding: ${props => props.pad || '5px'};
font-family: ${props => props['font-family'] || 'sans-serif'}
font-weight: ${props => props['font-weight'] || '400'}
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
flex-direction: ${props => props.column || 'row'};
justify-content: ${props => props.justify || 'flex-start'};
flex-wrap: ${props => props.wrap || 'wrap'}
align-items: flex-start;
margin: ${props => props.margin || '0 0 10px 0'};
width: ${props => props.width || '100%'};
height: ${props => props.height || 'auto'};
background: ${props => props['bg-color'] || 'none'}
padding: ${props => props.pad || '0px'}
border-radius: ${props => props.br || '0px'}


${props => props.media && `
    @media (max-width: 425px) {
        flex-direction: column;
        & > div {
            width: 100%;
            text-align: center;
        }
    }
`
    }
`

const FlexOuterWrapper = styled.div`
display: flex;
align-self: ${props => props['align-self'] || 'center'}
flex-direction: ${props => props['flex-dir'] || 'row'};
justify-content: ${props => props.justify || 'flex-start'};
flex-wrap: ${props => props.wrap || 'wrap'}
align-items: ${props => props['align-items'] || 'flex-start'};
margin: ${props => props.margin || '0 0 0 0'};
width: ${props => props.width || '100%'};
height: ${props => props.height || 'auto'};
background: ${props => props['bg-color'] || 'none'}
padding: ${props => props.pad || '0px'}
border-radius: ${props => props.br || '0px'}
border: ${props => props.border || 'none'}
transition: background 1000ms;

${props => props.center && `
 text-align: center
`}

${props => props.media && `
    @media (max-width: 425px) {
        flex-direction: column;
        & > div {
            width: 100%;
            text-align: center;
        }
    }
`
    }
`

const FlexInnerWrapper = styled.div`
display: flex;
flex-direction: ${props => props['flex-dir'] || 'column'}
flex-grow: ${props => props.fg || '1'}
justify-content: ${props => props.justify || 'center'}
width: ${props => props.width || '100%'};
height: ${props => props.height || 'auto'};
background: ${props => props['bg-color'] || 'none'}
padding: ${props => props.pad || '0px'}
border-radius: ${props => props.br || '0px'}
border: ${props => props.border || 'none'}
align-items: space-between;
align-self: ${props => props['align-self'] || 'flex-start'}
margin: ${props => props.margin || '0 0 0 0'}

${props => props.center && `
 text-align: center
`}


${props => props.media && `
    @media (max-width: 425px) {
        flex-direction: column;
        & > div {
            width: 100%;
            text-align: center;
        }
    }
`
    }
`

const SubmitButton = styled.button`
flex-grow: 1;
width: ${props => props.width || '75px'};
max-width: ${props => props.max || '300px'};
align-self: center
margin: ${props => props.top || '20px'} ${props => props.right || '20px'} ${props => props.bottom || '5px'} ${props => props.left || '5px'};
height: ${ props => props.height || '75px'};
border-radius: 90px;
background: ${ props => props.background || 'DLF_Pink'};
border: 3px solid white;


font-size: ${ props => props['font-size'] || '18px'};
font-family: ${props => props['font-fam'] || 'sans-serif'}
letter-spacing: ${props => props['letter-spac'] || '0px'}
font-weight: bold;
text-align: center;
color: white;

${props => props.submit && `
    background: ${DLF_Green}
`}

${props => props.reset && `
    background: ${DLF_Pink}
`}
`
const $TextArea = styled.textarea`
flex-grow: 1
margin: 20px auto 20px 10px;
height: 100px;
width: 100%;
border-radius: 5px;
font-size: 13px;
resize: none;
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

${
    (props) => {
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
    }
    }
`
const InputWrapper = styled.div`
display: flex;
flex-direction: row;
flex-flow: row;
align-content: space-between;
height: auto;
width: 100 %

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
background: ${ DLF_Green}
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
background: ${ DLF_Pink}
border: none;
margin-bottom: 0;
margin-left: 5px;


font-size: 25px;
font-weight: bold;
color: white;
`

const Checkbox = styled.div`
flex-grow: 1
min-width: ${props => props['min-width'] || '10px'}
max-width: 30px
width: ${props => props.width || '10px'}
height: ${props => props.height || '10px'}
border: 1px solid black
border-radius: ${props => props['border-rad'] || '90px'}
margin: 4px 10px
background: ${props => props.selected ? DLF_Green : 'white'}
transition: background 500ms ease-ease

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
    FlexOuterWrapper,
    FlexInnerWrapper,
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
    DLF_ProTurf,
    DLF_Pink,
    ALIST_Blue,
    Checkbox,
    BIinput,
    Select
}