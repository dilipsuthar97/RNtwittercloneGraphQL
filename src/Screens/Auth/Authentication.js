// --------------- LIBRARIES ---------------
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

// --------------- ASSETS ---------------
import { authentication as auth } from './styles';
import SignupForm from '../../Components/SignupForm';
import { Spacer, NavLink } from '../../Components';
import { Colors, Scale } from '../../CommonConfig';
import { AuthType } from '../../Utils/constants';
import LoginForm from '../../Components/LoginForm';

const INITIAL_STATE = {
    showSignup: false,
    showLogin: false
}

class Authentication extends React.Component {

    // --------------- STATE ---------------
    state = INITIAL_STATE;

    // --------------- METHODS ---------------
    _onPressSignup = () => this.setState({ showSignup: true });
    _onPressLogin = () => this.setState({ showLogin: true });
    _onPressBack = () => this.setState({ ...INITIAL_STATE });

    // --------------- RENDER ---------------
    render() {
        return (
            <SafeAreaView style={auth.safeArea}>
                <View style={auth.root}>
                    {this.state.showSignup ? (
                        <SignupForm _onPressBack={this._onPressBack}/>
                    ) : this.state.showLogin ? (
                        <LoginForm _onPressBack={this._onPressBack}/>
                    ) : <>
                        <TouchableOpacity style={auth.buttonSignup} onPress={this._onPressSignup}>
                            <Text style={auth.signupText}>Get Started</Text>
                        </TouchableOpacity>
                        <Spacer style={auth.buttonLoginContainer}>
                            <NavLink onPress={this._onPressLogin} title='Already have an account?' color={Colors.WHITE}/>
                        </Spacer>
                    </>
                    }
                </View>
            </SafeAreaView>
        );
    }
}

export default Authentication;