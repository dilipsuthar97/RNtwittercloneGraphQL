import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

import { Scale, Colors } from '../../CommonConfig';

const hitSlop = 15

const ButtonIcon = ({key, style, onPress, icon, iconStyle, disabled}) => {
    return <TouchableOpacity key={key} style={style} onPress={onPress} disabled={disabled} hitSlop={{top: hitSlop, bottom: hitSlop, left: hitSlop, right: hitSlop}}>
        <Image source={icon} style={[styles.icon, iconStyle]}/>
    </TouchableOpacity>;
}

const styles = StyleSheet.create({
    icon: {
        height: Scale(30),
        width: Scale(30),
        resizeMode: 'contain',
        tintColor: Colors.WHITE,
    }
});

export { ButtonIcon };