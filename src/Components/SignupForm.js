import React from 'react';
import { View, StyleSheet, TouchableOpacity, Keyboard } from 'react-native';
import { graphql, compose } from 'react-apollo';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';

import { AppStyle, Colors, Images, Scale } from '../CommonConfig';
import { ButtonIcon, Button, Loader, Input } from '../Components';
import { SIGNUP_MUTATION } from '../Graphql/Mutations';
import constants from '../Utils/constants';
import { getLogin } from '../Redux/Actions';

class SignupForm extends React.Component {
    state = {
        username: '',
        email: '',
        fullName: '',
        password: '',
        loading: false
    }

    async componentDidMount() {
        const token = await AsyncStorage.getItem(constants.AUTH_TOKEN);
        console.log('token => ', token);
    }

    _onPressOutside = () => Keyboard.dismiss();

    _onPressSignup = async () => {
        this.setState({ loading: true });
        const { username, email, password, fullName } = this.state;
        const profile = constants.AVATAR_URL(Math.floor(Math.random() * 10) + 1);        

        try {
            const { data } = await this.props.mutate({
                variables: {
                    username,
                    email,
                    fullName,
                    password,
                    profile
                }
            });
            await AsyncStorage.setItem(constants.AUTH_TOKEN, data.signup.token);
            this.setState({ loading: false });
            return this.props.getLogin();
        } catch (err) {
            this.setState({ loading: false });
            alert(err.message.replace('GraphQL error: ', ''));
            throw err;
        }
    }

    _onChangeText = (key, value) => this.setState({ [key]: value });

    _checkDisabled() {
        const { username, email, fullName, password } = this.state;
        if (!username || !email || !fullName || !password) {
            return true;
        }

        return false;
    }

    render() {
        console.log('props => ', this.props);
        const { username, email, fullName, password, loading } = this.state;

        return (
            <TouchableOpacity style={styles.root} activeOpacity={1} onPress={this._onPressOutside}>
                <Loader visible={loading}/>
                <ButtonIcon icon={Images.IC_BACK} style={styles.backButton} onPress={this.props._onPressBack}/>
                <View style={styles.wrapper}>
                    <Input placeholder='Username' value={username} style={styles.input} onChangeText={value => this._onChangeText('username', value)} autoFocus/>
                    <Input placeholder='Full name' value={fullName} style={styles.input} onChangeText={value => this._onChangeText('fullName', value)}/>
                    <Input placeholder='Email' value={email} style={styles.input} onChangeText={value => this._onChangeText('email', value)}/>
                    <Input placeholder='Password' value={password} style={styles.input} onChangeText={value => this._onChangeText('password', value)} secureTextEntry/>
                    <Button title='Sign up' onPress={this._onPressSignup} style={{top: '10%', width: '90%'}} disabled={this._checkDisabled()}/>
                </View>
            </TouchableOpacity>
        );
    }
};

const styles = StyleSheet.create({
    root: {
        ...AppStyle.root,
        backgroundColor: Colors.SECONDARY,
        alignItems: 'center',
    },
    backButton: {
        position: 'absolute',
        top: Scale(15),
        left: Scale(15),
        zIndex: 1
    },
    wrapper: {
        height: '100%',
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    input: {
        marginTop: Scale(8)
    }
})

// Calling graphql API here
export default compose(graphql(SIGNUP_MUTATION), connect(undefined, { getLogin }))(SignupForm);