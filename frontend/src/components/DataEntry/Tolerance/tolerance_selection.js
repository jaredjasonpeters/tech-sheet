import React, { Component, Fragment } from "react";
import { DataContext } from "../../Contexts/";
import {
  StyledLabel,
  Wrapper,
  SubmitButton,
  ResetButton,
  Checkbox,
  DLF_Green
} from "../../Styled/";
import styled from "styled-components";

export default class ToleranceSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      turf_quality: false,
      salinity_tolerance: false,
      shade_tolerance: false,
      cold_tolerance: false,
      drought_tolerance: false,
      wear_tolerance: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    var name = e.target.getAttribute("name");
    var key = name;
    this.setState(prevState => {
      var newState = Object.assign(prevState);
      newState[key] = !prevState[key];
      return newState;
    });
  }

  handleReset(e) {
    this.setState({
      turf_quality: false,
      salinity_tolerance: false,
      shade_tolerance: false,
      cold_tolerance: false,
      drought_tolerance: false,
      wear_tolerance: false
    });
  }

  render() {
    return (
      <DataContext.Consumer>
        {context => (
          <>
            <Wrapper media="true">
              <SelectionContainer>
                <StyledLabel margin="0" height="50px">
                  {" "}
                  Turf Quality{" "}
                </StyledLabel>
                <Checkbox
                  checked={this.state.turf_quality}
                  name="turf_quality"
                  onClick={this.handleClick}
                />
              </SelectionContainer>
              <SelectionContainer>
                <StyledLabel margin="0" height="50px">
                  {" "}
                  Salinity Tolerance{" "}
                </StyledLabel>
                <Checkbox
                  checked={this.state.salinity_tolerance}
                  name="salinity_tolerance"
                  onClick={this.handleClick}
                />
              </SelectionContainer>
              <SelectionContainer>
                <StyledLabel margin="0" height="50px">
                  {" "}
                  Shade Tolerance{" "}
                </StyledLabel>
                <Checkbox
                  checked={this.state.shade_tolerance}
                  name="shade_tolerance"
                  onClick={this.handleClick}
                />
              </SelectionContainer>
              <SelectionContainer>
                <StyledLabel margin="0" height="50px">
                  {" "}
                  Drought Tolerance{" "}
                </StyledLabel>
                <Checkbox
                  checked={this.state.cold_tolerance}
                  name="cold_tolerance"
                  onClick={this.handleClick}
                />
              </SelectionContainer>
              <SelectionContainer>
                <StyledLabel margin="0" height="50px">
                  {" "}
                  Cold Tolerance{" "}
                </StyledLabel>
                <Checkbox
                  checked={this.state.drought_tolerance}
                  name="drought_tolerance"
                  onClick={this.handleClick}
                />
              </SelectionContainer>
              <SelectionContainer>
                <StyledLabel margin="0" height="50px">
                  {" "}
                  Wear Tolerance{" "}
                </StyledLabel>
                <Checkbox
                  checked={this.state.wear_tolerance}
                  name="wear_tolerance"
                  onClick={this.handleClick}
                />
              </SelectionContainer>
            </Wrapper>
            <Wrapper justify="center">
              <SubmitButton
                submit
                height="30px"
                width="auto"
                bottom="20px"
                fSize="14px"
                onClick={context.state.handleSubmit.bind(this, this.state)}
              >
                Populate Tables
              </SubmitButton>
              <SubmitButton
                reset
                height="30px"
                width="auto"
                bottom="20px"
                fSize="14px"
                onClick={this.handleReset}
              >
                Clear Selection
              </SubmitButton>
            </Wrapper>
          </>
        )}
      </DataContext.Consumer>
    );
  }
}

const SelectionContainer = styled.div`
  flex-grow: 1;
  width: 15%;
`;
