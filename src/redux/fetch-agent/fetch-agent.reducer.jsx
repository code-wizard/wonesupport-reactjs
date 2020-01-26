import * as types from './fetch-agent.types'

const agent = {
    isLoading: false,
    error: null,
    isSuccessful: false,
    agent: {}
}

const fetchAgentReducer = (state = agent, action) => {
    switch (action.type) {
        case types.FETCH_AGENT_START:
            return { ...state, isLoading: true };
        case types.FETCH_AGENT_SUCCESS:
            return { ...state, agent: action.payload, isLoading: false, isSuccessful: true };
        case types.FETCH_AGENT_FAIL:
            return { ...state, error: action.payload, isLoading: false };
        case types.CLEAN_FETCH_AGENT_ERROR:
            return { ...state, error: null, isLoading: false, isSuccessful: false };
        default:
            return state;
    }
}

export default fetchAgentReducer;