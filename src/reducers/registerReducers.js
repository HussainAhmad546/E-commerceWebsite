import{
  USER_REGISTER_SUCCESS,
  USER_REGISTER_REQUEST,
  USER_REGISTER_FAILURE,
  USER_LOGOUT
}from '../constants/registerConstant'

export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_REGISTER_REQUEST:
        return { loading: true }
      case USER_REGISTER_SUCCESS:
        return { loading: false, userInfo: action.payload }
      case USER_REGISTER_FAILURE:
        return { loading: false, error: action.payload }
      case USER_LOGOUT:
        return {}
      default:
        return state
    }
  }