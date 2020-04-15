import { gql } from 'react-apollo';

export default gql`
    mutation signup(
        $username: String!
        $email: String!
        $fullName: String!
        $password: String!
        $profile: String
    ) {
        signup(username: $username, email: $email, fullName: $fullName, password: $password, profile: $profile) {
            token
        }
}
`