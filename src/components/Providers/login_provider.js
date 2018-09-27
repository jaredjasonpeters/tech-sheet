import React, { Component } from 'react';
import { LoginContext } from '../Contexts/contexts'
import { DLF_Green } from '../Styled/styled'

export default class LoginProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isAuthenticated: true,
            email: null,
            password: null,
            name: null,
            title: "minion",
            SEEDRESEARCHOFOREGON: false,
            DLFPICKSEED: false,
            validation_error: '',

            logoutUser: () => {
                sessionStorage.removeItem('token')
                this.setState({
                    isAuthenticated: false,
                    email: null,
                    password: null,
                })
            },
            authenticate: ({ login, signup }) => {

                if (login) {
                    sessionStorage.setItem('token', login.token)
                    this.setState(
                        {
                            isAuthenticated: true,
                            name: login.user.name,
                        })
                }
                if (signup) {
                    sessionStorage.setItem('token', signup.token)
                    this.setState(
                        {
                            isAuthenticated: true,
                            name: signup.user.name,
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
                    if (value.match(/[0-9]/gi) || name.length < 1) return
                    if (value) filteredValue = value.match(/[A-Za-z ]/gi).join('')
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
                    if (!value.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
                        this.setState({ validation_error: 'Please enter a valid Email' })
                        console.log(this.state.validation_error)
                    }
                    this.setState({ email: value })
                }


            },
            editTitle: (e) => {
                this.setState({ title: 'Barry' })
            },
            toggleDLF: (e) => {
                const company = e.target.dataset.enum
                if (company === 'DLFPICKSEED') {
                    this.setState({ DLFPICKSEED: !this.state['DLFPICKSEED'] })
                }
            },
            toggleSRO: (e) => {
                const company = e.target.dataset.enum
                if (company === 'SEEDRESEARCHOFOREGON') {
                    this.setState({ SEEDRESEARCHOFOREGON: !this.state['SEEDRESEARCHOFOREGON'] })
                }
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