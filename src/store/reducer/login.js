import { LOGIN_SUCCESS, LOGIN_ERROR, ADD_ERROR_MESSAGE, CLEAR_ERROR_MESSAGE, TOGGLE_PROGRESS_BAR_MODAL } from '../actions/login';

const INITIAL_STATE = {
  logged: false,
  error: false,
  errorStatus: null,
  isErrorMessageVisible: false,
  isProgressBarVisible: false,
}
const login = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        logged: true,
        error: false,
      }
    case LOGIN_ERROR:
      return {
        ...state,
        logged: false,
        error: true,
        errorStatus: action.err.response.status,
      }
    case ADD_ERROR_MESSAGE:
      return {
        ...state,
        isErrorMessageVisible: action.value,
      }
    case CLEAR_ERROR_MESSAGE:
      return {
        ...state,
        isErrorMessageVisible: action.value,
      }
    case TOGGLE_PROGRESS_BAR_MODAL:
      return {
        ...state,
        isProgressBarVisible: !state.isProgressBarVisible,
      }
    default:
      return state
  }
}

export default login;