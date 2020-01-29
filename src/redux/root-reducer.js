import { combineReducers } from 'redux';

import fetchAgentReducer from './fetch-agent/fetch-agent.reducer';
import loginReducer from './login/login.reducer';
import fetchDepartmentReducer from './fetch-department/fetch-department.reducer';
import postAgentReducer from './post-agent/post-agent.reducer';
import fetchSupportReducer from './support-group/support-group.reducer';

export default combineReducers({
    fetchAgent: fetchAgentReducer,
    fetchDepartment: fetchDepartmentReducer,
    login: loginReducer,
    agent: postAgentReducer,
    supportGroup: fetchSupportReducer
})