import gql from 'graphql-tag'

const LOGIN_MUTATION = gql`

mutation loginMutation($email: String!, $password: String!){
  login(
    email: $email
    password: $password
  ){
    token
    user{
        id
        name
    }
  }
}
      
`
export { LOGIN_MUTATION }