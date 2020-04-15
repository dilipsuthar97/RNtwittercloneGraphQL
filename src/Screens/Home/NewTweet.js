// --------------- LIBRARIES ---------------
import React from 'react';
import { View, TextInput, Text, Platform, TouchableOpacity, Keyboard } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { graphql, compose } from 'react-apollo';
import { connect } from 'react-redux';

// --------------- ASSETS ---------------
import { newTweet as styles } from './styles';
import { Colors } from '../../CommonConfig';
import { CREATE_TWEET_MUTATION } from '../../Graphql/Mutations';
import { Loader } from '../../Components';
import { GET_TWEETS_QUERY } from '../../Graphql/Quries';

class NewTweet extends React.Component {

    // --------------- STATE ---------------
    state = {
        text: '',
        loading: false
    }

    // --------------- METHODS ---------------
    _onPressTweet = async () => {
        this.setState({ loading: true });
        const { text } = this.state;
        const { auth } = this.props;

        try {
            const { data } = await this.props.mutate({
                variables: {
                    text
                },
                /**
                 * This is the main thing for imidiate UI response using optimistic UI response
                 * When user create new tweet It'll display a newly created tweet's data before server response
                 * in tweet's feed screen
                 * It's is different from Subscription
                 */
                optimisticResponse: {
                    __typename: 'Mutation',
                    createTweet: {
                        __typename: 'Tweet',
                        text: this.state.text,
                        _id: Math.round(Math.random() * -1000000),
                        likesCount: 0,
                        createdAt: new Date(),
                        user: {
                            __typename: 'User',
                            username: auth.info.username,
                            firstName: auth.info.firstName,
                            lastName: auth.info.lastName,
                            email: auth.info.email,
                            profile: auth.info.profile
                        }
                    }
                },
                update: (store, { data: { createTweet } }) => {     // Here we'r updating our Apollo client store data!
                    const data = store.readQuery({ query: GET_TWEETS_QUERY });
                    if (!data.getTweets.find(tweet => tweet._id == createTweet._id)) {
                        store.writeQuery({ query: GET_TWEETS_QUERY, data: { ...data, getTweets: [{ ...createTweet }, ...data.getTweets] }})
                    }
                }
            });
            console.log('====================', data);
            this.setState({ loading: false });
            Keyboard.dismiss();
            this.props.navigation.pop();

        } catch (err) {
            this.setState({ loading: false });
            alert(err.message.replace('GraphQL error: ', ''));
            throw err;
        }
    }

    _onChangeText = text => this.setState({ text });

    _textLength = () => 140 - this.state.text.length;

    _checkDisabled = () => this.state.text.length < 5

    // --------------- RENDER ---------------
    render() {
        console.log('props => ', this.props)

        return (
            <SafeAreaView style={styles.safeArea}>
                <Loader visible={this.state.loading}/>
                <View style={styles.wrapper}>
                    <TextInput
                        style={styles.input}
                        multiline={true}
                        maxLength={140}
                        autoFocus={true}
                        selectionColor={Platform.OS == 'ios' && Colors.PRIMARY}
                        placeholder={'What\'s happening?'}
                        onChangeText={this._onChangeText}
                    />
                    <Text style={[styles.textLength, {color: this._textLength() >= 0 && this._textLength() <= 10 ? Colors.RED : Colors.PRIMARY }]}>{this._textLength()}</Text>
                    <TouchableOpacity style={styles.tweetButton} onPress={this._onPressTweet} disabled={this._checkDisabled()}>
                        <Text style={styles.tweetButtonText}>Tweet</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default compose(graphql(CREATE_TWEET_MUTATION), connect(mapStateToProps))(NewTweet);