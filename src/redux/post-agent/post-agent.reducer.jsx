import * as types from './post-agent.types';


const agent = {
    isLoading: false,
    error: null,
    isSuccessful: false,
    agent: {}
  };

const postAgentReducer = (state = agent, action) => {
  switch (action.type) {
    case types.POST_AGENT_START:
      return { ...state, isLoading: true };
    case types.POST_AGENT_SUCCESS:
      return { ...state, agentData: action.payload, isLoading: false, isSuccessful: true };
    case types.POST_AGENT_FAIL:
      return { ...state, error: action.payload, isLoading: false };
    case types.CLEAN_POST_AGENT_ERROR:
      return { ...state, error: null, isLoading: false, isSuccessful: false };
    default:
      return state;
  }
};

export default postAgentReducer;
