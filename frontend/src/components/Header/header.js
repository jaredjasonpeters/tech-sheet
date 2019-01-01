import React, { Component } from "react";
import { FlexOuterWrapper } from "../Styled/";
import { DataConsumer } from '../Providers/data_provider'
import UserPanel from "../Header/UserPanel/user_panel";
import StyleSwitcher from "../Header/style_switcher";
import { Colors } from "../../utils/";

export default class Header extends Component {

  render() {

    return (
      
        <DataConsumer>
        {({theme_style}) => (
          <FlexOuterWrapper
            id="header-wrapper"
            bg-color="none"
            justify="space-between"
            width="100%"
            height="80px"
          >
            <FlexOuterWrapper
              id="App-header"
              className="App-header"
              width="auto"
              height="100%"
              style={{
                transition: "background 500ms ease-in"
              }}
            >
              <FlexOuterWrapper
                width="auto"
                flex-dir="row"
                justify="space-between"
              >
                <img
                  id="company-logo"
                  src={`/images/${theme_style}.png`}
                  className="App-logo"
                  alt="logo"
                />
                <h1
                  className="App-title"
                  style={{
                    color: "white"
                  }}
                >
                  TECH SHEETS APP
                </h1>
              </FlexOuterWrapper>
            </FlexOuterWrapper>
              <StyleSwitcher />
              <UserPanel/>
          </FlexOuterWrapper>
        )}
      </DataConsumer>
    )
  }
}
