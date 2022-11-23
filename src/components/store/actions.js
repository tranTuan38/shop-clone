import { SET_USER_LOGIN, SET_USER_LOGOUT } from './constants';

export const setUserLogin = (payLoad) => ({ type: SET_USER_LOGIN, payLoad });
export const setUserLogout = (payLoad) => ({ type: SET_USER_LOGOUT, payLoad });
