import {SET_LOGGED_IN_USER} from '../action/index';

export default (state = null, action) => {
  switch(action.type){
    case SET_LOGGED_IN_USER:
      if(action.payload){
        return action.payload.data;
      } else {
        return action.payload;
      }
    default:
      return state;
  }
};