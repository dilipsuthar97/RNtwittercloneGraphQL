import { gql } from 'react-apollo';

export default gql`
    subscription {
        tweetAdded {
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