import { StyleSheet } from 'react-native';
import { AppStyle, Scale, Colors } from '../../CommonConfig';

export const authentication = StyleSheet.create({
    safeArea: {
        ...AppStyle.safeAreaStyle,
        backgroundColor: Colors.SECONDARY,
    },
    root: {
        ...AppStyle.root,
        backgroundColor: Colors.SECONDARY,
        position: 'relative'
    },
    buttonSignup: {
        height: Scale(75),
        width: Scale(150),
        backgroundColor: Colors.PRIMARY,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: '30%',
        right: 0,
        borderTopLeftRadius: Scale(20),
        borderBottomLeftRadius: Scale(20),
        shadowColor: Colors.BLACK,
        shadowOpacity: 0.4,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: Scale(5)
    },
    signupText: {
        color: Colors.WHITE,
        fontSize: Scale(16),
        fontWeight: 'bold'
    },
    buttonLoginContainer: {
        position: 'absolute',
        bottom: 0,
        height: Scale(80)
    }
})