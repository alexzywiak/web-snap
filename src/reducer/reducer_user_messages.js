import {GET_USER_MESSAGE_LIST} from '../action/index';

export default (state = [], action) => {
  switch(action.type){
    case GET_USER_MESSAGE_LIST:
      return action.payload.data.results;
    default:
      return state;
  }
};