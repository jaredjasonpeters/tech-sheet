import React, {Component } from 'react'
import { SIGNUP_MUTATION } from "../../resolvers/Mutations/sign_up_mutation";
import { LoginConsumer } from '../Providers/login_provider'
import {
  StyledLabel,
  Checkbox,
  FlexOuterWrapper,
  SubmitButton,
  StyledInput
} from '../Styled'
import { Mutation } from 'react-apollo'
import SignUpSwitcher from '../Login/SignUpSwitcher'

export default function SignUpForm({toggle, signup}) {

        return (
            <LoginConsumer>
                {({name, inputChange, email, handleBlur, password, toggleDLF, toggleSRO, DLFPICKSEED, SEEDRESEARCHOFOREGON, authenticate}) => {
                    const companies = [];
                    if (DLFPICKSEED) companies.push("DLFPICKSEED");
                    if (SEEDRESEARCHOFOREGON) companies.push("SEEDRESEARCHOFOREGON");
                    return (
                    <>
                      <FlexOuterWrapper>
                        <StyledLabel font-size="16px">Name:</StyledLabel>
                        <StyledInput
                          type="text"
                          value={name || ""}
                          name="name"
                          className="login-modal-input"
                          height="40px"
                          onChange={inputChange}
                        />
                      </FlexOuterWrapper>

                      <FlexOuterWrapper>
                        <StyledLabel font-size="16px">Email:</StyledLabel>
                        <StyledInput
                          type="email"
                          value={email || ""}
                          onBlur={handleBlur}
                          name="email"
                          className="login-modal-input"
                          height="40px"
                          onChange={inputChange}
                          autoComplete="off"
                        />
                      </FlexOuterWrapper>
                      <FlexOuterWrapper>
                        <StyledLabel font-size="16px">Password:</StyledLabel>
                        <StyledInput
                          type="password"
                          value={password || ""}
                          name="password"
                          className="login-modal-input"
                          height="40px"
                          onChange={inputChange}
                          autoComplete="off"
                        />
                      </FlexOuterWrapper>

                      <FlexOuterWrapper margin="0 0 30px 0">
                        <StyledLabel font-size="16px"> Company: </StyledLabel>
                      </FlexOuterWrapper>

                      <FlexOuterWrapper flex-dir="row">
                        <StyledLabel> DLF Pickseed </StyledLabel>
                        <Checkbox
                          selected={DLFPICKSEED}
                          data-enum="DLFPICKSEED"
                          width="30px"
                          height="30px"
                          border-rad="0px"
                          min-width="30px"
                          onClick={toggleDLF}
                        />
                      </FlexOuterWrapper>

                      <FlexOuterWrapper flex-dir="row">
                        <StyledLabel> Seed Research of Oregon </StyledLabel>
                        <Checkbox
                          selected={SEEDRESEARCHOFOREGON}
                          data-enum="SEEDRESEARCHOFOREGON"
                          width="30px"
                          height="30px"
                          border-rad="0px"
                          min-width="30px"
                          onClick={toggleSRO}
                        />
                      </FlexOuterWrapper>

                      <Mutation
                        mutation={SIGNUP_MUTATION}
                        variables={{ name, email, password, companies }}
                        onCompleted={authenticate}
                        onError={({ graphQLErrors }) => {
                          graphQLErrors.map(({ message }) =>
                            this.setState({ error: message })
                          );
                        }}
                      >
                        {(signUpMutation, {loading, error}) => {
                          return (
                            <SubmitButton
                              className="submit-btn"
                              submit
                              align-self="center"
                              width="300px"
                              height="40px"
                              font-fam="Michroma"
                              letter-spac="4px"
                              onClick={signUpMutation}
                            >
                              SIGN UP
                            </SubmitButton>
                          );
                        }}
                      </Mutation>
                      <SignUpSwitcher
                        toggle={toggle}
                        signup={signup}
                      />
                    </>
                    )
                }}
            </LoginConsumer>  
        )
  
}

