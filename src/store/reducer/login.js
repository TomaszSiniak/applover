import { LOGIN_SUCCESS, LOGIN_ERROR, TOGGLE_ERROR_MESSAGE } from '../actions/login';

const INITIAL_STATE = {
  logged: false,
  error: false,
  errorStatus: null,
  isErrorMessageVisible: false,
}
const loginReducer = (state = INITIAL_STATE, action) => {
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
    case TOGGLE_ERROR_MESSAGE:
        return {
          ...state,
          isErrorMessageVisible: !state.isErrorMessageVisible,
        }
    default:
      return state
  }
}

export default loginReducer;