import { SET_USER_LOGIN, SET_USER_LOGOUT, SET_USER_DATABASE, SET_CHANGE_SETTING } from './constants';

export const setUserLogin = (payLoad) => ({ type: SET_USER_LOGIN, payLoad });
export const setUserLogout = (payLoad) => ({ type: SET_USER_LOGOUT, payLoad });
export const setUserDatabase = (payLoad) => ({ type: SET_USER_DATABASE, payLoad });
export const setChangeSetting = (payLoad) => ({ type: SET_CHANGE_SETTING, payLoad });
