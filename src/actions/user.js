import callAPI from '@/helpers/callAPI';
import * as types from '@/actionTypes';

export const getUserInfo = (params) => dispatch => {
  return callAPI('/driver/order/contact', params).then(res => {
    if (res.code === 0) {
      window.location.href = '/#/login';
      return;
    }

    dispatch({
      type: types.GET_USER_INFO,
      data: res
    });
  });
};