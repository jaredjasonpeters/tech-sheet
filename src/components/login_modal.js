import React, { Component, Fragment } from "react";
import { SubmitButton, FlexInnerWrapper, FlexOuterWrapper, $Label, $Input } from './styled/styled'

class LoginModal extends Component {
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
            <$Label font-size="16px">Email:</$Label>
            <$Input type="email" className="login-modal-input" height="40px" />
          </FlexInnerWrapper>
          <FlexInnerWrapper>
            <$Label font-size="16px">Password:</$Label>
            <$Input type="password" className="login-modal-input" height="40px" />
          </FlexInnerWrapper>
          <SubmitButton
            submit
            height="40px"
            font-fam="Michroma"
            letter-spac="4px"
            onClick={this.props.logIn}>LOGIN</SubmitButton>
        </FlexOuterWrapper>
      </FlexOuterWrapper >
    );
  }
}

export default LoginModal;