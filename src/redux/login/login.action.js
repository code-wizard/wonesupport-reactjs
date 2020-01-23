import * as types from './login.types';
import client from '../baseUrl';
import * as api from '../api';

const loginStart = () => {
    return { type: types.USER_LOGIN_START };
};
const loginSuccess = payload => {
    return { type: types.USER_LOGIN_SUCCESS, payload };
};
const loginFail = payload => {
    return { type: types.USER_LOGIN_FAIL, payload };
};

export const cleanupLoginError = () => {
    return { type: types.CLEAN_UP_LOGIN_ERROR };
};


export const loginRequest = user => {
	return (dispatch) => {
		dispatch(loginStart());
		return client()
		.post(`${api.LOGIN_API}`, user)
		.then(response => {
			dispatch(loginSuccess(response.data))
		})
		.catch(error => {
			let errorResponse;
			if(error.response) {
				errorResponse = 'Invalid login credentials provided';
			}else {
				errorResponse = 'Something went wrong. please try again';
			}
			dispatch(loginFail(errorResponse));
		})
	};
};