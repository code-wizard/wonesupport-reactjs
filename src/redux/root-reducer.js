import { combineReducers } from 'redux';

// import userReducer from './user/user.reducer';
import loginReducer from './login/login.reducer'

export default combineReducers({
    // user: userReducer,
    login: loginReducer
    
})