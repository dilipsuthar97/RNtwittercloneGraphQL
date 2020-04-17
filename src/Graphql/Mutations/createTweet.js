import { gql } from 'react-apollo';

import { ItemFeed } from '../../Components';

export default gql`
    mutation createTweet($text: String!) {
        createTweet(text: $text) {
            ...ItemFeed
        }
    }
    ${ItemFeed.fragments.tweet}
`