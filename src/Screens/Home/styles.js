import { StyleSheet } from 'react-native';
import { AppStyle } from '../../CommonConfig';

import { Scale, Colors } from '../../CommonConfig';

export const home = StyleSheet.create({
    safeArea: AppStyle.safeAreaStyle,
    root: AppStyle.root
})

export const explorer = StyleSheet.create({
    safeArea: AppStyle.safeAreaStyle,
    root: {
        ...AppStyle.root,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

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
})