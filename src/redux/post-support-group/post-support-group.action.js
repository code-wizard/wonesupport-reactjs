import * as types from './post-support-group.types';
import client from '../baseUrl';
import * as api from '../api';



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
				errorResponse = error.response.data;
			}else {
				errorResponse = 'Something went wrong';
            }
			dispatch(postSupportGroupFail(errorResponse));
        })
    }
}