import React, { Component, Fragment } from "react";
import { DataConsumer } from "../Providers/data_provider";
import {
  StyledLabel,
  StyledInput,
  SectionHeader,
  FlexOuterWrapper
} from "../Styled/";

const BottomInfo = props => {
  return (
    <DataConsumer>
      {({ theme_style,
          handleChange,
          mowing_frequency,
          nitrogen_required,
          endophyte_enhanced,
          seeding_rate,
          establishment_rate 
        }) => (
        <>
          <SectionHeader
            theme={theme_style}
            className="sh bottom_info"
          >
            BOTTOM INFO:{" "}
          </SectionHeader>
          <FlexOuterWrapper>
            <FlexOuterWrapper width="auto">
              <StyledLabel center> Seeding Rate: </StyledLabel>
              <StyledInput
                name="seeding_rate"
                onChange={handleChange}
                value={seeding_rate}
                height="auto"
              />
            </FlexOuterWrapper>
            <FlexOuterWrapper width="auto">
              <StyledLabel center> Establishment Rate: </StyledLabel>
              <StyledInput
                name="establishment_rate"
                onChange={handleChange}
                value={establishment_rate}
                height="auto"
              />
            </FlexOuterWrapper>
            <FlexOuterWrapper width="auto">
              <StyledLabel center> Mowing Frequency: </StyledLabel>
              <StyledInput
                name="mowing_frequency"
                onChange={handleChange}
                value={mowing_frequency}
                height="auto"
              />
            </FlexOuterWrapper>
            <FlexOuterWrapper width="auto">
              <StyledLabel center> Nitrogen Required: </StyledLabel>
              <StyledInput
                name="nitrogen_required"
                onChange={handleChange}
                value={nitrogen_required}
                height="auto"
              />
            </FlexOuterWrapper>
            <FlexOuterWrapper width="auto">
              <StyledLabel center> Endophyte +: </StyledLabel>
              <StyledInput
                name="endophyte_enhanced"
                onChange={handleChange}
                value={endophyte_enhanced}
                height="auto"
              />
            </FlexOuterWrapper>
          </FlexOuterWrapper>
        </>
      )}
    </DataConsumer>
  );
};

export default BottomInfo;
