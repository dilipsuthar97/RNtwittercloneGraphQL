import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ApolloClient,  { createNetworkInterface } from "apollo-client";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import AsyncStorage from '@react-native-community/async-storage';
import { SubscriptionClient, addGraphQLSubscriptions } from 'subscriptions-transport-ws';

import reducers from './Reducers';
import constants from '../Utils/constants';

//TODO: implement redux-persist

// Create regular NetworkInterface by using apollo-client's API:
const networkInterface = createNetworkInterface({
  uri: 'http://localhost:3000/graphql',
});

// Create WebSocket client
const wsClient = new SubscriptionClient('ws://localhost:3000/subscriptions', {
  reconnect: true,
  connectionParams: {}
});

// Headers configuration
networkInterface.use([{
  async applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {};
    }
    try {
      req.options.headers.accesskey = constants.ACCESS_KEY;
      const token = await AsyncStorage.getItem(constants.AUTH_TOKEN);
      if (token != null) {
        req.options.headers.authorization = `Bearer ${token}`;
      }
    } catch (err) {
      throw err;
    }

    return next();
  }
}]);

// Extend the network interface with the WebSocket
const networkInterfaceWithSubscriptions = addGraphQLSubscriptions(
  networkInterface,
  wsClient
);

export const client = new ApolloClient({
  networkInterface: networkInterfaceWithSubscriptions
});

const middlewares = [];
const enhancers = [];
middlewares.push(client.middleware(), thunk, logger);
enhancers.push(applyMiddleware(...middlewares));

export const store = createStore(
  reducers(client),
  undefined,
  composeWithDevTools(...enhancers),
  // compose(...enhancers),
);