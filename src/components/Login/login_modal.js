import React, { Component, Fragment } from "react";
import { SubmitButton, FlexInnerWrapper, FlexOuterWrapper, $Label, $Input, Checkbox } from '../Styled/styled'
import { LoginContext } from "../Contexts/contexts";
import { Mutation } from 'react-apollo'
import { SIGNUP_MUTATION } from'../../resolvers/Mutations/sign_up_mutation'
import { LOGIN_MUTATION } from '../../resolvers/Mutations/login_mutation'

class LoginModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signup: true,
      error: ''
    }
    this.switch = this.switch.bind(this)
    this.handleLoginError = this.handleLoginError.bind(this)
  }
  switch(){
    this.setState((prevState) => {
      return {signup: !prevState.signup}
    })
  }

  handleLoginError(e){
    console.log(e)
  }

  render(){
    return (
      <LoginContext.Consumer>
        {loginContext => {
          const {name, email, password, companies} = loginContext.state

          return (
        <FlexOuterWrapper
          width="500px"
          justify="center"
          pad="40px"
        >
          <FlexInnerWrapper center margin="0 0 40px 0">
            <img
              id="modal-logo"
              src={`/images/DLF_BLK.png`}
              className="App-logo"
              alt="logo"
              style={{
                width: '40%',
                height: '10%',
                objectFit: 'scale-down',
                alignSelf: 'center',
                marginBottom: '20px'

              }}
            />
            <h1
              className="App-title"
              style={{
                fontFamily: 'Michroma, sans-serif',
                letterSpacing: '4px',
                fontWeight: '800',
                fontSize: '22px',
              }}>
              TECH SHEETS APP
            </h1>
          </FlexInnerWrapper>

          <FlexOuterWrapper
            bg-color="#e0e0e0"
            pad="30px"
            br="5px"
            justify="center"
          >
          {this.state.signup && 
            <FlexInnerWrapper>
              <$Label font-size="16px">Name:</$Label>
              <$Input 
              type="text"
              name="name"
              className="login-modal-input" 
              height="40px"
              onChange={loginContext.state.inputChange}/>
            </FlexInnerWrapper>
          }

            <FlexInnerWrapper>
              <$Label font-size="16px">Email:</$Label>
              <$Input type="email" name="email" className="login-modal-input" height="40px"
              onChange={loginContext.state.inputChange} />
            </FlexInnerWrapper>
            <FlexInnerWrapper>
              <$Label font-size="16px">Password:</$Label>
              <$Input type="password" name="password" className="login-modal-input" height="40px"
              onChange={loginContext.state.inputChange} />
            </FlexInnerWrapper>

            {this.state.signup && 
              <Fragment>
              <FlexInnerWrapper margin="0 0 30px 0">
              <$Label font-size="16px"> Company: </$Label>
              </FlexInnerWrapper>
            
              <FlexInnerWrapper flex-dir="row">
                <$Label> DLF Pickseed </$Label>
                <Checkbox
                  hover
                  name="DLFPICKSEED"
                  width="30px"
                  height="30px"
                  border-rad="0px"
                  min-width="30px" 
                  onClick={loginContext.state.companySelect}/>
              </FlexInnerWrapper>

              <FlexInnerWrapper flex-dir="row">
                <$Label> Seed Research of Oregon </$Label>
                <Checkbox
                  hover
                  name="SEEDRESEARCHOFOREGON"
                  width="30px"
                  height="30px"
                  border-rad="0px"
                  min-width="30px" 
                  onClick={loginContext.state.companySelect}/>
              </FlexInnerWrapper>
              
            <Mutation 
                    mutation={SIGNUP_MUTATION} 
                    variables={{ name, email, password, companies }}
                    onCompleted={()=> this.props.props.history.push('/app')}>
                      {signUpMutation => 
                        <SubmitButton
                        submit
                        height="40px"
                        font-fam="Michroma"
                        letter-spac="4px"
                        onClick={signUpMutation}>
                        SIGN UP
                        </SubmitButton>
                      }
            </Mutation>
            </Fragment>        
          }
          {!this.state.signup && 
           
          <Mutation
                    mutation={LOGIN_MUTATION} 
                    variables={{ email, password }}
                    onCompleted={()=> this.props.props.history.push('/app')}
                    onError={({graphQLErrors})=> {
                      graphQLErrors.map(({message}) => this.setState({error: message}))
                    }}>
                    {(loginMutation, {loading, error}) => (
                      <Fragment>
                      <SubmitButton
                      submit
                      height="40px"
                      font-fam="Michroma"
                      letter-spac="4px"
                      onClick={loginMutation}
                      >
                      LOGIN
                      </SubmitButton>
                      <ErrorMessage error={this.state.error}/> 
                      </Fragment>
                      )           
                    }
          </Mutation>
          }
          {this.state.signup &&
            <SignUpSwitcher switch={this.switch}/>
          }
          </FlexOuterWrapper>
        </FlexOuterWrapper >
        )}}
      </LoginContext.Consumer>
    );
  }
}

export default LoginModal;

const SignUpSwitcher = (props) => {
  return (
  <h5 
  onClick={props.switch}
  style={{
    width: '100%',
    textAlign: 'center',
    textDecoration: 'underline',
    cursor: 'pointer',
    fontFamily: 'Nunito'
  }} >
            Already signed up click here to LOGIN
  </h5>
  )
}

const ErrorMessage = (props) => {
  return (
    <h4
    style={{
      width: '100%',
      textAlign: 'center',
      color: 'red',
      fontFamily: 'Nunito'
    }}
    >{props.error}
    </h4>
  )
}