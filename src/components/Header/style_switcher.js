import React, { Component, Fragment } from 'react'
import { DataContext } from '../Contexts/contexts'
import styled, { css } from 'styled-components'
import { FlexOuterWrapper, FlexInnerWrapper, SubmitButton, DLF_Pink, $Label } from '../Styled/styled'
import { formatName, Colors } from '../../utils/utils'


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

      <DataContext.Consumer>
        {context => (
          <FlexOuterWrapper border="3px solid white" width="auto" height="100%" align-self="center" pad="0 0 0 40px">
            <FlexInnerWrapper flex-dir="row" height="100%">
              <$Label color="white" align-self="center">Styles:</$Label>
              {this.state.styles.map(
                (v, i) => <Styles
                  context={context}
                  data-name={v}
                  name={v}
                  key={`style-${i}`}
                  onClick={context.state.chooseTheme}>{formatName(v)}
                </Styles>)}
              {!context.state.display_form &&
                <SubmitButton
                  height="50px"
                  background="none"
                  width="50px"
                  max="50px"
                  font-size="30px"
                  left="40px"
                  font-fam="Michroma"
                  top="0"
                  onClick={context.state.displayForm}>+
                </SubmitButton>
              }
            </FlexInnerWrapper>
          </FlexOuterWrapper>
        )}
      </DataContext.Consumer>
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
align-self: center;
cursor: pointer
transition: color 1s
color: ${props => (props.context.state.theme_style === props.name) ? Colors[props.name] : 'white'}
&:hover {
  color: ${props => Colors[props.name]}
}
`


