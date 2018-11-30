import React, { Component } from "react";
import { StyledForm, SubmitButton, FlexOuterWrapper } from "../Styled/";
import { DataContext } from "../Contexts/";
import ToleranceTable from "../DataEntry/Tolerance/tolerance_table";
import TextContent from "../DataEntry/text_content";
import NTEPDataEntry from "../DataEntry/NTEP/ntep_data_entry";
import BottomInfo from "../DataEntry/bottom_info";
import Identifiers from "../DataEntry/identifiers";
import ImageSelector from "../DataEntry/image_selector";

class DataEntryForm extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var form = document.getElementById("data-entry-form");
    setTimeout(() => {
      form.style.opacity = 1;
    }, 1000);
  }

  render() {
    return (
      <DataContext.Consumer>
        {context => (
          <StyledForm id="data-entry-form">
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
                onClick={context.state.saveForm}
              >
                {" "}
                Save{" "}
              </SubmitButton>
              <SubmitButton
                reset
                name="reset_button"
                onClick={context.state.reset}
              >
                {" "}
                Reset{" "}
              </SubmitButton>
            </FlexOuterWrapper>
          </StyledForm>
        )}
      </DataContext.Consumer>
    );
  }
}

export default DataEntryForm;
