import React, { Component, Fragment } from "react";
import TechSheetSidebar from "./Sidebar/tech_sheet_sidebar";
import { DataContext } from "../Contexts/";
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
      <DataContext.Consumer>
        {dataContext => (
          <FlexOuterWrapper id="sidebar-container" pad="50px 0">
            {!dataContext.state.display_form && (
              <TechSheetSidebar dataContext={dataContext} />
            )}
            <FlexOuterWrapper>
              {dataContext.state.display_form && (
                <div
                  id="entry-form-wrapper"
                  style={{
                    transition: "opacity 1500ms cubic-bezier(.77,.18,.27,1.5)"
                  }}
                >
                  <CloseDataEntryButton context={dataContext} />
                  <DataEntryForm />
                </div>
              )}
            </FlexOuterWrapper>
          </FlexOuterWrapper>
        )}
      </DataContext.Consumer>
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
      <CloseBar
        id="close-bar"
        onClick={this.props.context.state.closeDataEntry}
      >
        X
      </CloseBar>
    );
  }
}
