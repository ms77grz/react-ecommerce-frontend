import axios from 'axios';
import * as userConstants from '../constants/userConstants';

export const loginUser = (email, password) => async dispatch => {
  try {
    dispatch({
      type: userConstants.USER_LOGIN_REQUEST,
    });

    const { data } = await axios.post(
      '/auth/local',
      {
        identifier: email,
        password,
      },
      { withCredentials: true }
    );

    dispatch({
      type: userConstants.USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: userConstants.USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const logoutUser = () => async dispatch => {
  await axios.post('/logout');
  localStorage.removeItem('userInfo');
  dispatch({ type: userConstants.USER_LOGOUT });
};

export const register = (username, email, password) => async dispatch => {
  try {
    dispatch({
      type: userConstants.USER_REGISTER_REQUEST,
    });

    const { data } = await axios.post('/auth/local/register', {
      username,
      email,
      password,
    });

    dispatch({
      type: userConstants.USER_REGISTER_SUCCESS,
      payload: data,
    });

    dispatch({
      type: userConstants.USER_LOGIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: userConstants.USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
