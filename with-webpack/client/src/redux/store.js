import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import tableDataReducer from './reducers/tableDataReducer';
import { middleware1 } from './middlewares';

const reducer = combineReducers({ tableDataReducer });

const store = createStore(reducer , applyMiddleware(middleware1 , thunk));
window.store = store;
export default store;