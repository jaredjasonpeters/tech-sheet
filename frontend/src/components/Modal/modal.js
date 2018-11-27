import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { DataContext } from "../Contexts/";
import { FlexOuterWrapper, FlexInnerWrapper } from "../Styled/";
import SearchBar from "./search_bar";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        "https://images.unsplash.com/photo-1536147116438-62679a5e01f2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e8edad632cfc0900a6af587857693465&auto=format&fit=crop&w=634&q=80",
        "https://images.unsplash.com/photo-1534054950205-cb5a7f00180a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=09a482ee8081c0ff8aadc4aeb9132d16&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1530282436131-cf3b76623184?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3e56e8838b97bd23d3a7753215863ecf&auto=format&fit=crop&w=634&q=80",
        "https://images.unsplash.com/photo-1527195612250-460488c1ad32?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=03ca53c6b9a10214724d51e816431b94&auto=format&fit=crop&w=634&q=80",
        "https://images.unsplash.com/photo-1526985770201-28664c058c1f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=37afc3776e5c9c84d11a966ff6130e0f&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1519050956495-735ca6f00931?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=25764c952f7576e5cf407ebb687d959c&auto=format&fit=crop&w=500&q=60"
      ]
    };
  }

  render() {
    return (
      <DataContext.Consumer>
        {({ state }) => (
          <Overlay data-overlay onClick={state.closeModal}>
            <FlexOuterWrapper
              flex-dir="row"
              pad="0"
              margin="20px"
              width="80%"
              align-self="flex-start"
              align-content="stretch"
              align-items="center"
            >
              <SearchBar />
              {this.state.images.map((v, i) => {
                return (
                  <ThumbnailWrapper>
                    <Thumbnail key={v} src={v} />
                    <SelectImage data-src={v} onClick={state.closeModal}>
                      {" "}
                      +{" "}
                    </SelectImage>
                  </ThumbnailWrapper>
                );
              })}
            </FlexOuterWrapper>
          </Overlay>
        )}
      </DataContext.Consumer>
    );
  }
}

export default Modal;

const Overlay = styled.div`
display: flex;
justify-content: center
align-items: flex-start
width: 100vw;
max-width: 100vw;
height: 2000px;
background: rgba(0,0,0,0.9);
position: absolute;
top: 0;
left: 0;
`;

const Thumbnail = styled.img`
flex-grow: 1
height: inherit
width: 100%
object-fit: cover
justify-content: space-evenly
flex-wrap: wrap
border-radius: 10px;
transition: filter 400ms ease-in-out
&:hover {
    filter: grayscale(80%)
}
`;
const ThumbnailWrapper = styled.div`
flex-grow: 1
margin: 30px
width: 350px
height: 200px
max-height: 200px
align-items: center
justify-content: space-evenly
flex-wrap: wrap
`;

const SelectImage = styled.button`
width: 100%
max-width: 100px;
height: 40px;
background: white
box-shadow: none;
border-radius: 10px;
border: none;
font-size: 25px;
font-weight: 800;
font-family: Michroma
vertical-align: center;
text-align: center

`;
