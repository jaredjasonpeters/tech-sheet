import React, {Component} from 'react';
import { LoginContext } from '../Contexts/contexts'
import { DLF_Green } from '../Styled/styled'

export default class LoginProvider extends Component{
    constructor(props){
    super(props)
        this.state = {
            isAuthenticated: false,
            email: '',
            password: '',
            name: '',
            companies: [],

            authenticate: ({login}) => {
                this.setState({isAuthenticated: true})
            },

            signout: () => {
                this.setState({isAuthenticated: false})
            },
            
            inputChange: (e) => {
                var { name, value } = e.target
                this.setState((prevState) => {
                    var newState = Object.assign(prevState)
                    newState[name] = value
                    return newState
                })
            },
            companySelect: (e) => {
               const name = e.target.getAttribute('name')
               e.target.style.background = DLF_Green 
               this.setState(prevState => {
                const comp = prevState.companies
                if(!comp.includes(name))comp.push(name)
                else comp.pop()
                return {
                    companies: comp
                }
    
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