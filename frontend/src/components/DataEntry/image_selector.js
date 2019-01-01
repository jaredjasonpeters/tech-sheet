import React, { Component } from "react";
import {
  SectionHeader,
  FlexInnerWrapper,
  FlexOuterWrapper,
  $Input,
  $Label,
  Checkbox,
  SubmitButton
} from "../Styled/";
import { DataConsumer } from "../Providers/data_provider";
import styled from "styled-components";

class ImageSelector extends Component {
  
  render() {
    return (
      <DataConsumer>
        {({theme_style, selected_modal_image: img, displayModal}) => (
          <>
            <SectionHeader theme={theme_style} className="sh">
              IMAGE SELECTOR
            </SectionHeader>
            <FlexOuterWrapper flex-dir="row" justify="center">
              {img && (
                <SelectedImage src={img} alt="plant" />
              )}
              <SubmitButton
                submit
                max="100px"
                font-size="40px"
                onClick={displayModal}
                flex-grow="1"
              >
                {String.fromCodePoint(0x2b07)}
              </SubmitButton>
            </FlexOuterWrapper>
          </>
        )}
      </DataConsumer>
    );
  }
}

export default ImageSelector;

const SelectedImage = styled.img`
  width: 250px;
  height: 250px;
  align-self: center;
  margin: 20px;
  border-radius: 10px;
  object-fit: cover;
`;
