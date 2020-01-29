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
        .get(`${api.FETCH_POST_DEPARTMENT_API}?search=${search}&ordering=${ordering}`)
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

const getDepartmentSuccess = payload => {
    return { type: types.GET_DEPARTMENT_SUCCESS, payload };
}
const getDepartmentFail = payload => {
    return { type: types.GET_DEPARTMENT_FAIL, payload };
}

export const getDepartment = () => {
    return (dispatch) => {
        return client()
        .get(`${api.FETCH_POST_DEPARTMENT_API}`)
        .then(response => {
            let data = []
                response.data.results.map((item, index) => {
                    data = [...data, {label: item.name, value: item.name, key: index}]
            })
            dispatch(getDepartmentSuccess(data))
        })
        .catch(error => {
            let errorResponse;
			if(error.response) {
                const { e } = error.response.data;
				errorResponse = e;
			}else {
				errorResponse = 'Something went wrong';
            }
			dispatch(getDepartmentFail(errorResponse));
        })
    }
}