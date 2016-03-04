import {browserHistory} from 'react-router';

export function authorize(props, redirect) {
  const sessionToken = window.localStorage.getItem('session-token');
    if(!props.loggedInUser){
      if(window.localStorage.getItem('session-token')){
        const sessionToken = window.localStorage.getItem('session-token');
        props.getUserSession(sessionToken)
          .then( session => {
            const userId = session.payload.data.user.objectId;
            props.getUser(userId);
          });
      } else {
        browserHistory.push('redirect');
      }
    }
}