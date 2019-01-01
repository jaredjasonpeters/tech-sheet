import React, { Component } from "react";
import styled from 'styled-components'
import { StyledForm, SubmitButton, FlexOuterWrapper } from "../Styled/";
import { DataConsumer } from "../Providers/data_provider";
import ToleranceTable from "../DataEntry/Tolerance/tolerance_table";
import TextContent from "../DataEntry/text_content";
import NTEPDataEntry from "../DataEntry/NTEP/ntep_data_entry";
import BottomInfo from "../DataEntry/bottom_info";
import Identifiers from "../DataEntry/identifiers";
import ImageSelector from "../DataEntry/image_selector";

class DataEntryForm extends Component {

  render() {
    return (
      <DataConsumer>
        {({reset, saveForm}) => (
          <StyledForm opacity={100}>
            <CloseForm />
            <Identifiers />
            <ToleranceTable />
            <ImageSelector />
            <TextContent />
            <NTEPDataEntry />
            <BottomInfo />
            <FlexOuterWrapper flex-dir="row" justify="center">
              <SubmitButton
                submit
                name="save_button"
                onClick={saveForm}
              >
                {" "}
                Save{" "}
              </SubmitButton>
              <SubmitButton
                reset
                name="reset_button"
                onClick={reset}
              >
                {" "}
                Reset{" "}
              </SubmitButton>
            </FlexOuterWrapper>
          </StyledForm>
        )}
      </DataConsumer>
    );
  }
}

export default DataEntryForm;

const CloseBar = styled.div`
  width: 100%;
  color: #ce1141;
  font-size: 50px;
  cursor: pointer;
  text-align: center;
  background: white;
  opacity: 0;
  transition: font-size 200ms ease-in-out, opacity 400ms ease-in;
  &:hover {
    font-size: 60px;
  }
`;

class CloseForm extends Component {
  
  render() {
    return (
      <DataConsumer>
      {({closeDataEntry}) => (
        <CloseBar
        onClick={closeDataEntry}
        >
        X
        </CloseBar>
        )}
      </DataConsumer>
        )
        }
}