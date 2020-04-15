import React from 'react';
import { View, Text } from 'react-native';

import { explorer } from './styles';

class Profile extends React.Component {
    render() {
        return (
            <View style={explorer.root}>
                <Text>Profile</Text>
            </View>
        )
    }
}

export default Profile;