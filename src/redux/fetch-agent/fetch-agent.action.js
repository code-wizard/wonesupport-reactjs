import * as types from './fetch-agent.types';
import client from '../baseUrl';
import * as api from '../api';

const fetchAgentStart = () => {
    return { type: types.FETCH_AGENT_START };
};
const fetchAgentSuccess = payload => {
    return { type: types.FETCH_AGENT_SUCCESS, payload };
};
const fetchAgentFail = payload => {
    return { type: types.FETCH_AGENT_FAIL, payload };
};

export const cleanfetchAgentError = () => {
    return { type: types.CLEAN_FETCH_AGENT_ERROR };
};


export const fetchAllAgent = (search, ordering) => {
    return (dispatch) => {
        dispatch(fetchAgentStart());
        return client()
        .get(`${api.FETCH_AGENT_API}?search=${search}&ordering=${ordering}`)
        .then(response => {
            dispatch(fetchAgentSuccess(response.data))
        })
        .catch(error => {
            let errorResponse;
			if(error.response) {
                const { e } = error.response.data;
				errorResponse = e;
			}else {
				errorResponse = 'Something went wrong';
			}
			dispatch(fetchAgentFail(errorResponse));
        })
    }
}