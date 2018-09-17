import React, {Component} from 'react';
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import { CREATE_USER_MUTATION } from '../../resolvers/Mutations/create_user_mutation'

export default class CreateUser extends Component{
    constructor(props){
    super(props)
        this.state = {
            name: '',
            email: '',
            password: '',
            companies: []
        }
        this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick(e){
        e.preventDefault()
        const value = e.target.textContent
        this.setState(prevState => {
            const comp = prevState.companies
            if(!comp.includes(value))comp.push(value)
            else comp.pop()
            return {
                companies: comp
            }

        })
    }

    render(){
        const { name, email, companies, password} = this.state
        return(
            <div>
                <div>
                    <input
                        value={name}
                        onChange={e => this.setState({ name: e.target.value })}
                        type="text"
                        placeholder= "Name"
                    />
                    <input
                        value={email}
                        onChange={e => this.setState({ email: e.target.value })}
                        type="text"
                        placeholder= "Email"
                    />
                    <input
                        value={password}
                        onChange={e => this.setState({ password: e.target.value })}
                        type="password"
                        placeholder= "Password"
                    />
                        <h1 style={{
                            cursor: 'pointer'
                        }} onClick={this.handleClick} name="DLFPICKSEED">DLFPICKSEED</h1>
                        <h1 style={{
                            cursor: 'pointer'
                        }} onClick={this.handleClick} name="SEEDRESEARCHOFOREGON">SEEDRESEARCHOFOREGON</h1>
                </div>
                <Mutation 
                  mutation={CREATE_USER_MUTATION} 
                  variables={{ name, email, companies, password }}
                  onCompleted={()=> this.props.history.push('/login')}>
                {userMutation => <button onClick={userMutation}>Sign Up</button>}
                </Mutation>
            </div>
        );
    }
}