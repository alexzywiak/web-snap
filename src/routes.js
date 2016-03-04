import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './component/app';
import SignUp from './container/sign_up';
import LogIn from './container/log_in';
import NewMessage from './container/new_message';

export default (
  <Route path='/' component={App}>
   <Route path='/login' component={LogIn} />
   <Route path='/signup' component={SignUp} />
   <Route path='/newmessage' component={NewMessage} />
  </Route>
);