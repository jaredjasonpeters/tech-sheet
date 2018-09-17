import gql from 'graphql-tag'

const CREATE_USER_MUTATION = gql`

mutation userMutation($name: String!, $email: String!, $password: String!,  $companies: [Company]){
  createUser(
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
export { CREATE_USER_MUTATION }
