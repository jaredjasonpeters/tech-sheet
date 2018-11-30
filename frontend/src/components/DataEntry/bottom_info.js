import React, { Component, Fragment } from "react";
import { DataContext } from "../Contexts/";
import {
  Wrapper,
  StyledLabel,
  StyledInput,
  SectionHeader,
  FlexOuterWrapper
} from "../Styled/";

const BottomInfo = props => {
  return (
    <DataContext.Consumer>
      {context => (
        <Fragment>
          <SectionHeader
            theme={context.state.theme_style}
            className="sh bottom_info"
          >
            BOTTOM INFO:{" "}
          </SectionHeader>
          <FlexOuterWrapper>
            <FlexOuterWrapper width="auto">
              <StyledLabel center> Seeding Rate: </StyledLabel>
              <StyledInput
                name="seeding_rate"
                onChange={context.state.handleChange}
                value={context.state.seeding_rate}
                height="auto"
              />
            </FlexOuterWrapper>
            <FlexOuterWrapper width="auto">
              <StyledLabel center> Establishment Rate: </StyledLabel>
              <StyledInput
                name="establishment_rate"
                onChange={context.state.handleChange}
                value={context.state.establishment_rate}
                height="auto"
              />
            </FlexOuterWrapper>
            <FlexOuterWrapper width="auto">
              <StyledLabel center> Mowing Frequency: </StyledLabel>
              <StyledInput
                name="mowing_frequency"
                onChange={context.state.handleChange}
                value={context.state.mowing_frequency}
                height="auto"
              />
            </FlexOuterWrapper>
            <FlexOuterWrapper width="auto">
              <StyledLabel center> Nitrogen Required: </StyledLabel>
              <StyledInput
                name="nitrogen_required"
                onChange={context.state.handleChange}
                value={context.state.nitrogen_required}
                height="auto"
              />
            </FlexOuterWrapper>
            <FlexOuterWrapper width="auto">
              <StyledLabel center> Endophyte +: </StyledLabel>
              <StyledInput
                name="endophyte_enhanced"
                onChange={context.state.handleChange}
                value={context.state.endophyte_enhanced}
                height="auto"
              />
            </FlexOuterWrapper>
          </FlexOuterWrapper>
        </Fragment>
      )}
    </DataContext.Consumer>
  );
};

export default BottomInfo;
