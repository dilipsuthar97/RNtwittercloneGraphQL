import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import { Colors, Scale } from '../../CommonConfig';

const Input = ({ placeholder, value, onChangeText, autoFocus, placeholderColor, style, secureTextEntry }) => {
    return (
        <View style={[styles.root, style]}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor={placeholderColor || Colors.LIGHT_GRAY}
                value={value}
                onChangeText={onChangeText}
                autoCapitalize='none'
                autoCompleteType='off'
                autoFocus={autoFocus}
                secureTextEntry={secureTextEntry}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        borderBottomColor: Colors.WHITE,
        borderBottomWidth: Scale(1)
    },
    input: {
        width: '100%',
        fontSize: Scale(16),
        color: Colors.WHITE,
        paddingTop: Scale(12),
        paddingRight: 0,
        paddingBottom: Scale(12),
        paddingLeft: 0,
    }
});

export { Input };