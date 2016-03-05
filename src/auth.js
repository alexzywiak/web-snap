import {browserHistory} from 'react-router';
import * as bluebird from 'bluebird';

export function authorize(props, redirect) {
  const sessionToken = window.localStorage.getItem('session-token');
    
    if(!props.loggedInUser){
      
      if(window.localStorage.getItem('session-token')){
       
        const sessionToken = window.localStorage.getItem('session-token');
        
        return props.getUserSession(sessionToken)
          .then( session => {
            
            const userId = session.payload.data.user.objectId;
            return props.getUser(userId);
          });
      
      } else {
        browserHistory.push(redirect);
      }
    } else {
      return bluebird.resolve();
    }
}