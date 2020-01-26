import * as types from './fetch-department.types';
import client from '../baseUrl';
import * as api from '../api';

const fetchDepartmentStart = () => {
    return { type: types.FETCH_DEPARTMENT_START };
};
const fetchDepartmentSuccess = payload => {
    return { type: types.FETCH_DEPARTMENT_SUCCESS, payload };
};
const FetchDepartmentFail = payload => {
    return { type: types.FETCH_DEPARTMENT_FAIL, payload };
};

export const cleanFetchDepartmentError = () => {
    return { type: types.CLEAN_FETCH_DEPARTMENT_ERROR };
};


export const fetchAllDepartment = (search, ordering) => {
    return (dispatch) => {
        dispatch(fetchDepartmentStart());
        return client()
        .get(`${api.FETCH_DEPARTMENT_API}?search=${search}&ordering=${ordering}`)
        .then(response => {
            dispatch(fetchDepartmentSuccess(response.data))
        })
        .catch(error => {
            let errorResponse;
			if(error.response) {
                const { e } = error.response.data;
				errorResponse = e;
			}else {
				errorResponse = 'Something went wrong';
			}
			dispatch(FetchDepartmentFail(errorResponse));
        })
    }
}