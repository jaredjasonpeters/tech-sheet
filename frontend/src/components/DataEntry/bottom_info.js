import React, { Component, Fragment } from "react";
import { DataContext } from "../Contexts/";
import {
  Wrapper,
  $Label,
  $Input,
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
              <$Label center> Seeding Rate: </$Label>
              <$Input
                name="seeding_rate"
                onChange={context.state.handleChange}
                value={context.state.seeding_rate}
                height="auto"
              />
            </FlexOuterWrapper>
            <FlexOuterWrapper width="auto">
              <$Label center> Establishment Rate: </$Label>
              <$Input
                name="establishment_rate"
                onChange={context.state.handleChange}
                value={context.state.establishment_rate}
                height="auto"
              />
            </FlexOuterWrapper>
            <FlexOuterWrapper width="auto">
              <$Label center> Mowing Frequency: </$Label>
              <$Input
                name="mowing_frequency"
                onChange={context.state.handleChange}
                value={context.state.mowing_frequency}
                height="auto"
              />
            </FlexOuterWrapper>
            <FlexOuterWrapper width="auto">
              <$Label center> Nitrogen Required: </$Label>
              <$Input
                name="nitrogen_required"
                onChange={context.state.handleChange}
                value={context.state.nitrogen_required}
                height="auto"
              />
            </FlexOuterWrapper>
            <FlexOuterWrapper width="auto">
              <$Label center> Endophyte +: </$Label>
              <$Input
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
