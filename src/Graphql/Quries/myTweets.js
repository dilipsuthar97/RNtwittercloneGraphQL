import { gql } from 'react-apollo';

import { ItemFeed } from '../../Components';

export default gql`
  {
    myTweets {
      ...ItemFeed
    }
  }
  ${ItemFeed.fragments.tweet}
`;