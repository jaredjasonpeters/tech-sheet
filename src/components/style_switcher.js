import React, { Component, Fragment } from 'react'
import { Context } from './contexts/contexts'
import styled, { css } from 'styled-components'
import { Wrapper, SubmitButton, DLF_Pink, $Label } from './styled/styled'
import DataEntryForm from './data_entry_form'
import { formatName, Colors } from '../utils/utils'


export default class StyleSwitcher extends Component {
  constructor(props) {
    super(props)
    this.state = {
      styles: [
        'DLF_Pickseed_Pro_Turf',
        'DLF_Pickseed_Forage',
        'Seed_Research_of_Oregon'
      ],
    }
  }

  render() {
    return (
      <div style={{
        flexGrow: 7,
        width: '30%',
        alignSelf: 'flex-start',
        padding: '10px 0 0px 30px',
        background: 'none'
        
      }}>
        <Context.Consumer>
          {context => (
            <Wrapper bg-color="whitesmoke" pad="0 0 0 20px">
              <Wrapper width="50%">
                <$Label>Styles:</$Label>
                {this.state.styles.map((v, i) => <Styles Context={context} name={v} key={`style-${i}`} onClick={context.state.chooseTheme}>{formatName(v)}</Styles>)}
              </Wrapper>
              {!context.state.display_form &&
                <SubmitButton submit width="150px" max="150px" fSize="16px" left="40px" height="60px" top="0" onClick={context.state.displayForm}>Create New Techsheet</SubmitButton>
              }
              {<Error>{!context.state.display_form && context.state.error_message}</Error>}
            </Wrapper>
          )}
        </Context.Consumer>
      </div>
    );
  }
}

const Styles = styled.h3`
font-family: Nunito, sans-serif;
flex-grow: 1;
width: 210px;
max-width: 12ch;
line-height: 1.2em;
font-size: 14px;
padding: 10px;
text-align: center;
align-self: flex-start;
cursor: pointer
transition: color 1s
&:hover {
  color: ${props => Colors[props.name]}
}
`

const Error = styled.h4`
color: ${DLF_Pink};
`
