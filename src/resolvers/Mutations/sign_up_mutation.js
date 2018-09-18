import gql from 'graphql-tag'

const SIGNUP_MUTATION = gql`

mutation signUpMutation($name: String!, $email: String!, $password: String!,  $companies: [Company]){
  signup(
    name: $name
    email: $email
    password: $password
    companies: $companies
  ){
    id
    name
    email
    password
  }
}
      
`
export { SIGNUP_MUTATION }