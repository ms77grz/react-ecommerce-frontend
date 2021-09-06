import axios from 'axios';
import * as userConstants from '../constants/userConstants';

export const login = (email, password) => async dispatch => {
  try {
    dispatch({
      type: userConstants.USER_LOGIN_REQUEST,
    });

    const { data } = await axios.post('/users/login');
  } catch (error) {
    dispatch({
      type: userConstants.USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
