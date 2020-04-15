import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Scale } from '../../CommonConfig';

const Spacer = ({ children, style, space }) => {
    return <View style={[{padding: space ? Scale(space) : Scale(12), justifyContent: 'center', width: '100%', alignItems: 'center'}, style]}>
        { children }
    </View>
}
export { Spacer };