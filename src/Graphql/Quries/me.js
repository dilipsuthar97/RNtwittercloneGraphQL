import { gql } from 'react-apollo';

export default gql`
{
    me {
        email
        username
        firstName
        lastName
        profile
    }
}
`