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

class Home extends React.Component {
    // --------------- STATE ---------------
    state = {}

    componentDidMount() {
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

        const { data } = this.props;

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