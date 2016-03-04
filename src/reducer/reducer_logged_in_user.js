import {SIGN_UP, LOG_IN, GET_USER} from '../action/index';

export default (state = null, action) => {
  switch(action.type){
    case SIGN_UP:
      return action.payload.data;
    case LOG_IN:
      return action.payload.data;
    case GET_USER:
      return action.payload.data;
    default:
      return state;
  }
};