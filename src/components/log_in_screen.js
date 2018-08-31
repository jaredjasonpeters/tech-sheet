import React, { Component } from 'react';
import {Wrapper, SubmitButton} from './styled/styled'
export default class LogInScreen extends Component {
    render() {
        return (
            <Wrapper height="100vh" width="100vw" justify="center">
            <SubmitButton submit onClick={this.props.logIn}>Log In</SubmitButton>
            </Wrapper>
        );
    }
}