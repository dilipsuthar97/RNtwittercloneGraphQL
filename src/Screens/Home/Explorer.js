import React from 'react';
import { View, Text } from 'react-native';

import { explorer } from './styles';

class Explorer extends React.Component {
    render() {
        return (
            <View style={explorer.root}>
                <Text>Explorer</Text>
            </View>
        )
    }
}

export default Explorer;