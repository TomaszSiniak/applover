import axios from 'axios';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const TOGGLE_ERROR_MESSAGE = 'TOGGLE_ERROR_MESSAGE';

export const loginUser = data => dispatch => {

  axios.post('https://bench-api.applover.pl/api/v1/login', data)
    .then(() => dispatch({
      type: LOGIN_SUCCESS,
    }))
    .catch(err => {
      dispatch({ type: LOGIN_ERROR, err });
      dispatch({ type: TOGGLE_ERROR_MESSAGE })
    });
}

export const toggleErrorMessage = () => {
  return {
    type: TOGGLE_ERROR_MESSAGE,
  }
}