import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {routerReducer} from 'react-router-redux';

import usersReducer from './reducer_users';
import loggedInUserReducer from './reducer_logged_in_user';

const rootReducer = combineReducers({
  users: usersReducer,
  loggedInUser: loggedInUserReducer,
  form: formReducer,
  routing: routerReducer
});

export default rootReducer;