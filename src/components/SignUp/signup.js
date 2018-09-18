import React, { Component, Fragment } from "react";
import { SubmitButton, FlexInnerWrapper, FlexOuterWrapper, $Label, $Input, Checkbox } from '../Styled/styled'

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <FlexOuterWrapper
        width="500px"
        justify="center"
        pad="40px"
      >
        <FlexInnerWrapper center margin="0 0 40px 0">
          <img
            id="modal-logo"
            src={`/images/DLF_BLK.png`}
            className="App-logo"
            alt="logo"
            style={{
              width: '40%',
              height: '10%',
              objectFit: 'scale-down',
              alignSelf: 'center',
              marginBottom: '20px'

            }}
          />
          <h1
            className="App-title"
            style={{
              fontFamily: 'Michroma, sans-serif',
              letterSpacing: '4px',
              fontWeight: '800',
              fontSize: '22px',
            }}>
            TECH SHEETS APP
          </h1>
        </FlexInnerWrapper>

        <FlexOuterWrapper
          bg-color="#e0e0e0"
          pad="30px"
          br="5px"
          justify="center"
        >
          <FlexInnerWrapper>
            <$Label font-size="16px">Name:</$Label>
            <$Input type="text" className="signup-modal-input" height="40px" />
          </FlexInnerWrapper>
          <FlexInnerWrapper>
            <$Label font-size="16px">Email:</$Label>
            <$Input type="email" className="signup-modal-input" height="40px" />
          </FlexInnerWrapper>
          <FlexInnerWrapper>
            <$Label font-size="16px">Password:</$Label>
            <$Input type="password" className="signup-modal-input" height="40px" />
          </FlexInnerWrapper>
          <FlexInnerWrapper margin="0 0 30px 0">
            <$Label font-size="16px"> Company: </$Label>
          </FlexInnerWrapper>
          <FlexInnerWrapper flex-dir="row">
            <FlexInnerWrapper flex-dir="row">
              <$Label> DLF Pickseed </$Label>
              <Checkbox
                hover
                width="30px"
                height="30px"
                border-rad="0px"
                min-width="30px" />
            </FlexInnerWrapper>
            <FlexInnerWrapper flex-dir="row">
              <$Label> Seed Research of Oregon </$Label>
              <Checkbox
                hover
                width="30px"
                height="30px"
                border-rad="0px"
                min-width="30px" />
            </FlexInnerWrapper>
          </FlexInnerWrapper>
          <SubmitButton
            submit
            height="40px"
            font-fam="Michroma"
            letter-spac="4px"
            onClick={this.props.logIn}>SIGN UP</SubmitButton>
        </FlexOuterWrapper>
      </FlexOuterWrapper >
    );
  }
}

export default SignUp;