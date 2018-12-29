import React, { Component } from "react";
import styled, { css } from "styled-components";
import { FlexOuterWrapper } from "../Styled/";
import { DataContext, LoginContext } from "../Contexts/";
import { LoginConsumer } from '../Providers/login_provider'
import { DataConsumer } from '../Providers/data_provider'
import UserPanel from "../Header/UserPanel/user_panel";
import StyleSwitcher from "../Header/style_switcher";
import { Colors } from "../../utils/";

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var headerWrapper = document.getElementById("header-wrapper");
    headerWrapper.style.transition = "none";
    headerWrapper.style.opacity = 0;

    setTimeout(() => {
      headerWrapper.style.transition = "opacity 750ms ease-in";
      headerWrapper.style.opacity = 1;
    }, 750);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(prevProps, prevState, snapshot);
    var App = document.getElementById("App");
    var AppHeader = document.getElementById("App-header");
    var sectionHeaders = [...document.querySelectorAll("div.sh")];

    if (!this.props.loginContext.state.isAuthenticated) {
      var image = document.getElementById("company-logo");
      image.style.transition = "none";
      image.style.opacity = 0;

      setTimeout(() => {
        image.style.transition = "opacity 500ms ease-in";
        image.style.opacity = 1;
      }, 500);
    }

    setTimeout(() => {
      App.style.background = Colors[this.props.dataContext.state.theme_style];
      AppHeader.style.background =
        Colors[this.props.dataContext.state.theme_style];
      sectionHeaders.map(v => {
        v.style.transition = "background 500ms ease-in";
        v.style.background = Colors[this.props.dataContext.state.theme_style];
      });
    }, 500);
  }
  render() {

    return (
      <LoginConsumer>
        {({ isAuthenticated, name, title }) => (
        <DataConsumer>
        {dataContext => (
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
                  src={`/images/${dataContext.theme_style}.png`}
                  className="App-logo"
                  alt="logo"
                />
                <h1
                  className="App-title"
                  style={{
                    color: isAuthenticated && "white"
                  }}
                >
                  TECH SHEETS APP
                </h1>
              </FlexOuterWrapper>
            </FlexOuterWrapper>
            <StyleSwitcher />
                <UserPanel
                  dataContext={dataContext}
                  name={name}
                  title={title}
                />
          </FlexOuterWrapper>
        )}
      </DataConsumer>
        )}
      </LoginConsumer>
    )
  }
}
