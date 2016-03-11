import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './component/app';
import SignUp from './container/sign_up';
import LogIn from './container/log_in';
import NewMessage from './container/new_message';
import MessageList from './container/message_list';
import Message from './container/message';

export default (
  <Route path='/web-snap' component={App}>
   <IndexRoute component={MessageList} />
   <Route path='/web-snap/login' component={LogIn} />
   <Route path='/web-snap/signup' component={SignUp} />
   <Route path='/web-snap/newmessage' component={NewMessage} />
   <Route path='/web-snap/messages' component={MessageList} />
   <Route path='/web-snap/message/:id' component={Message} />
  </Route>
);