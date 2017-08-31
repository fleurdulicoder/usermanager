import { uniqueId } from 'lodash';

// store.get('users').length + 1
export const addUser = user => ({
  payload: { id: uniqueId() + 10, ...user },
  type: 'ADD_USER',
});

export const removeUser = id => ({ payload: id, type: 'REMOVE_USER' });

export const getUsers = users => ({ payload: users, type: 'GET_USERS' });
