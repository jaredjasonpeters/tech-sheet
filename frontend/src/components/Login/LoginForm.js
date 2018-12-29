import React from 'react'
import { LOGIN_MUTATION } from "../../resolvers/Mutations/login_mutation";
import SignUpSwitcher from './SignUpSwitcher'
import ErrorMessage from './ErrorMessage'
import { LoginConsumer } from '../Providers/login_provider';
import {
    FlexOuterWrapper,
    StyledLabel,
    StyledInput,
    SubmitButton

} from '../Styled'
import { Mutation } from 'react-apollo'


export default function LoginForm ({toggle, signup, error}){

        return (
            <LoginConsumer>
                {({inputChange, email, password, authenticate}) => {
                    return (
                        <>
            <FlexOuterWrapper>
            <StyledLabel font-size="16px">Email:</StyledLabel>
            <StyledInput
            type="email"
            name="email"
            className="login-modal-input"
            height="40px"
            onChange={inputChange}
            />
            </FlexOuterWrapper>
            
            <FlexOuterWrapper>
            <StyledLabel font-size="16px">Password:</StyledLabel>
            <StyledInput
            type="password"
            name="password"
            className="login-modal-input"
            height="40px"
            onChange={inputChange}
            />
        </FlexOuterWrapper>
        
        <Mutation
        mutation={LOGIN_MUTATION}
        variables={{ email, password }}
        onCompleted={authenticate}
        onError={({ graphQLErrors }) => {
            graphQLErrors.map(({ message }) =>
            this.setState({ error: message })
            );
        }}
        >
        {(loginMutation, { loading, error }) => {
            return (
                <>
                <SubmitButton
                className="submit-btn"
                submit
                align-self="center"
                width="300px"
                height="40px"
                font-fam="Michroma"
                letter-spac="4px"
                onClick={loginMutation}
                >
                LOGIN
                </SubmitButton>
                <SignUpSwitcher
                toggle={toggle}
                signup={signup}
                />
                <ErrorMessage error={error} />
                </>
                );
            }}
            </Mutation>
            </>
                    )
                }}
            </LoginConsumer>
            
            )
    }
    
    