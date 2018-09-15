import React, { Component } from 'react';
import { FlexOuterWrapper, SubmitButton } from '../Styled/styled'
import LoginModal from '../Login/login_modal'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

class Login extends Component {
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

export default withRouter(Login)

