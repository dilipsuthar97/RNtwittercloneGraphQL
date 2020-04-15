// --------------- LIBRARIES ---------------
import React from 'react';
import { StatusBar, Keyboard } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';

// --------------- ASSETS ---------------
import { Colors, AppStyle, Images, Scale } from './CommonConfig';
import TabBar from './Components/TabBar';
import HeaderAvatar from './Components/HeaderAvatar';
import { ButtonIcon } from './Components';

// --------------- SCREENS ---------------
import AuthenticationScreen from './Screens/Auth/Authentication';
import HomeScreen from './Screens/Home/Home';
import ExplorerScreen from './Screens/Home/Explorer';
import NotificationScreen from './Screens/Home/Notification';
import ProfileScreen from './Screens/Home/Profile';
import NewTweetScreen from './Screens/Home/NewTweet';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

class AppNavigation extends React.Component {

    // --------------- LIFECYCLE ---------------
    componentDidMount() {
        StatusBar.setBarStyle('light-content');
    }

    _screenOptions = (props) => ({
        headerTintColor: Colors.WHITE,
        headerStyle: AppStyle.headerStyle,
        headerTitleStyle: AppStyle.headerTitleStyle,
        headerTitleAlign: 'center',
        gestureEnabled: true
    })

    // --------------- RENDER ---------------
    render() {
        console.log('props => ', this.props);

        return (
            <SafeAreaProvider>
                <NavigationContainer>
                    <Stack.Navigator
                        initialRouteName='Home'
                        headerMode='float'
                        screenOptions={this._screenOptions}
                    >
                        {!this.props.auth.isAuthenticated ? (
                            <>
                                <Stack.Screen name='Authentication' component={AuthenticationScreen} options={{headerShown: false}}/>
                            </>
                        ) : (
                            <>
                                <Stack.Screen name='Home' component={TabNavigator} options={({ navigation }) => ({
                                    headerLeft: ({ tintColor }) => <HeaderAvatar/>,
                                    headerRight: ({ tintColor }) => <ButtonIcon onPress={() => navigation.navigate('NewTweet')} icon={Images.IC_PENCIL} style={{marginRight: Scale(16)}}/>,
                                })}/>
                                <Stack.Screen name='NewTweet' component={NewTweetScreen} options={({ navigation }) => ({
                                    headerTitle: '',
                                    headerLeft: ({ tintColor }) => <HeaderAvatar/>,
                                    headerRight: ({ tintColor }) => <ButtonIcon onPress={() => {
                                        Keyboard.dismiss();
                                        navigation.pop();
                                    }} icon={Images.IC_CLOSE} style={{marginRight: Scale(16)}}/>,
                                })}/>
                            </>
                        )}
                    </Stack.Navigator>
                </NavigationContainer>
            </SafeAreaProvider>
        )
    }
}

const TabNavigator = (props) => {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            backBehavior='initialRoute'
            lazy={true}
            tabBar={TabBar}
        >
            <Tab.Screen name='Home' component={HomeScreen}/>
            <Tab.Screen name='Explorer' component={ExplorerScreen}/>
            <Tab.Screen name='Notification' component={NotificationScreen}/>
            <Tab.Screen name='Profile' component={ProfileScreen}/>
        </Tab.Navigator>
    )
}

const mapStateToProps = state => ({
    apollo: state.apollo,
    nav: state.nav,
    auth: state.auth
});

export default connect(mapStateToProps)(AppNavigation);