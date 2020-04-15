import React from 'react';
import { TouchableOpacity, View, Image, StyleSheet, ActivityIndicator, Platform, ActionSheetIOS } from 'react-native';
import { withApollo } from 'react-apollo';
import { connect, useSelector } from 'react-redux'

import { Scale, Colors } from '../CommonConfig';
import { getLogout } from '../Redux/Actions';

const AVATAR_SIZE = 30;

const HeaderAvatar = (props) => {
    console.log(props);
    const store = useSelector(store => store);  // reducer store

    const _onPressProfile = () => {
        if (Platform.OS == 'ios') {
            ActionSheetIOS.showActionSheetWithOptions({
                options: ['Cancel', 'Logout'],
                destructiveButtonIndex: 1,
                cancelButtonIndex: 0,
            }, async buttonIndex => {
                if (buttonIndex == 1) {
                    await props.client.resetStore();
                    props.getLogout();
                }
            })
        }
    }

    if (!props.auth.info) {
        return (
            <View style={styles.button}>
                <ActivityIndicator size='small' color={Colors.WHITE}/>
            </View>
        )
    }

    return (
        <TouchableOpacity style={styles.button} onPress={_onPressProfile} disabled={props.disabled}>
            <Image style={styles.avatar} source={{uri: props.auth.info.profile}}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        marginLeft: Scale(16),
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar: {
        width: Scale(AVATAR_SIZE),
        height: Scale(AVATAR_SIZE),
        borderRadius: Scale(AVATAR_SIZE / 2)
    }
});

const mapStateToProps = state => ({
    auth: state.auth
})

export default withApollo(connect(mapStateToProps, { getLogout })(HeaderAvatar));