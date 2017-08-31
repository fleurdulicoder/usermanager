import { fromJS } from 'immutable';
import data from './data';

const initialState = fromJS(data.users);

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USERS':
      return fromJS(action.payload);
    case 'ADD_USER':
      return state.push(fromJS(action.payload));
    case 'REMOVE_USER':
      return state.filter(user => user.get('id') !== fromJS(action.payload));
    default:
      return state;
  }
};
