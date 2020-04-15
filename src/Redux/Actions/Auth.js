import { LOGIN, SAVE_USER_INFO, LOGOUT } from '../Types';
import AsyncStorage from '@react-native-community/async-storage';

import constants from '../../Utils/constants';

export const getLogin = (params) => {
    console.log('params in action -----------------------------------', params)
    return {
        type: LOGIN
    }
}

export const getSaveUserInfo = (params) => {
    console.log('params in action -----------------------------------', params)
    return {
        type: SAVE_USER_INFO,
        payload: params.info
    }
}

export const getLogout = (params) => {
    console.log('params in action -----------------------------------', params)
    return async dispatch => {
        try {
            await AsyncStorage.removeItem(constants.AUTH_TOKEN);
            return dispatch({
                type: LOGOUT
            });
        } catch (err) {
            throw err;
        }
    }
}