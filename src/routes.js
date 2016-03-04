import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './component/app';
import SignUp from './container/sign_up';

export default (
  <Route path='/' component={App}>
   <Route path='/signup' component={SignUp} />
  </Route>
);