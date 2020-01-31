import * as types from './support-group.types';

const supportGroup = {
    isLoading: false,
    error: null,
    isSuccessful: false,
    support_group: {}
}

const fetchSupportReducer = (state = supportGroup, action) => {
    switch (action.type) {
        case types.GET_SUPPORT_GROUP_SUCCESS:
            return { ...state, support_group: action.payload, isLoading: false, isSuccessful: true };
        case types.GET_SUPPORT_GROUP_FAIL:
            return { ...state, error: action.payload, isLoading: false };
        default:
            return state;
    }
}

export default fetchSupportReducer;