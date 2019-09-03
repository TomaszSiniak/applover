import { GET_ORGANIZATION_INFO, GET_ORGANIZATION_INFO_ERROR, ORGANIZATION_INFO_VISIBILITY, DOOR_TYPE_MODAL_VISIBILITY } from '../actions/app';


const INITIAL_STATE = {
  organization: null,
  organizationError: false,
  organizationInfoVisiblity: false,
  doorTypeModalVisibility: false,
}
const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ORGANIZATION_INFO:
      return {
        ...state,
        organization: action.data,
        organizationError: false,
      }
    case GET_ORGANIZATION_INFO_ERROR:
      return {
        ...state,
        organization: null,
        organizationError: action.err,
      }
    case ORGANIZATION_INFO_VISIBILITY:
      return {
        ...state,
        organizationInfoVisiblity: !state.organizationInfoVisiblity,
      }
    case DOOR_TYPE_MODAL_VISIBILITY:
      return {
        ...state,
        doorTypeModalVisibility: !state.doorTypeModalVisibility,
      }
    default:
      return state
  }
}

export default appReducer;