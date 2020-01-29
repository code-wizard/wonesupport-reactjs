import * as types from './post-department.types';
import client from '../baseUrl';
import * as api from '../api';

const postDepartmentStart = () => {
    return { type: types.POST_DEPARTMENT_START };
};
const postDepartmentSuccess = payload => {
    return { type: types.POST_DEPARTMENT_SUCCESS, payload };
};
const postDepartmentFail = payload => {
    return { type: types.POST_DEPARTMENT_FAIL, payload };
};

export const cleanupPostDepartmentError = () => {
    return { type: types.CLEAN_POST_DEPARTMENT_ERROR };
};


export const departmentRequest = department => {
	return (dispatch) => {
		dispatch(postDepartmentStart());
		return client()
		.post(`${api.FETCH_POST_DEPARTMENT_API}`, department)
		.then(response => {
			dispatch(postDepartmentSuccess(response.data))
		})
		.catch(error => {
			let errorResponse;
			if(error.response) {
				errorResponse = error.response;
			}else {
				errorResponse = 'Something went wrong. please try again';
			}
			dispatch(postDepartmentFail(errorResponse));
		})
	};
};