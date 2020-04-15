import React from 'react';
import { View, Text } from 'react-native';

import { explorer } from './styles';

class Notification extends React.Component {
    render() {
        return (
            <View style={explorer.root}>
                <Text>Notification</Text>
            </View>
        )
    }
}

export default Notification;