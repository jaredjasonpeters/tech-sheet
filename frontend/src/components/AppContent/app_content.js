import React, { Component, Fragment } from "react";
import TechSheetSidebar from "./Sidebar/tech_sheet_sidebar";
import { DataConsumer } from "../Providers/data_provider";
import DataEntryForm from "./data_entry_form";
import { FlexOuterWrapper } from "../Styled/";
import styled from "styled-components";

export default class AppContent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <DataConsumer>
        {({ display_form }) => (
          <FlexOuterWrapper id="sidebar-container" pad="50px 0">
            {!display_form && (
              <TechSheetSidebar />
            )}
            <FlexOuterWrapper>
              {display_form && (
                <div
                  id="entry-form-wrapper"
                  style={{
                    transition: "opacity 1500ms cubic-bezier(.77,.18,.27,1.5)"
                  }}
                >
                  <CloseDataEntryButton />
                  <DataEntryForm />
                </div>
              )}
            </FlexOuterWrapper>
          </FlexOuterWrapper>
        )}
      </DataConsumer>
    );
  }
}

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

class CloseDataEntryButton extends Component {
  componentDidMount() {
    const CloseBar = document.getElementById("close-bar");
    setTimeout(() => {
      CloseBar.style.opacity = 1;
    }, 1750);
  }
  
  render() {
    return (

      <DataConsumer>
      {({closeDataEntry}) => (
        <CloseBar
        id="close-bar"
        onClick={closeDataEntry}
        >
        X
        </CloseBar>
        )}
      </DataConsumer>
        )
        }
}
      