import {SET_LOGGED_IN_USER} from '../action/index';

export default (state = null, action) => {
  switch(action.type){
    case SET_LOGGED_IN_USER:
      if(action.payload){
        if(action.payload.status === 200){
          return action.payload.data;
        } else {
          return null;
        }
      } else {
        return action.payload;
      }
    default:
      return state;
  }
};