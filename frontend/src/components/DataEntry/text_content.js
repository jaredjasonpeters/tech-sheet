import React, { Fragment } from "react";
import { SectionHeader, InputLabel, $TextArea, $Label } from "../Styled/";
import { DataContext } from "../Contexts/";

const TextContent = props => (
  <DataContext.Consumer>
    {context => (
      <Fragment>
        <SectionHeader className="sh" theme={context.state.theme_style}>
          {" "}
          CONTENT{" "}
        </SectionHeader>

        <$Label htmlFor="quick-facts"> Quick Facts: </$Label>
        <$TextArea
          id="quick-facts"
          name="quick_facts"
          onChange={context.state.handleChange}
          value={context.state.quick_facts}
        />

        <$Label htmlFor="quick-facts"> Adaptation: </$Label>
        <$TextArea
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
