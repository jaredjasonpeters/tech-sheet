import React, { Component, Fragment } from 'react'
import { Context } from './contexts/contexts'
import styled, { css } from 'styled-components'
import { Wrapper, SubmitButton } from './styled/styled'
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
        padding: '10px 0 0px 30px'
      }}>
        <Context.Consumer>
          {context => (
            <Wrapper>
              <Wrapper width="50%">
                {this.state.styles.map((v, i) => <Styles onMouseEnter={(e) => e.target.style.color = Colors[v]} onMouseLeave={(e) => e.target.style.color = 'black'} name={v} key={`style-${i}`} onClick={context.state.chooseTheme}>{formatName(v)}</Styles>)}
              </Wrapper>
              {!context.state.display_form &&
                <SubmitButton submit width="200px" max="200px" fSize="16px" left="20px" onClick={context.state.displayForm}>Create New Techsheet</SubmitButton>
              }
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
font-size: 15px;
padding: 10px;
align-self: flex-start;
cursor: pointer
transition: color 1s
`
