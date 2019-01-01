import React from "react";
import { DataConsumer } from "../Providers/data_provider";
import {
  SectionHeader,
  Checkbox,
  InputLabel,
  StyledInput,
  Select,
  FlexOuterWrapper
} from "../Styled/";

const Identifiers = () => (
  <DataConsumer>
    {({theme_style, handleCheck, isAlist, handleChange, variety_name}) => (
      <>
        <SectionHeader theme={theme_style} className="sh header">
          {" "}
          IDENTIFIERS{" "}
        </SectionHeader>
        <FlexOuterWrapper>
          <FlexOuterWrapper
            flex-dir="row"
            justify="center"
            align-items="center"
          >
            <Checkbox
              blue
              border-rad="none"
              onClick={ handleCheck}
              checked={ isAlist}
            />
            <img
              src="http://a-listturf.org/wp-content/uploads/2016/12/ALIST-Logo-Small.png"
              style={{
                height: "70px",
                width: "70px",
                minWidth: "70px"
              }}
            />
          </FlexOuterWrapper>

          <FlexOuterWrapper>
            <InputLabel>Variety/Blend/Mixture: </InputLabel>
            <Select
              id="species_name"
              flex="6"
              name="variety_blend_mixture"
              onChange={ handleChange}
            >
              <option>--Select</option>
              <option value="Variety">Variety</option>
              <option value="Blend">Blend</option>
              <option value="Mixture">Mixture</option>
            </Select>
          </FlexOuterWrapper>

          <FlexOuterWrapper>
            <InputLabel>Variety Name: </InputLabel>
            <StyledInput
              height="auto"
              name="variety_name"
              placeholder="Leah's Awesome Blend"
              onChange={ handleChange}
              value={ variety_name}
              font-family="Nunito"
              font-weight="800"
            />
          </FlexOuterWrapper>

          <FlexOuterWrapper>
            <InputLabel>Species Name: </InputLabel>
            <Select
              id="species_name"
              flex="6"
              name="species_name"
              placeholder="Select a Species"
              onChange={ handleChange}
            >
              <option>--Select</option>
              <option value="Turf Type Tall Fescue">
                Turf Type Tall Fescue
              </option>
              <option value="Perennial Ryegrass">Perennial Ryegrass</option>
              <option value="Annual Ryegrass">Annual Ryegrass</option>
              <option value="Festulolium">Festulolium</option>
            </Select>
          </FlexOuterWrapper>
        </FlexOuterWrapper>
      </>
    )}
  </DataConsumer>
);

export default Identifiers;
