import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import { reducer as formReducer } from 'redux-form'

const allReducers = combineReducers({
  users: UserReducer,
  form: formReducer
});

export default allReducers;
