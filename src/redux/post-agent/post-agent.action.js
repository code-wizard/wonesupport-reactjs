import * as types from './post-agent.types';
import client from '../baseUrl';
import * as api from '../api';

const postAgentStart = () => {
    return { type: types.POST_AGENT_START };
};
const postAgentSuccess = payload => {
    return { type: types.POST_AGENT_SUCCESS, payload };
};
const postAgentFail = payload => {
    return { type: types.POST_AGENT_FAIL, payload };
};

export const cleanupPostAgentError = () => {
    return { type: types.CLEAN_POST_AGENT_ERROR };
};


export const agentRequest = agent => {
	return (dispatch) => {
		dispatch(postAgentStart());
		return client()
		.post(`${api.POST_AGENT_API}`, agent)
		.then(response => {
			dispatch(postAgentSuccess(response.data))
		})
		.catch(error => {
			let errorResponse;
			if(error.response) {
				if(error.response.data.email) {
					errorResponse = error.response.data.email;
				}
				else if(error.response.data.phone) {
					errorResponse = error.response.data.phone;
				}
			}else {
				errorResponse = 'Something went wrong. please try again';
			}
			dispatch(postAgentFail(errorResponse));
		})
	};
};