import * as types from './post-department.types';


const department = {
    isLoading: false,
    error: null,
    isSuccessful: false,
    department: {}
  };

const postDepartmentReducer = (state = department, action) => {
  switch (action.type) {
    case types.POST_DEPARTMENT_START:
      return { ...state, isLoading: true };
    case types.POST_DEPARTMENT_SUCCESS:
      return { ...state, user: action.payload, isLoading: false, isSuccessful: true };
    case types.POST_DEPARTMENT_FAIL:
      return { ...state, error: action.payload, isLoading: false };
    case types.CLEAN_POST_DEPARTMENT_ERROR:
      return { ...state, error: null, isLoading: false, isSuccessful: false };
    default:
      return state;
  }
};

export default postDepartmentReducer;
