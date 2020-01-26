import * as types from './fetch-department.types'

const agent = {
    isLoading: false,
    error: null,
    isSuccessful: false,
    department: {}
}

const fetchDepartmentReducer = (state = agent, action) => {
    switch (action.type) {
        case types.FETCH_DEPARTMENT_START:
            return { ...state, isLoading: true };
        case types.FETCH_DEPARTMENT_SUCCESS:
            return { ...state, department: action.payload, isLoading: false, isSuccessful: true };
        case types.FETCH_DEPARTMENT_FAIL:
            return { ...state, error: action.payload, isLoading: false };
        case types.CLEAN_FETCH_DEPARTMENT_ERROR:
            return { ...state, error: null, isLoading: false, isSuccessful: false };
        default:
            return state;
    }
}

export default fetchDepartmentReducer;