import React, { Component } from 'react';
import { FlexOuterWrapper, SubmitButton } from './styled/styled'
import LoginModal from './login_modal'

export default class LogInScreen extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <FlexOuterWrapper
                height="100vh"
                width="100vw"
                justify="center"
                align-items="center"
            >
                <LoginModal logIn={this.props.logIn} />
            </FlexOuterWrapper>
        );
    }
}

