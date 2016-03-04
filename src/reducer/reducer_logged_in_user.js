import {SIGN_UP} from '../action/index';

export default (state = null, action) => {
  switch(action.type){
    case SIGN_UP:
      return action.payload.data;
    default:
      return state;
  }
};