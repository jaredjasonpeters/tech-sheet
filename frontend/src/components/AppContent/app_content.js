import React, { Component, Fragment } from "react";
import TechSheetSidebar from "./Sidebar/tech_sheet_sidebar";
import { DataConsumer } from "../Providers/data_provider";
import DataEntryForm from "./data_entry_form";


export default class AppContent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <DataConsumer>
        {({ display_form }) => (
          <>
            {!display_form ?
               <TechSheetSidebar />
               :
               <DataEntryForm />
            }
          </>
        )}
      </DataConsumer>
    );
  }
}


      