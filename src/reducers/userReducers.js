import * as userConstants from '../constants/userConstants';

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case userConstants.USER_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case userConstants.USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        userInfo: action.payload,
      };
    case userConstants.USER_LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case userConstants.USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case userConstants.USER_REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case userConstants.USER_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        userInfo: action.payload,
      };
    case userConstants.USER_REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
