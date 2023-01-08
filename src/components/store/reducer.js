import { SET_USER_LOGIN, SET_USER_LOGOUT, SET_USER_DATABASE, SET_CHANGE_SETTING } from './constants';
import { handlerGetUserDataLogin } from '~/handler';

const initState = {
    userEmail: '',
    userPassword: '',
    config: {
        setNoticeChap: 'on',
        setInteractive: 'on',
        setReading: 'new-read',
        setTicked: 'new-tick',
    },
    defaults: {
        themes: 4,
        fontFamily: 0,
        fontSize: 22,
        widthContent: 1000,
        paddingWord: 120,
    },
    login: false,
    userData() {
        if (this.login) {
            const user = handlerGetUserDataLogin({ userEmail: this.userEmail, userPassword: this.userPassword });
            return user;
        }

        return {};
    },
};

function reducer(state, action) {
    switch (action.type) {
        case SET_USER_LOGIN:
            return {
                ...state,
                ...action.payLoad,
                login: true,
            };

        case SET_USER_LOGOUT:
            return { ...initState, defaults: state.defaults };

        case SET_USER_DATABASE:
            return { ...state, ...action.payLoad };

        case SET_CHANGE_SETTING:
            return { ...state, defaults: { ...state.defaults, [action.payLoad.type]: +action.payLoad.value } };

        default:
            throw new Error('Invalid action type: ' + action.type);
    }
}

export { initState };
export default reducer;
