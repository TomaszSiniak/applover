import { combineReducers } from 'redux';
import app from './app.js';
import login from './login.js';

export default combineReducers({
  app,
  login
})