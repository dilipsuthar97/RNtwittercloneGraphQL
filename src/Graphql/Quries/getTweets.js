import { gql } from 'react-apollo';

import { ItemFeed } from '../../Components';

export default gql`
  {
    getTweets {
      ...ItemFeed
    }
  }
  ${ItemFeed.fragments.tweet}
`;