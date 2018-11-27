import React, { Component, Fragment } from "react";
import {
  SubmitButton,
  FlexInnerWrapper,
  FlexOuterWrapper,
  $Label,
  $Input,
  Checkbox
} from "../Styled/";
import { LoginContext } from "../Contexts/contexts";
import { Mutation } from "react-apollo";
import { SIGNUP_MUTATION } from "../../resolvers/Mutations/sign_up_mutation";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <LoginContext.Consumer>
        {context => {
          const { name, email, password, companies } = context.state;
          console.log(name, email, password, companies);
          console.log(this.props);
          return (
            <FlexOuterWrapper width="500px" justify="center" pad="40px">
              <FlexInnerWrapper center margin="0 0 40px 0">
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
              </FlexInnerWrapper>

              <FlexOuterWrapper
                bg-color="#e0e0e0"
                pad="30px"
                br="5px"
                justify="center"
              >
                <FlexInnerWrapper>
                  <$Label font-size="16px">Name:</$Label>
                  <$Input
                    type="text"
                    name="name"
                    className="signup-modal-input"
                    height="40px"
                    onChange={context.state.inputChange}
                  />
                </FlexInnerWrapper>

                <FlexInnerWrapper>
                  <$Label font-size="16px">Email:</$Label>
                  <$Input
                    type="email"
                    name="email"
                    className="signup-modal-input"
                    height="40px"
                    onChange={context.state.inputChange}
                  />
                </FlexInnerWrapper>

                <FlexInnerWrapper>
                  <$Label font-size="16px">Password:</$Label>
                  <$Input
                    type="password"
                    name="password"
                    className="signup-modal-input"
                    height="40px"
                    onChange={context.state.inputChange}
                  />
                </FlexInnerWrapper>

                <FlexInnerWrapper margin="0 0 30px 0">
                  <$Label font-size="16px"> Company: </$Label>
                </FlexInnerWrapper>
                <FlexInnerWrapper flex-dir="row">
                  <FlexInnerWrapper flex-dir="row">
                    <$Label> DLF Pickseed </$Label>
                    <Checkbox
                      hover
                      name="DLFPICKSEED"
                      width="30px"
                      height="30px"
                      border-rad="0px"
                      min-width="30px"
                      onClick={context.state.companySelect}
                    />
                  </FlexInnerWrapper>

                  <FlexInnerWrapper flex-dir="row">
                    <$Label> Seed Research of Oregon </$Label>
                    <Checkbox
                      hover
                      name="SEEDRESEARCHOFOREGON"
                      width="30px"
                      height="30px"
                      border-rad="0px"
                      min-width="30px"
                      onClick={context.state.companySelect}
                    />
                  </FlexInnerWrapper>
                </FlexInnerWrapper>
                <Mutation
                  mutation={SIGNUP_MUTATION}
                  variables={{ name, email, password, companies }}
                  onCompleted={() => this.props.props.history.push("/app")}
                >
                  {signUpMutation => (
                    <SubmitButton
                      submit
                      height="40px"
                      font-fam="Michroma"
                      letter-spac="4px"
                      onClick={signUpMutation}
                    >
                      SIGN UP
                    </SubmitButton>
                  )}
                </Mutation>
              </FlexOuterWrapper>
            </FlexOuterWrapper>
          );
        }}
      </LoginContext.Consumer>
    );
  }
}

export default SignUp;
