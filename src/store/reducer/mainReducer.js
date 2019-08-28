import { combineReducers } from 'redux';
import appReducer from './app.js';
import loginReducer from './login.js';

export default combineReducers({
  appReducer,
  loginReducer
})