import React, { Component } from "react";
import styled from "styled-components";
import { DataConsumer } from "../../Providers/data_provider";
import { DLF_Green } from "../../Styled/";

//initial state here

export default class TechSheetSidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme_style: '',
      data: {
        DLF_Pickseed_Pro_Turf: {
          techsheets: [
            "pro turf one",
            "pro turf two",
            "pro turf three",
            "pro turf four",
            "pro turf five",
            "pro turf six"
          ]
        },
        DLF_Pickseed_Forage: {
          techsheets: [
            "forage one",
            "forage two",
            "forage three",
            "forage four",
            "forage five",
            "forage six"
          ]
        },
        Seed_Research_of_Oregon: {
          techsheets: [
            "sro one",
            "sro two",
            "sro three",
            "sro four",
            "sro five",
            "sro six"
          ]
        }
      }
    };
  }

  componentDidMount() {
    var Sidebar = document.getElementById("sidebar-container");
    Sidebar.style.transition = "none";
    Sidebar.style.opacity = 0;

    setTimeout(() => {
      Sidebar.style.transition = "opacity 750ms ease-in";
      Sidebar.style.opacity = 1;
    }, 750);
  }

  componentDidUpdate(prevProps, prevState) {
    const { theme_style } = prevState;

    if (theme_style !== this.state.theme_style) {
      var Sidebar = document.getElementById("sidebar-container");
      Sidebar.style.transition = "none";
      Sidebar.style.opacity = 0;

      setTimeout(() => {
        Sidebar.style.transition = "opacity 750ms ease-in";
        Sidebar.style.opacity = 1;
      }, 750);
    }
  }

  render() {
    return (
      <DataConsumer>
        {({ theme_style }) =>
          theme_style !== "DLF_BLK" && (
            <SidebarContainer>
              {this.state.data[theme_style].techsheets.map( techsheet => (
                <a href="" key={`ts_link-${techsheet}`}>
                  <li key={`ts-${techsheet}`}>{techsheet.toUpperCase()}</li>
                </a>
              ))}
            </SidebarContainer>
          )
        }
      </DataConsumer>
    );
  }
}

const SidebarContainer = styled.ul`
  width: 20%;
  flex-grow: 1;
  border: 3px solid white;
  font-family: Michroma, sans-serif;
  font-size: 14px;
  list-style-type: none;
  padding: 40px;
  border-radius: 5px;
  color: white;

  a {
    text-decoration: none;
    color: white;
    transition: transform 500ms;
  }

  a:hover {
    text-decoration: underline;
    transform: scale(1.4);
    position: relative;
    left: -10px;
  }

  li {
    margin: 10px 0 10px 0;
  }
`;
