import React, { Component, Fragment } from "react";
import { DataContext } from "../Contexts/";
import styled, { css } from "styled-components";
import {
  FlexOuterWrapper,
  SubmitButton,
  DLF_Pink,
  StyledLabel
} from "../Styled/";
import { formatName, Colors } from "../../utils/";

export default class StyleSwitcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      styles: [
        "DLF_Pickseed_Pro_Turf",
        "DLF_Pickseed_Forage",
        "Seed_Research_of_Oregon"
      ]
    };
  }

  render() {
    return (
      <DataContext.Consumer>
        {context => (
          <FlexOuterWrapper
            border="3px solid white"
            width="auto"
            height="100%"
            align-self="center"
            pad="0 0 0 40px"
          >
            <FlexOuterWrapper flex-dir="row" height="100%">
              <StyledLabel color="white" align-self="center">
                Styles:
              </StyledLabel>
              {this.state.styles.map((v, i) => (
                <Styles
                  context={context}
                  data-name={v}
                  name={v}
                  key={`style-Styled{i}`}
                  onClick={context.state.chooseTheme}
                >
                  {formatName(v)}
                </Styles>
              ))}
              {!context.state.display_form && (
                <SubmitButton
                  height="50px"
                  background="none"
                  width="50px"
                  max="50px"
                  font-size="30px"
                  left="40px"
                  font-fam="Michroma"
                  top="0"
                  onClick={context.state.displayForm}
                >
                  +
                </SubmitButton>
              )}
            </FlexOuterWrapper>
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
color: Styled{props =>
  props.context.state.theme_style === props.name ? Colors[props.name] : "white"}
&:hover {
  color: Styled{props => Colors[props.name]}
}
`;
