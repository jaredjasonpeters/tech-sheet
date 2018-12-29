import React, { Component } from "react";
import { DataProvider, DataConsumer } from "./Providers/data_provider";
import { LoginProvider, LoginConsumer } from "./Providers/login_provider";
import AppContent from "./AppContent/app_content";
import Header from "./Header/header";
import Modal from "./Modal/modal";

export default class ProtectedApplication extends Component {
  render() {
    
    return (
      <DataProvider>
        <DataConsumer>
          {({display_modal}) => {
            return (
              <div
                id="App"
                className="App"
                style={{
                  transition: "background 500ms ease-in",
                  background: "#80bc00"
                }}
              >
                {display_modal && (
                  <Modal/>
                )}
                <Header
                  id="header"
                  companyName="DLF Pickseed"
                />
                <AppContent />
              </div>
            );
          }}
        </DataConsumer>
      </DataProvider>
    );
  }
}
