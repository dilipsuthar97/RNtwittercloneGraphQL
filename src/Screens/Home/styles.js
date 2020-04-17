import { StyleSheet } from 'react-native';
import { AppStyle } from '../../CommonConfig';

import { Scale, Colors } from '../../CommonConfig';

export const home = StyleSheet.create({
    safeArea: AppStyle.safeAreaStyle,
    root: {
        ...AppStyle.root,
    }
});

export const explorer = StyleSheet.create({
    safeArea: AppStyle.safeAreaStyle,
    root: {
        ...AppStyle.root,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export const newTweet = StyleSheet.create({
    safeArea: {
        ...AppStyle.safeAreaStyle,
        alignItems: 'center'
    },
    wrapper: {
        height: '80%',
        width: '90%',
        paddingTop: Scale(5),
        position: 'relative'
    },
    input: {
        height: '40%',
        fontSize: Scale(18),
        color: Colors.SECONDARY
    },
    tweetButton: {
        height: Scale(40),
        width: Scale(80),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.PRIMARY,
        borderRadius: Scale(20),
        position: 'absolute',
        top: '60%',
        right: 0
    },
    tweetButtonText: {
        color: Colors.WHITE,
        fontSize: Scale(16)
    },
    textLength: {
        color: Colors.PRIMARY,
        fontSize: Scale(18),
        position: 'absolute',
        right: 0,
        top: '45%'
    }
});

const AVATAR_SIZE = Scale(60);
export const profile = StyleSheet.create({
    safeArea: AppStyle.safeAreaStyle,
    header: {
        backgroundColor: Colors.WHITE,
        shadowColor: Colors.SECONDARY,
        shadowOffset: { width: 0, height: Scale(2) },
        shadowOpacity: 0.2,
        elevation: 2,
        zIndex: 1
    },
    heading: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingTop: Scale(16),
        paddingRight: Scale(16),
        paddingLeft: Scale(16),
    },
    avatar: {
        width: AVATAR_SIZE,
        height: AVATAR_SIZE,
        borderRadius: AVATAR_SIZE / 2,
        borderWidth: Scale(2),
        borderColor: Colors.PRIMARY
    },
    usernameContainer: {
        flex: 1,
        alignSelf: 'stretch',
        marginLeft: Scale(8)
    },
    fullName: {
        fontSize: Scale(18),
        fontWeight: 'bold',
        color: Colors.SECONDARY
    },
    username: {
        fontSize: Scale(14),
        color: Colors.GRAY,
        marginTop: Scale(5)
    },
    metaContainer: {
        flexDirection: 'row',
    },
    metaBox: {
        padding: Scale(16),
        flex: 0.5,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    metaText: {
        fontSize: Scale(16),
        color: Colors.SECONDARY
    },
    metaCount: {
        fontSize: Scale(16),
        color: Colors.PRIMARY,
    }
});