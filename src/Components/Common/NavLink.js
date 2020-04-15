import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import { Colors, Scale } from '../../CommonConfig';

const NavLink = ({ title, routeName, color, style }) => {
    const navigation = useNavigation();
    const hitSlop = 15

    return(
        <TouchableOpacity 
            hitSlop={{left: hitSlop, right: hitSlop, top: hitSlop, bottom: hitSlop}}
            style={{flexDirection: 'row'}} 
            onPress={() => routeName ? navigation.navigate(routeName) : {}}
            activeOpacity={0.5}
        >
            <Text style={[styles.title, { color }, style]}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    title: {
        color: Colors.BLACK,
        fontSize: Scale(14),
    }
});

export { NavLink };