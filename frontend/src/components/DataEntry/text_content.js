import React, { Fragment } from "react";
import {
  SectionHeader,
  InputLabel,
  StyledTextArea,
  StyledLabel
} from "../Styled/";
import { DataContext } from "../Contexts/";

const TextContent = props => (
  <DataContext.Consumer>
    {context => (
      <Fragment>
        <SectionHeader className="sh" theme={context.state.theme_style}>
          {" "}
          CONTENT{" "}
        </SectionHeader>

        <StyledLabel htmlFor="quick-facts"> Quick Facts: </StyledLabel>
        <StyledTextArea
          id="quick-facts"
          name="quick_facts"
          onChange={context.state.handleChange}
          value={context.state.quick_facts}
        />

        <StyledLabel htmlFor="quick-facts"> Adaptation: </StyledLabel>
        <StyledTextArea
          id="adaptation"
          name="adaptation"
          onChange={context.state.handleChange}
          value={context.state.adaptation}
        />
      </Fragment>
    )}
  </DataContext.Consumer>
);

export default TextContent;
