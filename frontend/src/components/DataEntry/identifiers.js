import React from "react";
import { DataContext } from "../Contexts/";
import {
  SectionHeader,
  Checkbox,
  InputLabel,
  StyledInput,
  Select,
  FlexOuterWrapper
} from "../Styled/";

const Identifiers = props => (
  <DataContext.Consumer>
    {context => (
      <>
        <SectionHeader theme={context.state.theme_style} className="sh header">
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
              onClick={context.state.handleCheck}
              checked={context.state.isAlist}
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
              onChange={context.state.handleChange}
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
              onChange={context.state.handleChange}
              value={context.state.variety_name}
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
              onChange={context.state.handleChange}
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
  </DataContext.Consumer>
);

export default Identifiers;
