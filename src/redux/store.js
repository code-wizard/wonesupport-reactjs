import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

/** Import the combineReducer */
import rootReducer from './root-reducer';

const middlewares = [logger];

/** Connect our store to the combineReducer */
const store = createStore(rootReducer, applyMiddleware(...middlewares, thunk));

export default store;
