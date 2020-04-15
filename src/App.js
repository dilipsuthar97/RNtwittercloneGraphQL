// --------------- LIBRARIES ---------------
import 'react-native-gesture-handler';
import React from "react";
import { UIManager } from "react-native";
import { ApolloProvider } from 'react-apollo';
import { Provider as ReduxProvider } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

// --------------- ASSETS ---------------
import AppNavigation from './AppNavigation';
import { store, client } from "./Redux/Store";
import { getLogin } from './Redux/Actions';
import constants from './Utils/constants';

if (UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

class App extends React.Component {

  // --------------- LIFECYCLE ---------------
  componentDidMount() {
    console.disableYellowBox = true;
    this._tryLocalLogin();
  }

  // --------------- METHODS ---------------
  _tryLocalLogin = async () => {
    try {
      const token = await AsyncStorage.getItem(constants.AUTH_TOKEN);
      if (token != null) {
        store.dispatch(getLogin());
      }
    } catch (err) {
      alert(err.message);
      throw err;
    }
  }

  // --------------- RENDER ---------------
  render() {
    return (
      <ApolloProvider client={client}>
        <ReduxProvider store={store}>
          <AppNavigation/>
        </ReduxProvider>
      </ApolloProvider>
    )
  }
}

export default App;