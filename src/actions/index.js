import { uniqueId } from 'lodash'; // uniqueId

export const addUser = user => {
  return {
    type: 'ADD_USER',
    payload: {
      id: uniqueId(),
      ...user
    }
  };
};

export const removeUser = id => {
  return {
    type: 'REMOVE_USER',
    payload: id
  }
};
