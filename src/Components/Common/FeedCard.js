import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Colors, Scale } from '../../CommonConfig';

const FeedCard = ({ children, style }) => {
    return (
        <View style={[styles.card, style]}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: Colors.WHITE,
        width: '100%',
        minHeight: Scale(180),
        padding: Scale(7),
        shadowColor: Colors.SECONDARY,
        marginVertical: Scale(5),
        shadowOffset: { width: 0, height: Scale(2) },
        shadowOpacity: 0.2,
        elevation: 2
    }
})

export { FeedCard };