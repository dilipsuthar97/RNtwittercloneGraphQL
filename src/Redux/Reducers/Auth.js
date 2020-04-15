import { LOGIN, SAVE_USER_INFO, LOGOUT } from '../Types';

const INITIAL_STATE = {
    isAuthenticated: false,
    info: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN:
            return { ...state, isAuthenticated: true };
        case SAVE_USER_INFO:
            return { ...state, info: action.payload };
        case LOGOUT:
            return INITIAL_STATE;
        default:
            return state;
    }
};