import React, { Component, Fragment } from "react";
import {
  SubmitButton,
  FlexOuterWrapper,
  StyledLabel,
  StyledInput,
  Checkbox
} from "../Styled/";
import { LoginConsumer } from "../Providers/login_provider";
import { Mutation } from "react-apollo";
import { withRouter } from "react-router";
import LoginForm from "./LoginForm";
import SignUpForm from './SignUpForm';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signup: true,
      error: ""
    };
    this.toggleSignUp = this.toggleSignUp.bind(this);
  }

  toggleSignUp() {
    this.setState(prevState => {
      return { signup: !prevState.signup };
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.isAuthenticated) this.props.history.push("/app");
  }

  render() {
    const {signup, error} = this.state
    return (
            <FlexOuterWrapper
              id="login"
              height="100vh"
              width="100vw"
              justify="center"
              align-items="center"
            >
              <FlexOuterWrapper width="500px" justify="center" pad="40px">
                <FlexOuterWrapper center margin="0 0 40px 0">
                  <img
                    id="modal-logo"
                    src={`/images/DLF_BLK.png`}
                    className="App-logo"
                    alt="logo"
                    style={{
                      width: "40%",
                      height: "10%",
                      objectFit: "scale-down",
                      alignSelf: "center",
                      marginBottom: "20px"
                    }}
                  />
                  <h1
                    className="App-title"
                    style={{
                      fontFamily: "Michroma, sans-serif",
                      letterSpacing: "4px",
                      fontWeight: "800",
                      fontSize: "22px"
                    }}
                  >
                    TECH SHEETS APP
                  </h1>
                </FlexOuterWrapper>

                <FlexOuterWrapper
                  bg-color="#e0e0e0"
                  pad="30px"
                  br="5px"
                  justify="center"
                >
                  {signup ? 
                    <SignUpForm 
                    toggle={this.toggleSignUp}
                    signup={signup}/> 
                    : <LoginForm 
                    toggle={this.toggleSignUp}
                    signup={signup}
                    error={error}/>
                  }
                </FlexOuterWrapper>
              </FlexOuterWrapper>
            </FlexOuterWrapper>
    );
  }
}

export default withRouter(Login);




