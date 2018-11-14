import gql from 'graphql-tag'

const EDIT_TITLE_MUTATION = gql`

mutation editTitleMutation($title: String! ){
  updateTitle(
    title: $title
  ){
    id
    title
  }
}
      
`
export { EDIT_TITLE_MUTATION }