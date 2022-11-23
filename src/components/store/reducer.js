import { SET_USER_LOGIN, SET_USER_LOGOUT } from './constants';

const initState = {
    userEmail: '',
    userPassword: '',
    login: false,
};

function reducer(state, action) {
    switch (action.type) {
        case SET_USER_LOGIN:
            return {
                ...action.payLoad,
                login: true,
            };

        case SET_USER_LOGOUT:
            return { ...initState };

        default:
            throw new Error('Invalid action type: ' + action.type);
    }
}

export { initState };
export default reducer;
