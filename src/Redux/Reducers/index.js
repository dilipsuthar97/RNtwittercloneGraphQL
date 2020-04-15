import { combineReducers } from 'redux';

import nav from './Navigation';
import auth from './Auth';

export default client => combineReducers({
  apollo: client.reducer(),
  nav,
  auth
});