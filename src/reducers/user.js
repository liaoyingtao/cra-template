import * as types from '@/actionTypes';

const initialState = {
  userInfo: {}
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_USER_INFO:
      return {
        ...state
      };
    default:
      return state
  }
}