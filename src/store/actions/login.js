import axios from 'axios';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const ADD_ERROR_MESSAGE = 'ADD_ERROR_MESSAGE';
export const CLEAR_ERROR_MESSAGE = 'CLEAR_ERROR_MESSAGE';
export const TOGGLE_PROGRESS_BAR_MODAL = 'TOGGLE_PROGRESS_BAR_MODAL';
import { LOGIN_URL } from  '../../common/const/const';

export const loginUser = data => dispatch => {
  const user = {
    email: data.email,
    password: data.password
  }
  axios.post(LOGIN_URL, user)
    .then((res) => {

      localStorage.setItem('token', res.data.token);
      
      dispatch({ type: LOGIN_SUCCESS })
      dispatch({ type: CLEAR_ERROR_MESAGE }, false)
    
    })
    .catch(err => {
      const value = true;
      dispatch({ type: LOGIN_ERROR, err });
      dispatch({ type: ADD_ERROR_MESSAGE, value })
    });
}

export const addErrorMessage = value => {
  return {
    type: ADD_ERROR_MESSAGE,
    value
  }
}

export const clearErrorMessage = value => {
  return {
    type: CLEAR_ERROR_MESSAGE,
    value
  }
}

export const toggleProgressBar = () => {
  return {
    type: TOGGLE_PROGRESS_BAR_MODAL,
  }
}