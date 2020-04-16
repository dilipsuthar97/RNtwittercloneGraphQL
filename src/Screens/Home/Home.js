// --------------- LIBRARIES ---------------
import React from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { graphql, compose, withApollo } from 'react-apollo';
import { connect } from 'react-redux';

// --------------- ASSETS ---------------
import { home } from './styles';
import { ItemFeed } from '../../Components';
import { GET_TWEETS_QUERY, ME_QUERY } from '../../Graphql/Quries';
import { Colors, Images } from '../../CommonConfig';
import { getSaveUserInfo } from '../../Redux/Actions';
import { TWEET_ADDED_SUBSCRIPTION } from '../../Graphql/Subscriptions';

class Home extends React.Component {
    // --------------- STATE ---------------
    state = {}

    // UNSAFE_componentWillMount() {
    //     // Calling subscription API here ...
    //     this.props.data.subscribeToMore({
    //         document: TWEET_ADDED_SUBSCRIPTION,
    //         updateQuery: (prev, { subscriptionData }) => {
    //             console.log('subscriptionData: ', subscriptionData);
    //             if (!subscriptionData.data) {
    //                 return prev;
    //             }

    //             const newTweet = subscriptionData.data.tweetAdded;

    //             if (!prev.getTweets.find(tweet => tweet._id === newTweet._id)) {
    //                 // return Object.assign({}, prev, {
    //                 //     getTweets: [{ ...newTweet }, ...prev.getTweets]
    //                 // })
    //                 return {
    //                     ...prev,
    //                     getTweets: [{ ...newTweet }, ...prev.getTweets]
    //                 };
    //             }

    //             return prev;
    //         }
    //     });
    // }

    componentDidMount() {
        // Calling subscription API here ...
        this.props.data.subscribeToMore({
            document: TWEET_ADDED_SUBSCRIPTION,
            updateQuery: (prev, { subscriptionData }) => {
                console.log('subscriptionData: ', subscriptionData);
                if (!subscriptionData.data) {
                    return prev;
                }

                const newTweet = subscriptionData.data.tweetAdded;

                if (!prev.getTweets.find(tweet => tweet._id === newTweet._id)) {
                    // return Object.assign({}, prev, {
                    //     getTweets: [{ ...newTweet }, ...prev.getTweets]
                    // })
                    return {
                        ...prev,
                        getTweets: [{ ...newTweet }, ...prev.getTweets]
                    };
                }

                return prev;
            }
        });

        this._getUserInfo();
    }

    // --------------- METHODS ---------------
    _renderItem = ({ item }) => <ItemFeed {...item}/>

    async _getUserInfo() {
        const { data } = await this.props.client.query({ query: ME_QUERY });
        console.log(data);
        this.props.getSaveUserInfo({ info: data.me });
    }

    // --------------- RENDER ---------------
    render() {
        console.log('props => ', this.props);

        const { data } = this.props;    // data from GET_TWEETS_QUERY call...

        if (data.loading) {
            return (
                <View style={[home.root, { justifyContent: 'center', alignItems: 'center' }]}>
                    <ActivityIndicator size='large' color={Colors.PRIMARY}/>
                </View>
            )
        }

        return (
            <SafeAreaView style={home.safeArea}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={data.getTweets}
                    keyExtractor={(item) => item._id}
                    renderItem={this._renderItem}
                />
            </SafeAreaView>
        )
    }
}

// Calling graphql API here
export default withApollo(compose(graphql(GET_TWEETS_QUERY), connect(undefined, { getSaveUserInfo }))(Home));