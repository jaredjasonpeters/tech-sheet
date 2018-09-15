import React, {Component} from 'react';
import {LoginContext} from '../Contexts/contexts'

export default class LoginProvider extends Component{
    constructor(props){
    super(props)
        this.state={
            login: false,
            email: '',
            password: '',
            name: '',
            company: '',
        }
    }

    render(){
        return(
            <LoginContext.provider state={{state: this.state}}>
            {this.props.children}
            </LoginContext.provider>
        );
    }
}