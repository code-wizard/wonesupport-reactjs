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