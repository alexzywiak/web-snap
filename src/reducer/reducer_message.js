import {GET_MESSAGE} from '../action/index';

export default (state = null, action) => {
  switch(action.type){
    case GET_MESSAGE:
      return action.payload.data;
    default:
      return state;
  }
};