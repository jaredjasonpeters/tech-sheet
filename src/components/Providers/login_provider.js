import React, { Component } from 'react';
import { LoginContext } from '../Contexts/contexts'
import { DLF_Green } from '../Styled/styled'

export default class LoginProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isAuthenticated: false,
            email: null,
            password: null,
            name: null,
            title: "minion",
            companies: [],
            validation_error: '',

            authenticate: ({login, signup}) => {
                if(login) {
                    sessionStorage.setItem('token', login.token)
                this.setState(
                    { isAuthenticated: true,
                      name: login.user.name,
                      token: login.token
                    })
                }
                if(signup) {
                    sessionStorage.setItem('token', signup.token)
                this.setState(
                    { isAuthenticated: true,
                        name: signup.user.name,
                        token: signup.token
                    })
                }
            },

            signout: () => {
                this.setState({ isAuthenticated: false })
            },

            inputChange: (e) => {
                var { name, value } = e.target
                var filteredValue = value

                if (name === 'name') {
                    if(value.match(/[0-9]/gi) || name.length < 1) return 
                    if(value) filteredValue = value.match(/[A-Za-z ]/gi).join('')
                }
               
                this.setState((prevState) => {
                    var newState = Object.assign(prevState)
                    newState[name] = filteredValue
                    return newState
                })
            },
            handleBlur: (e) => {
                var { name, value } = e.target
                if (name === 'email') {
                    if(!value.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
                        this.setState({validation_error: 'Please enter a valid Email'})
                        console.log(this.state.validation_error)
                    }
                    this.setState({email: value})
                }


            },
            editTitle: (e) => {
                this.setState({ title: 'Barry' })
            },
            companySelect: (e) => {
                const name = e.target.getAttribute('name')
                e.target.style.background = DLF_Green
                this.setState(prevState => {
                    const comp = prevState.companies
                    if (!comp.includes(name)) comp.push(name)
                    else comp.pop()
                    return {
                        companies: comp
                    }

                })
            }
        }
    }


    render() {
        return (
            <LoginContext.Provider value={{ state: this.state }}>
                {this.props.children}
            </LoginContext.Provider>
        );
    }
}