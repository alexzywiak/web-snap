import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {routerReducer} from 'react-router-redux';

import usersReducer from './reducer_users';
import loggedInUserReducer from './reducer_logged_in_user';
import userMessagesReducer from './reducer_user_messages';
import messageReducer from './reducer_message';
import flashMessageReducer from './reducer_flash_message';

const rootReducer = combineReducers({
  users: usersReducer,
  loggedInUser: loggedInUserReducer,
  messages: userMessagesReducer,
  message: messageReducer,
  flashMessage: flashMessageReducer,
  form: formReducer,
  routing: routerReducer
});

export default rootReducer;