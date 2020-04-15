import React from 'react';
import { ActivityIndicator, Modal, StyleSheet, View } from 'react-native';

import { Colors, Scale } from '../../CommonConfig';

const Loader = ({ visible }) => {
    return (
        <Modal
            visible={visible}
            animationType='fade'
            transparent
        >
            <View style={styles.container}>
                <ActivityIndicator size='large' color={Colors.PRIMARY}/>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.OVERLAY_DARK_60,
        flex: 1
    },
});

export { Loader };