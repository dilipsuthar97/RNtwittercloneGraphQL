// --------------- LIBRARIES ---------------
import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

// --------------- ASSETS ---------------
import { Scale, Colors, Matrics } from '../../CommonConfig'

const Button = ({ title, style, titleStyle, onPress, disabled }) => {
    return (
        <TouchableOpacity style={[styles.button, style]} onPress={onPress} activeOpacity={0.6} disabled={disabled}>
            <Text style={[styles.title, titleStyle]}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        height: Scale(45),
        width: '100%',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: Scale(22.5),
        backgroundColor: Colors.PRIMARY,
        shadowColor: Colors.BLACK,
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: Scale(5)
    },
    title: {
        fontSize: Scale(16),
        fontWeight: '400',
        color: Colors.WHITE,
    }
})

export { Button }

