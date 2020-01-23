import * as types from './login.types';


const login = {
    isLoading: false,
    error: null,
    isSuccessful: false,
    user: {}
  };

const loginReducer = (state = login, action) => {
  switch (action.type) {
    case types.USER_LOGIN_START:
      return { ...state, isLoading: true };
    case types.USER_LOGIN_SUCCESS:
      return { ...state, user: action.payload, isLoading: false, isSuccessful: true };
    case types.USER_LOGIN_FAIL:
      return { ...state, error: action.payload, isLoading: false };
    case types.CLEAN_UP_LOGIN_ERROR:
      return { ...state, error: null, isLoading: false, isSuccessful: false };
    default:
      return state;
  }
};

export default loginReducer;
