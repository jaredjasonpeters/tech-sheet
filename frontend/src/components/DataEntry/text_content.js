import React from "react";
import {
  SectionHeader,
  InputLabel,
  StyledTextArea,
  StyledLabel
} from "../Styled/";
import { DataConsumer } from "../Providers/data_provider";

const TextContent = (props) => (
  <DataConsumer>
    {({theme_style, handleChange, quick_facts, adaptation, }) => (
      <>
        <SectionHeader className="sh" theme={theme_style}>
          {" "}
          CONTENT{" "}
        </SectionHeader>

        <StyledLabel htmlFor="quick-facts"> Quick Facts: </StyledLabel>
        <StyledTextArea
          id="quick-facts"
          name="quick_facts"
          onChange={  handleChange}
          value={  quick_facts}
        />

        <StyledLabel htmlFor="quick-facts"> Adaptation: </StyledLabel>
        <StyledTextArea
          id="adaptation"
          name="adaptation"
          onChange={  handleChange}
          value={  adaptation}
        />
      </>
    )}
  </DataConsumer>
);

export default TextContent;
