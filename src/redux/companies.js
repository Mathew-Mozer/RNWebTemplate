import * as ActionTypes from './ActionTypes';

const defaultState = {
  errMess: null,
  companies: [
    {
      name: 'Placeholder Text',
      id: 6,
    },
    {
      name: 'Placeholder Text',
      id: 5,
    },
    {
      name: 'Placeholder Text',
      id: 7,
    },
    {
      name: 'Placeholder Text',
      id: 45,
    },
    {
      name: 'Placeholder Text',
      id: 46,
    },
    {
      name: 'Placeholder Text',
      id: 47,
    },
    {
      name: 'Placeholder Text',
      id: 1,
    },
    {
      name: 'Placeholder Text',
      id: 2,
    },
    {
      name: 'Placeholder Text',
      id: 3,
    },
    {
      name: 'Placeholder Text',
      id: 34,
    },
    {
      name: 'Placeholder Text',
      id: 32,
    },
    {
      name: 'Placeholder Text',
      id: 22,
    },
    {
      name: 'Placeholder Text',
      id: 233,
    },
  ],
  tasks: [
    {
      id: 0,
      name: 'Task Name Here',
      description: 'Do so many things to help our company',
    },
    {
      id: 1,
      name: 'Task Name Here',
      description: 'Do so many things to help our company',
    },
    {
      id: 2,
      name: 'Task Name Here',
      description: 'Do so many things to help our company',
    },
    {
      id: 3,
      name: 'Task Name Here',
      description: 'Do so many things to help our company',
    },
  ],
};

export const companies = (state = defaultState, { type, payload }) => {
  switch (type) {
    case ActionTypes.UPDATE_COMPANIES:
      return { ...state, companies: payload };
    case ActionTypes.CLEAR_DATA:
      return { ...defaultState };
    default:
      return state;
  }
};
