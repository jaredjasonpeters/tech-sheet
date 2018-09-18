import React, {Component} from 'react';
import { LoginContext } from '../Contexts/contexts'

export default class LoginProvider extends Component{
    constructor(props){
    super(props)
        this.state = {
            login: false,
            email: '',
            password: '',
            name: '',
            companies: [],
            
            inputChange: (e) => {
                var { name, value } = e.target
                console.log(e.target)
                this.setState((prevState) => {
                    var newState = Object.assign(prevState)
                    newState[name] = value
                    return newState
                })
            }
        }
    }
    

    render(){
        return(
            <LoginContext.Provider value={{state: this.state}}>
                {this.props.children}
            </LoginContext.Provider>
        );
    }
}