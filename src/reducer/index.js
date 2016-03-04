import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import usersReducer from './reducer_users';
import loggedInUserReducer from './reducer_logged_in_user';

const rootReducer = combineReducers({
  users: usersReducer,
  loggedInUser: loggedInUserReducer,
  form: formReducer
});

export default rootReducer;