import { gql } from 'react-apollo';

import { ItemFeed } from '../../Components';

export default gql`
    subscription {
        tweetAdded {
            ...ItemFeed
        }
    }
    ${ItemFeed.fragments.tweet}
`;