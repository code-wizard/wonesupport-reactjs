import * as types from './support-group.types';
import client from '../baseUrl';
import * as api from '../api';


const getSupportGroupSuccess = payload => {
    return { type: types.GET_SUPPORT_GROUP_SUCCESS, payload };
}
const getSupportGroupFail = payload => {
    return { type: types.GET_SUPPORT_GROUP_FAIL, payload };
}


export const getSupportGroup = (department_name) => {
    return (dispatch) => {
        return client()
        .get(`${api.GET_SUPPORT_GROUP_API}${department_name}`,)
        .then(response => {
            let data = []
                response.data.map((item, index) => {
                    data = [...data, {label: item.support_channel, value: item.id, key: index}]
            })
            dispatch(getSupportGroupSuccess(data))
        })
        .catch(error => {
            let errorResponse;
			if(error.response) {
                const { e } = error.response.data;
				errorResponse = e;
			}else {
				errorResponse = 'Something went wrong';
            }
			dispatch(getSupportGroupFail(errorResponse));
        })
    }
}


const postSupportGroupStart = () => {
    return { type: types.POST_SUPPORT_GROUP_START };
}
const postSupportGroupSuccess = payload => {
    return { type: types.POST_SUPPORT_GROUP_SUCCESS, payload };
}
const postSupportGroupFail = payload => {
    return { type: types.POST_SUPPORT_GROUP_FAIL, payload };
}

export const cleanupPostSupportError = () => {
    return { type: types.CLEAN_POST_SUPPORT_ERROR };
};

export const supportGroupRequest = support_group => {
    return (dispatch) => {
        dispatch(postSupportGroupStart());
        return client()
        .post(`${api.GET_SUPPORT_GROUP_API}`, support_group)
        .then(response => {
            dispatch(postSupportGroupSuccess(response.data))
        })
        .catch(error => {
            let errorResponse;
			if(error.response) {
                const { e } = error.response.data;
				errorResponse = e;
			}else {
				errorResponse = 'Something went wrong';
            }
			dispatch(postSupportGroupFail(errorResponse));
        })
    }
}