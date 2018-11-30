import React, { Component } from "react";
import { Context } from "../../Contexts/";
import {
  FlexOuterWrapper,
  StyledInput,
  NTEPVarietyInput,
  StyledLabel,
  NTEPRatingInput,
  Wrapper,
  DLF_Green,
  Checkbox
} from "../../Styled/";
import styled, { css } from "styled-components";

const NTEProw = props => (
  <FlexOuterWrapper
    bg-color={props.tableConfirmed ? DLF_Green : "#e0e0e0"}
    pad="3px"
    br="15px"
    width="100%"
  >
    {!props.lsd && (
      <Checkbox
        onClick={props.handleCheck}
        checked={props.checked}
        data-row={props.name}
        data-table={props["data-table"]}
        width="10%"
      />
    )}
    <FlexOuterWrapper width="35%">
      <StyledLabel margin="0">{props.lsd || "Variety Name:"}</StyledLabel>

      {!props.lsd && (
        <StyledInput
          type="text"
          name="variety_name"
          onChange={props.handleInput}
          value={props["data-row"]["variety_name"].value || ""}
          data-row={props.name}
          data-table={props["data-table"]}
        />
      )}
    </FlexOuterWrapper>
    <FlexOuterWrapper width="35%">
      <StyledLabel margin="0">Variety Rating:</StyledLabel>
      <StyledInput
        type="text"
        placeholder="Ex. 4.6"
        name="ntep_rating"
        onChange={props.handleInput}
        value={props["data-row"]["ntep_rating"].value || ""}
        data-row={props.name}
        data-table={props["data-table"]}
      />
    </FlexOuterWrapper>
  </FlexOuterWrapper>
);

export default NTEProw;
