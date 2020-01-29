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
        case types.POST_SUPPORT_GROUP_START:
            return { ...state, isLoading: true };
        case types.POST_SUPPORT_GROUP_SUCCESS:
            return { ...state, support_group: action.payload, isLoading: false, isSuccessful: true };
        case types.POST_SUPPORT_GROUP_FAIL:
            return { ...state, error: action.payload, isLoading: false };
        case types.CLEAN_POST_SUPPORT_ERROR:
            return { ...state, error: null, isLoading: false, isSuccessful: false };
        default:
            return state;
    }
}

export default fetchSupportReducer;