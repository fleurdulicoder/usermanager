import { uniqueId } from 'lodash';

export const addUser = user => ({
  payload: { id: uniqueId(), ...user },
  type: 'ADD_USER',
});

export const removeUser = id => ({ payload: id, type: 'REMOVE_USER' });

export const getUsers = users => ({ payload: users, type: 'GET_USERS' });
