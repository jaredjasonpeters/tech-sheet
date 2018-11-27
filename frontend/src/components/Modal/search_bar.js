import React, { Component } from "react";
import styled from "styled-components";
import { $Input } from "../Styled/";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SearchBarWrapper>
        <$Input
          search
          margin="0"
          width="80%"
          maxW="600px"
          height="40%"
          align-self="center"
          background="#333333"
          border-rad="10px"
          border="none"
        />
        <SearchButton>{String.fromCodePoint(0x1f50e)}</SearchButton>
      </SearchBarWrapper>
    );
  }
}

const SearchBarWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: center
width: 100%
height: 40%;
border-radius: 10px;
margin-bottom: 10px
`;
const SearchButton = styled.button`
  background: grey;
  border-radius: 10px;
  border: none;
  margin-left: 5px;
  width: 100px;
  height: inherit;
  font-size: 30px;
  text-align: center;
  vertical-align: center;
`;
