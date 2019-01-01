import React, { Component } from "react";
import { DataConsumer } from "../../Providers/data_provider";
import {
  SectionHeader,
  InputWrapper,
  InputLabel,
  StyledInput,
  Value,
  DLF_Pink
} from "../../Styled/";
import { formatName, errors } from "../../../utils";
import ToleranceSelection from "../Tolerance/tolerance_selection";

const ToleranceTable = () => (
  <DataConsumer>
    {({toleranceSelected, sliders, theme_style, handleChange,error_message }) => (
      <>
        <SectionHeader
          theme={theme_style}
          className="sh tolerance_table"
        >
          {" "}
          TOLERANCE TABLE{" "}
        </SectionHeader>
        {toleranceSelected ? (
          sliders.map(v => (
            <InputWrapper key={v}>
              <InputLabel>{formatName(v)}</InputLabel>
              <StyledInput
                type="range"
                name={v}
                value={sliders[v] || 1}
                min="1"
                max="9"
                step="1"
                onChange={handleChange}
              />
              <Value value={sliders[v]}>{sliders[v]}</Value>
            </InputWrapper>
          ))
        ) : (
          <ToleranceSelection />
        )}
        {error_message === errors.tolerance_not_selected && (
          <span
            style={{
              width: "100%",
              textAlign: "center",
              color: DLF_Pink,
              fontFamily: "Nunito, sans-serif",
              fontWeight: 800,
              fontSize: "20px"
            }}
          >
            {error_message}
          </span>
        )}
      </>
    )}
  </DataConsumer>
);

export default ToleranceTable;
