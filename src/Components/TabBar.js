// =======>>>>>>>> LIBRARIES <<<<<<<<=======
import React from 'react';
import { TouchableOpacity, Animated, View, Text } from 'react-native';

// =======>>>>>>>> ASSETS <<<<<<<<=======
import { Colors, Scale, Images } from '../CommonConfig';

global.springValue1 = new Animated.Value(0.9)
global.springValue2 = new Animated.Value(0.8)
global.springValue3 = new Animated.Value(0.8)
global.springValue4 = new Animated.Value(0.8)

const TabBar = ({ state, descriptors, navigation }) => {
    return (
        <View style={{ flexDirection: 'row', height: Scale(56), backgroundColor: Colors.WHITE, alignItems: 'center', shadowColor: Colors.GRAY, shadowOpacity: 0.2}}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;
                const spring = (val) => {
                    global.springValue1.setValue(0.8)
                    global.springValue2.setValue(0.8)
                    global.springValue3.setValue(0.8)
                    global.springValue4.setValue(0.8)
                    if (val == 0) {
                        Animated.spring(
                            global.springValue1,
                            {
                                toValue: 0.9,
                                friction: 1
                            }
                        ).start()
                    } else if (val == 1) {
                        Animated.spring(
                            global.springValue2,
                            {
                                toValue: 0.9,
                                friction: 1
                            }
                        ).start()
                    } else if (val == 2) {
                        Animated.spring(
                            global.springValue3,
                            {
                                toValue: 0.9,
                                friction: 1
                            }
                        ).start()
                    } else if (val == 3) {
                        Animated.spring(
                            global.springValue4,
                            {
                                toValue: 0.9,
                                friction: 1
                            }
                        ).start()
                    }
                }
                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                    });
                    spring(index)
                    console.log(index, "indexindex")
                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                        // if (route.name == 'Settings') {
                        //     navigation.openDrawer();
                        // } else {
                        //     navigation.navigate(route.name);
                        // }
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityStates={isFocused ? ['selected'] : []}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        activeOpacity={0.4}
                        onLongPress={onLongPress}
                        style={{ flex: 1, height: Scale(45), justifyContent: 'center', alignItems: 'center' }}
                    >
                        {index == 0 && <Animated.Image source={Images.IC_HOME} style={[{ height: isFocused ? Scale(28) : Scale(24), width: isFocused ? Scale(28) : Scale(24), tintColor: isFocused ? Colors.PRIMARY : Colors.GRAY }, global.springValue1 ? { transform: [{ scale: global.springValue1 }] } : {}]} resizeMode={'contain'} />}
                        {index == 1 && <Animated.Image source={Images.IC_SEARCH} style={[{ height: isFocused ? Scale(28) : Scale(24), width: isFocused ? Scale(28) : Scale(24), tintColor: isFocused ? Colors.PRIMARY : Colors.GRAY}, global.springValue2 ? { transform: [{ scale: global.springValue2 }] } : {}]} resizeMode={'contain'} />}
                        {index == 2 && <Animated.Image source={Images.IC_NOTIFICATION} style={[{ height: isFocused ? Scale(28) : Scale(24), width: isFocused ? Scale(28) : Scale(24), tintColor: isFocused ? Colors.PRIMARY : Colors.GRAY}, global.springValue3 ? { transform: [{ scale: global.springValue3 }] } : {}]} resizeMode={'contain'} />}
                        {index == 3 && <Animated.Image source={Images.IC_PROFILE} style={[{ height: isFocused ? Scale(28) : Scale(24), width: isFocused ? Scale(28) : Scale(24), tintColor: isFocused ? Colors.PRIMARY : Colors.GRAY}, global.springValue4 ? { transform: [{ scale: global.springValue4 }] } : {}]} resizeMode={'contain'} />}

                        {/*------>>>>>> IF YOU WANT TO DISPLAY LABELS UNDER TAB ICON ENABLE THIS BELOW LINE <<<<<<--------*/}
                        {/* <Text style={{ color: isFocused ? Colors.BLACK : Colors.GRAY, fontSize: isFocused ? Scale(14) : Scale(12) }}>
                            {label}
                        </Text> */}
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

export default TabBar;