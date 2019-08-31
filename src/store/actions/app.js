import axios from 'axios';
import { ORGANIZATION_URL } from '../../common/const/const';
import { organizationConfig } from '../../config/organizationConfig'
export const GET_ORGANIZATION_INFO = 'GET_ORGANIZATION_INFO';
export const GET_ORGANIZATION_INFO_ERROR = 'GET_ORGANIZATION_INFO_ERROR';
export const ORGANIZATION_INFO_VISIBILITY = 'ORGANIZATION_INFO_VISIBILITY';



export const getOrganizationInfo = () => dispatch => {
  axios.get(ORGANIZATION_URL, organizationConfig)
    .then(res => {
      const data = res.data
      dispatch({type: GET_ORGANIZATION_INFO, data })
    })
    .catch(err => {
      dispatch({ type: GET_ORGANIZATION_INFO, err})
    })
}

export const toggleOrganizationVisibility = () => {
  return {
    type: ORGANIZATION_INFO_VISIBILITY
  }
}