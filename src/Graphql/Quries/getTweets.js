import { gql } from 'react-apollo';

export default gql`
{
    getTweets {
    _id
    text
    likesCount
    createdAt
    user {
      username
      email
      firstName
      lastName
      profile
    }
  }
}
`;