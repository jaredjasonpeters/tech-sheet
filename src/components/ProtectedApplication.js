import React, { Component } from 'react'
import DataProvider from './Providers/data_provider'
import LoginProvider from './Providers/login_provider'
import { DataContext, LoginContext } from './Contexts/contexts'
import AppContent from './AppContent/app_content'
import Header from './Header/header'

export default class ProtectedApplication extends Component {
    constructor(props) {
        super(props)
    }
    render(){
        return (
                <LoginContext.Consumer>
                    {loginContext => {
                        <DataProvider>
                            <DataContext.Consumer>
                            {dataContext => {
                                return (
                                <div id="App"
                                className="App"
                                loginContext={loginContext}
                                dataContext={dataContext}
                                style={{
                                    transition: 'background 500ms ease-in',
                                    background: 'white',
                                }}>
                                <Header 
                                    id="header" 
                                    companyName='DLF Pickseed' 
                                    loginContext={loginContext} 
                                    dataContext={dataContext} 
                                />
                                <AppContent />
                                </div>
                            )}}
                            </DataContext.Consumer>
                        </DataProvider>
                    }}
                </LoginContext.Consumer>
        )
    }
}

    