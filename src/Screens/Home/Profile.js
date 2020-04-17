// --------------- LIBRARIES ---------------
import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { connect } from 'react-redux';
import { graphql, compose } from 'react-apollo';

// --------------- ASSETS ---------------
import { profile as styles } from './styles';
import { Images } from '../../CommonConfig';
import { MY_TWEETS_QUERY } from '../../Graphql/Quries';
import { ItemFeed } from '../../Components';

class Profile extends React.Component {

    // --------------- METHODS ---------------
    _renderItem = ({ item }) => <ItemFeed {...item}/>
    _renderPlaceholder = () => <ItemFeed placeholder isLoaded={!this.props.data.loading}/>

    _getTweetsCount = () => this.props.data && this.props.data.myTweets ? this.props.data.myTweets.length : '...';

    // --------------- RENDER ---------------
    render() {
        console.log('props => ', this.props);

        const { auth: { info }, data } = this.props;

        return (
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.header}>
                    <View style={styles.heading}>
                        <Image source={info.profile ? {uri: info.profile} : Images.PLACEHOLDER} style={styles.avatar}/>
                        <View style={styles.usernameContainer}>
                            <Text style={styles.fullName}>{info.firstName} {info.lastName}</Text>
                            <Text style={styles.username}>@{info.username}</Text>
                            <View style={styles.metaContainer}>
                                <View style={styles.metaBox}>
                                    <Text style={styles.metaCount}>{this._getTweetsCount()}</Text>
                                    <Text style={styles.metaText}> tweets</Text>
                                </View>
                                <View style={styles.metaBox}>
                                    <Text style={styles.metaCount}>3</Text>
                                    <Text style={styles.metaText}> likes</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{flex: 1}}>
                    {data.loading ? (
                        <FlatList
                            data={[1,2,3]}
                            keyExtractor={item => item.toString()}
                            renderItem={this._renderPlaceholder}
                        />
                    ) : (
                        <FlatList
                            data={data.myTweets}
                            keyExtractor={item => item._id}
                            renderItem={this._renderItem}
                        />
                    )}
                </View>
            </SafeAreaView>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default compose(graphql(MY_TWEETS_QUERY), connect(mapStateToProps))(Profile);