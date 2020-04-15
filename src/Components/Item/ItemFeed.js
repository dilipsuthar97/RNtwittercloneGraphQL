import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { formatDistanceToNow } from 'date-fns';

import { FeedCard } from '../Common/FeedCard';
import { AppStyle, Scale, Colors, Images } from "../../CommonConfig";
import constants from '../../Utils/constants';

const isFavorite = false;

const ItemFeed = ({ text, createdAt, likesCount, user }) => {
    return (
        <FeedCard>
            <FeedHeader>
                <View style={styles.avatarContainer}>
                    <Image source={user && user.profile ? {uri: user.profile} : Images.PLACEHOLDER} style={styles.avatar}/>
                </View>
                <View style={styles.metaContainer}>
                    <View style={styles.metaTopContainer}>
                        <Text style={styles.metaFullName}>{user.firstName} {user.lastName}</Text>
                        <Text style={[styles.metaText, { marginLeft: Scale(5) }]}>@{user.username}</Text>
                    </View>
                    <View style={styles.metaBottomContainer}>
                        <Text style={styles.metaText}>{formatDistanceToNow(new Date(createdAt), { addSuffix: true })}</Text>
                    </View>
                </View>
            </FeedHeader>
            <Content text={text}/>
            <Bottom>
                <TouchableOpacity style={styles.button}>
                    <Image source={Images.IC_BUBBLE} style={styles.buttonIcon}/>
                    <Text style={styles.buttonText}>{likesCount}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Image source={Images.IC_RETWEET} style={styles.buttonIcon}/>
                    <Text style={styles.buttonText}>{likesCount}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Image source={Images.IC_HEART} style={[styles.buttonIcon, { tintColor: isFavorite ? Colors.RED : Colors.LIGHT_GRAY }]}/>
                    <Text style={styles.buttonText}>{likesCount}</Text>
                </TouchableOpacity>
            </Bottom>
        </FeedCard>
    )
}

const FeedHeader = ({ children }) => {
    return (
        <View style={styles.header}>
            {children}
        </View>
    )
}

const Content = ({ text }) => {
    return (
        <View style={styles.content}>
            <Text style={styles.contentText}>{text}</Text>
        </View>
    )
}

const Bottom = ({ children }) => {
    return (
        <View style={styles.bottom}>
            {children}
        </View>
    )
}

const AVATAR_SIZE = 40;
const styles = StyleSheet.create({
    header: {
        height: Scale(50),
        flexDirection: 'row',
        alignItems: 'center'
    },
    avatarContainer: {
        flex: 0.2,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar: {
        height: Scale(AVATAR_SIZE),
        width: Scale(AVATAR_SIZE),
        borderRadius: Scale(AVATAR_SIZE / 2),
    },
    metaContainer: {
        flex: 1,
        alignSelf: 'stretch'
    },
    metaTopContainer: {
        flex: 1,
        alignSelf: 'stretch',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    metaBottomContainer: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    metaText: {
        fontSize: Scale(14),
        fontWeight: '600',
        color: Colors.LIGHT_GRAY
    },
    metaFullName: {
        fontSize: Scale(16),
        fontWeight: 'bold',
        color: Colors.SECONDARY
    },  
    content: {
        flex: 1,
        paddingTop: Scale(10),
        paddingRight: Scale(20),
        paddingBottom: Scale(10),
        paddingLeft: 0
    },
    contentText: {
        fontSize: Scale(14),
        color: Colors.SECONDARY,
        fontWeight: '500',
        textAlign: 'left'
    },  
    bottom: {
        height: Scale(40),
        flexDirection: 'row'
    },
    button: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: Scale(42)
    },
    buttonText: {
        fontSize: Scale(16),
        fontWeight: '600',
        color: Colors.SECONDARY
    },
    buttonIcon: {
        height: Scale(20),
        width: Scale(20),
        tintColor: Colors.LIGHT_GRAY
    },  
})

export { ItemFeed };