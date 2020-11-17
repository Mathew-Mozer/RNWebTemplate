import * as ActionTypes from './ActionTypes';

const newUser = {
  uid: null,
};

const defaultState = {
  errMess: null,
  user: newUser,
};

export const user = (state = defaultState, { type, payload }) => {
  switch (type) {
    case ActionTypes.UPDATE_USER_DATA:
      return { ...state, user: { ...state.user, ...payload } };
    case ActionTypes.CLEAR_DATA:
      return { ...defaultState };
    default:
      return state;
  }
};
