import React, { Fragment, Component } from "react";
import { DataContext } from "../../Contexts/";
import NTEProw from "../NTEP/ntep_row";
import {
  StyledInput,
  InputLabel,
  DLF_Green,
  SubmitButton,
  Wrapper
} from "../../Styled/";

export default class NTEPtable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      table: {
        confirmed: false,
        id: this.props.name,
        title: "",
        lines: {
          row_1: {
            variety_name: "",
            ntep_rating: ""
          },
          row_2: {
            variety_name: "",
            ntep_rating: ""
          },
          row_3: {
            variety_name: "",
            ntep_rating: ""
          },
          row_4: {
            variety_name: "",
            ntep_rating: ""
          },
          row_5: {
            variety_name: "",
            ntep_rating: ""
          },
          row_6: {
            variety_name: "",
            ntep_rating: ""
          },
          row_7: {
            variety_name: "",
            ntep_rating: ""
          },
          row_8: {
            variety_name: "",
            ntep_rating: ""
          },
          lsd: {
            ntep_rating: ""
          }
        }
      }
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.setTitle = this.setTitle.bind(this);
  }

  handleInput(e) {
    var { name, value } = e.target;
    var row = e.target.getAttribute("data-row");

    var accChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
    var textArray = value.split("").filter(v => accChars.indexOf(v) !== -1);
    var filteredText = textArray.join("");

    this.setState(prevState => {
      var newState = Object.assign(prevState);
      if (name === "variety_name") {
        newState.table.lines[row][name] = {
          value: value,
          filled: value.length > 0
        };
      }
      if (name === "ntep_rating" && value.length <= 3) {
        newState.table.lines[row][name] = {
          value: filteredText,
          filled: value.length > 0
        };
      }
      return newState;
    });
  }

  handleCheck(e) {
    var { name, value } = e.target;
    var row = e.target.getAttribute("data-row");

    this.setState(prevState => {
      var newState = Object.assign(prevState);
      newState.table.lines[row]["proprietary"] = !prevState.table.lines[row][
        "proprietary"
      ];
      return newState;
    });
  }

  setTitle(e) {
    var { name, value } = e.target;
    console.log(name);
    this.setState(prevState => {
      var newState = Object.assign(prevState);
      newState.table.title = value;
      return newState;
    });
  }

  render() {
    return (
      <DataContext.Consumer>
        {context => (
          <>
            <div
              style={{
                flexGrow: 1,
                maxWidth: "100%",
                width: "45%",
                border: `5px solid ${
                  this.state.table.confirmed ? DLF_Green : "black"
                }`,
                borderRadius: "5px",
                padding: "15px",
                marginBottom: "10px",
                marginRight: "10px"
              }}
            >
              <div
                className="table-number-circle"
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "90px",
                  background: `${
                    this.state.table.confirmed ? DLF_Green : "black"
                  }`,
                  textAlign: "center",
                  fontSize: "20px",
                  color: "white",
                  fontFamily: "Nunito, sans-serif",
                  marginBottom: "30px"
                }}
              >
                {this.props.count}
              </div>

              <InputLabel style={{ marginBottom: "0px" }}>Title:</InputLabel>
              <StyledInput
                name="title"
                onChange={this.setTitle}
                value={this.state.table.title}
                width="50%"
                data-is-filled={this.state.table.title !== ""}
              />
              <NTEProw
                name="row_1"
                handleCheck={this.handleCheck}
                handleInput={this.handleInput}
                data-row={this.state.table.lines.row_1}
                data-table={this.props.name}
                checked={this.state.table.lines.row_1.proprietary}
                tableConfirmed={this.state.table.confirmed}
              />

              <NTEProw
                name="row_2"
                handleCheck={this.handleCheck}
                handleInput={this.handleInput}
                data-row={this.state.table.lines.row_2}
                data-table={this.props.name}
                checked={this.state.table.lines.row_2.proprietary}
                tableConfirmed={this.state.table.confirmed}
              />

              <NTEProw
                name="row_3"
                handleCheck={this.handleCheck}
                handleInput={this.handleInput}
                data-row={this.state.table.lines.row_3}
                data-table={this.props.name}
                checked={this.state.table.lines.row_3.proprietary}
                tableConfirmed={this.state.table.confirmed}
              />

              <NTEProw
                name="row_4"
                handleCheck={this.handleCheck}
                handleInput={this.handleInput}
                data-row={this.state.table.lines.row_4}
                data-table={this.props.name}
                checked={this.state.table.lines.row_4.proprietary}
                tableConfirmed={this.state.table.confirmed}
              />

              <NTEProw
                name="row_5"
                handleCheck={this.handleCheck}
                handleInput={this.handleInput}
                data-row={this.state.table.lines.row_5}
                data-table={this.props.name}
                checked={this.state.table.lines.row_5.proprietary}
                tableConfirmed={this.state.table.confirmed}
              />

              <NTEProw
                name="row_6"
                handleCheck={this.handleCheck}
                handleInput={this.handleInput}
                data-row={this.state.table.lines.row_6}
                data-table={this.props.name}
                checked={this.state.table.lines.row_6.proprietary}
                tableConfirmed={this.state.table.confirmed}
              />

              <NTEProw
                name="row_7"
                handleCheck={this.handleCheck}
                handleInput={this.handleInput}
                data-row={this.state.table.lines.row_7}
                data-table={this.props.name}
                checked={this.state.table.lines.row_7.proprietary}
                tableConfirmed={this.state.table.confirmed}
              />

              <NTEProw
                name="row_8"
                handleCheck={this.handleCheck}
                handleInput={this.handleInput}
                data-row={this.state.table.lines.row_8}
                data-table={this.props.name}
                checked={this.state.table.lines.row_8.proprietary}
                tableConfirmed={this.state.table.confirmed}
              />

              <NTEProw
                lsd="LSD:"
                name="lsd"
                handleInput={this.handleInput}
                data-row={this.state.table.lines.lsd}
                tableConfirmed={this.state.table.confirmed}
              />
              <Wrapper justify="center">
                <SubmitButton
                  submit
                  width="150px"
                  max="150px"
                  height="40px"
                  onClick={context.state.addTable.bind(
                    context,
                    this.state.table
                  )}
                >
                  Confirm
                </SubmitButton>
              </Wrapper>
            </div>
          </>
        )}
      </DataContext.Consumer>
    );
  }
}
